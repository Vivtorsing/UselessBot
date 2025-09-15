import { useEffect, useRef } from "react";
import "./styles.css";

export default function Nav() {
  return (
    <nav>
        <h1>Useless Bot</h1>
        <ul>
        <li><a href="/UselessBot/">Home</a></li>
        <li><a href="/UselessBot/commands">Commands</a></li>
        <li><a href="/UselessBot/premium">Premium</a></li>
        <li><a href="/UselessBot/releasenotes">Release Notes</a></li>
        <li><a href="/UselessBot/staff">Staff</a></li>
        </ul>
    </nav>
  );
}