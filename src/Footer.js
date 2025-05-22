import { useEffect, useRef } from "react";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/UselessBot/terms">Terms of Service</a>
        <a href="/UselessBot/privacy">Privacy Policy</a>
      </div>
      <p className="copyright">&copy; {new Date().getFullYear()} Useless Bot. All rights reserved.</p>
    </footer>
  );
}
