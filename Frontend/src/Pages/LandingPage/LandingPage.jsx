import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw", 
        background: "linear-gradient(135deg, #000000 0%, #111111 50%, #1a1a1a 100%)",
        overflowX: "hidden",
        position: "relative",
        color: "white",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {/* Background Glows (Responsive fix: z-index 0) */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "#FFFFFF",
          filter: "blur(250px)",
          opacity: 0.04,
          top: "-200px",
          left: "-200px",
          zIndex: 0,
          
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "#FFFFFF",
          filter: "blur(250px)",
          opacity: 0.04,
          bottom: "-200px",
          right: "-200px",
          zIndex: 0,
        }}
      />

      {/* HERO SECTION */}
      <section
        className="container-fluid d-flex justify-content-center align-items-center position-relative"
        style={{ minHeight: "100vh", padding: "20px" }}
      >
        {/* Images with Media Query logic handled by style */}
        <img
          src={"/assets/images/1.png"}
          alt="left"
          style={{
            position: "absolute",
            left: `${scrollPosition * 0.25}px`,
            top: "120px",
            width: "280px",
            opacity: 0.75,
            filter: "drop-shadow(0 20px 50px rgba(0,0,0,.6))",
            pointerEvents: "none",
          }}
          className="d-none d-lg-block"
        />
        <img
          src={"/assets/images/2.png"}
          alt="right"
          style={{
            position: "absolute",
            right: `${scrollPosition * 0.25}px`,
            bottom: "120px",
            width: "280px",
            opacity: 0.75,
            filter: "drop-shadow(0 20px 50px rgba(0,0,0,.6))",
            pointerEvents: "none",
          }}
          className="d-none d-lg-block"
        />

        <div
          className="text-center p-4 p-md-5"
          style={{
            maxWidth: "950px",
            width: "100%",
            borderRadius: "32px",
            background: "#000000",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 25px 90px rgba(0,0,0,.8)",
            zIndex: 2,
          }}
        >
          <div
            style={{
              color: "#BDBDBD",
              letterSpacing: "6px",
              fontSize: "0.9rem",
              marginBottom: "25px",
              textTransform: "uppercase",
            }}
          >
            Learn • Teach • Grow
          </div>
          <h1
            style={{
              fontFamily: "Josefin Sans, sans-serif",
              fontSize: "clamp(2.5rem, 8vw, 7rem)",
              fontWeight: "700",
              color: "#FFFFFF",
              margin: 0,
              letterSpacing: "10px",
              textShadow: "0 0 40px rgba(255,255,255,.15)",
            }}
          >
            SWAP SKILL
          </h1>
          <p style={{ color: "#BDBDBD", fontSize: "1.3rem", lineHeight: "2", maxWidth: "750px", margin: "35px auto" }}>
            Connect with talented individuals, exchange valuable skills, discover new opportunities, and become part of
            a collaborative learning ecosystem built for growth.
          </p>
          <button
            onClick={() => navigate("/login")}
            style={{
              background: "#FFFFFF",
              color: "#000000",
              border: "none",
              padding: "18px 42px",
              borderRadius: "999px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "700",
              boxShadow: "0 10px 40px rgba(255,255,255,.15)",
            }}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* WHY SECTION */}
      <section id="why-skill-swap" className="container" style={{ padding: "50px 30px 120px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: "700",
            marginBottom: "70px",
            fontFamily: "Oswald",
            letterSpacing: "2px",
          }}
        >
          WHY SWAP SKILL?
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
          {[
            {
              icon: "🚀",
              title: "Learn From Experts",
              text: "Gain practical knowledge and real-world insights directly from experienced mentors.",
            },
            {
              icon: "🎯",
              title: "Share Your Expertise",
              text: "Help others grow by teaching your skills while building your personal reputation.",
            },
            {
              icon: "🤝",
              title: "Collaborative Community",
              text: "Connect with ambitious learners and work together through meaningful interactions.",
            },
            {
              icon: "🌍",
              title: "Diverse Learning",
              text: "Explore countless skills ranging from technology and business to arts and creativity.",
            },
            {
              icon: "📈",
              title: "Continuous Growth",
              text: "Keep evolving, improving, and discovering new opportunities throughout your journey.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "35px",
                backdropFilter: "blur(12px)",
                boxShadow: "0 15px 40px rgba(0,0,0,.35)",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>{item.icon}</div>
              <h3 style={{ color: "#FFFFFF", fontSize: "1.4rem", marginBottom: "15px" }}>{item.title}</h3>
              <p style={{ color: "#BDBDBD", lineHeight: "1.8", margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
