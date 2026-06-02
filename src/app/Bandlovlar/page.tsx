"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Bandlovlar() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Dastlabki tekshiruv
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(savedBookings);
  }, []);

  const deleteBooking = (id: number) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        padding: isMobile ? "80px 15px 40px 15px" : "80px 20px",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      <button
        onClick={() => router.back()}
        style={{
          position: "absolute",
          top: "20px",
          left: isMobile ? "10px" : "20px",
          padding: "10px 16px",
          borderRadius: "12px",
          border: "1px solid #333",
          backgroundColor: "#111",
          color: "#fff",
          cursor: "pointer",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        ← Orqaga
      </button>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: isMobile ? "32px" : "40px",
              fontWeight: 900,
              letterSpacing: "-1px",
            }}
          >
            MY <span style={{ color: "#3498db" }}>BOOKINGS</span>
          </h1>
          <p
            style={{
              color: "#666",
              marginTop: "10px",
              fontSize: isMobile ? "14px" : "16px",
            }}
          >
            Barcha faol bronlaringiz ro'yxati
          </p>
        </header>

        {bookings.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>📂</div>
            <p style={{ color: "#444" }}>
              Hozircha hech qanday bron mavjud emas.
            </p>
          </div>
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <AnimatePresence>
              {bookings.map((booking) => (
                <motion.div
                  key={booking.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  style={{
                    backgroundColor: "#111",
                    padding: isMobile ? "20px" : "25px",
                    borderRadius: "20px",
                    border: `1px solid ${
                      booking.type === "auto" ? "#3498db" : "#C5A358"
                    }`,
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: isMobile ? "20px" : "0",
                    justifyContent: "space-between",
                    alignItems: isMobile ? "flex-start" : "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <div style={{ fontSize: "30px" }}>
                      {booking.icon || (booking.type === "auto" ? "🚗" : "✂️")}
                    </div>
                    <div>
                      <h3 style={{ fontSize: "17px", margin: "0 0 5px 0" }}>
                        {booking.service}
                      </h3>
                      <div
                        style={{
                          display: "flex",
                          gap: "15px",
                          fontSize: "13px",
                          color: "#888",
                        }}
                      >
                        <span>📅 {booking.date}</span>
                        <span>⏰ {booking.time}</span>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: isMobile ? "space-between" : "flex-end",
                      alignItems: "center",
                      gap: "20px",
                      width: isMobile ? "100%" : "auto",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 900,
                        color: booking.type === "auto" ? "#3498db" : "#C5A358",
                        margin: 0,
                      }}
                    >
                      {booking.price?.toLocaleString()} UZS
                    </p>
                    <button
                      onClick={() => deleteBooking(booking.id)}
                      style={{
                        background: "rgba(255, 0, 0, 0.1)",
                        color: "#ff4d4d",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }}
                    >
                      Bekor qilish
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </main>
  );
}
