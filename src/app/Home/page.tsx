"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import service from "../images/avto servise.jpg";

export default function Home() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh", 
        backgroundColor: "#000",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <img
          src={service.src}
          alt="Service Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", 
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", 
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "20px", 
        }}
      >
        <header style={{ padding: "20px 0" }}>
          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(10px)",
              padding: "10px 20px",
              borderRadius: "12px",
              border: "1px solid rgba(52, 152, 219, 0.3)",
            }}
          >
            <h2
              style={{
                margin: 0,
                color: "#fff",
                fontSize: "18px",
                fontWeight: 900,
              }}
            >
              LUXE <span style={{ color: "#3498db" }}>AUTO</span>
            </h2>
          </div>
        </header>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(28px, 6vw, 60px)", 
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
              textShadow: "0 5px 15px rgba(0,0,0,0.5)",
              margin: "0 0 20px 0",
            }}
          >
            DRIVE WITH <br />
            <span style={{ color: "#3498db" }}>PERFECTION</span>
          </h1>

          <p
            style={{
              color: "#fff",
              fontSize: "clamp(14px, 2vw, 18px)",
              maxWidth: "500px",
              marginBottom: "40px",
              padding: "0 10px",
              fontWeight: 500,
            }}
          >
            Professional avto-servis va diagnostika xizmatlari.
          </p>

          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => router.push("/AutoService")}
            style={{
              padding: "15px 40px",
              fontSize: "16px",
              fontWeight: "900",
              backgroundColor: isHovered ? "#2980b9" : "#3498db",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "0.3s",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          >
            BRON QILISH
          </button>
        </div>
      </div>
    </main>
  );
}
