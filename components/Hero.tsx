import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "I'm here to build innovative web apps",
      "MarceloPetry-Web-Developer.jsx",
      "<My work is based on details />"
    ],
    loop: true,
    delaySpeed: 1500
  });

  return (
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}
