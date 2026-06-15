import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: "#000000", 
      borderTop: "1px solid rgba(255, 255, 255, 0.1)", 
      padding: "40px 0",
      color: "#BDBDBD",
      fontFamily: "Montserrat, sans-serif",
      position: "relative",
      zIndex: 999,
    }}>
      <Container>
        <Row className="text-center text-md-start">
          {/* Logo/Brand Section */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 style={{ color: "#FFFFFF", fontWeight: "700", letterSpacing: "2px", marginBottom: "15px" }}>
              SWAP SKILL
            </h5>
            <p style={{ fontSize: "0.9rem" }}>
              Collaborative learning ecosystem built for growth. Learn, Teach, and Grow together.
            </p>
            <span style={{ color: "#FFFFFF" }}>Developed by Mohammad Abdullah</span>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-4 mb-md-0">
            <h6 style={{ color: "#FFFFFF", marginBottom: "15px" }}>Quick Links</h6>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="/" style={{ color: "#BDBDBD", textDecoration: "none", fontSize: "0.9rem" }}>Home</a></li>
              <li><a href="/discover" style={{ color: "#BDBDBD", textDecoration: "none", fontSize: "0.9rem" }}>Discover</a></li>
              <li><a href="/about_us" style={{ color: "#BDBDBD", textDecoration: "none", fontSize: "0.9rem" }}>About Us</a></li>
            </ul>
          </Col>

          {/* Stay Connected / Contact */}
          <Col md={4}>
            <h6 style={{ color: "#FFFFFF", marginBottom: "15px" }}>Stay Connected</h6>
            <p style={{ fontSize: "0.9rem", margin: "0" }}>
              Have questions? Reach out to us:
            </p>
            <a href="tel:+923267838125" style={{ color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "1rem" }}>
              +92 3267838125
            </a>
          </Col>
        </Row>

        <hr style={{ borderColor: "rgba(255, 255, 255, 0.1)", margin: "30px 0" }} />

        {/* Branding Footer Bottom */}
        <div className="text-center" style={{ fontSize: "0.85rem" }}>
          &copy; 2026 SwapSkill. All rights reserved. 
          
          
        </div>
      </Container>
    </footer>
  );
};

export default Footer;