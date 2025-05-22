import { useEffect, useRef } from "react";
import "./styles.css";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#23272A] shadow-lg">
        <h1 className="text-2xl font-bold text-pink-400">Useless Bot</h1>
        <ul className="flex space-x-6">
        <li><a href="/UselessBot/" className="hover:text-pink-400">Home</a></li>
        <li><a href="/UselessBot/commands" className="hover:text-pink-400">Commands</a></li>
        <li><a href="/UselessBot/premium" className="hover:text-pink-400">Premium</a></li>
        <li><a href="/UselessBot/releasenotes" className="hover:text-pink-400">Release Notes</a></li>
        <li><a href="/UselessBot/staff" className="hover:text-pink-400">Staff</a></li>
        </ul>
    </nav>
  );
}