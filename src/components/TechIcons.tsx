"use client";

import React from "react";
import Link from "next/link";

const techIconMap: Record<string, React.ReactNode> = {
  // ── AI & ML ────────────────────────────────────────────────────────────────
  OpenAI: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path
        d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.786a4.494 4.494 0 0 1-.676 8.105v-5.683a.79.79 0 0 0-.402-.671zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"
        fill="#10a37f"
      />
    </svg>
  ),
  TensorFlow: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-6.168-3.564V19.62L12.46 22V0l10.248 5.856.014 5.311z" fill="#FF6F00" />
    </svg>
  ),
  PyTorch: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M12.005 0L4.952 7.053a9.865 9.865 0 0 0 0 13.942 9.866 9.866 0 0 0 13.942 0c3.706-3.706 3.849-9.609.429-13.49l-1.695 1.695c2.521 3.043 2.377 7.57-.429 10.376a7.595 7.595 0 0 1-10.73 0 7.595 7.595 0 0 1 0-10.731l5.536-5.537V0zm2.321 3.296a1.296 1.296 0 1 0 0 2.592 1.296 1.296 0 0 0 0-2.592z" fill="#EE4C2C" />
    </svg>
  ),
  LangChain: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M6 5.25A.75.75 0 0 1 6.75 4.5h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 5.25zm0 4.5A.75.75 0 0 1 6.75 9h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 9.75zm0 4.5A.75.75 0 0 1 6.75 13.5h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 14.25zm0 4.5A.75.75 0 0 1 6.75 18h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 18.75z" fill="#1c7d4a" />
      <rect x="2" y="4" width="2.5" height="16" rx="1" fill="#1c7d4a" />
      <rect x="19.5" y="4" width="2.5" height="16" rx="1" fill="#1c7d4a" />
    </svg>
  ),
  "Hugging Face": <span className="text-xl select-none" role="img" aria-label="Hugging Face">🤗</span>,
  "Scikit-learn": (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#F7931E" />
      <path d="M8 10.5c0-.83.67-1.5 1.5-1.5S11 9.67 11 10.5 10.33 12 9.5 12 8 11.33 8 10.5zm5 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm-2.5 3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z" fill="#F7931E" />
    </svg>
  ),
  NumPy: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M10.315 2.143a2.47 2.47 0 0 1 3.37 0l8.172 7.815a2.47 2.47 0 0 1 0 3.57l-2.54 2.428-5.632-5.386a2.47 2.47 0 0 0-3.37 0L4.683 15.956l-2.54-2.428a2.47 2.47 0 0 1 0-3.57l8.172-7.815z" fill="#013243" />
      <path d="M5.51 17.73l5.632-5.386a.82.82 0 0 1 1.116 0l5.632 5.386-5.194 4.963a2.47 2.47 0 0 1-1.992 0L5.51 17.73z" fill="#4dabcf" />
    </svg>
  ),
  Pandas: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect x="4" y="3" width="3" height="18" rx="1.5" fill="#150458" />
      <rect x="10.5" y="3" width="3" height="18" rx="1.5" fill="#150458" />
      <rect x="17" y="3" width="3" height="18" rx="1.5" fill="#150458" />
      <rect x="4" y="9" width="16" height="2.5" rx="1.25" fill="#e70488" />
      <rect x="4" y="15" width="16" height="2.5" rx="1.25" fill="#e70488" />
    </svg>
  ),
  Keras: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="#D00000" />
      <path d="M8 6v12m0-6l4-4.5M8 12l4 4.5M14.5 6v12" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  "Apache Spark": (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M12 2l2.4 5.6L20 9.2l-4.5 4.4 1.1 6.4L12 17.2l-4.6 2.8 1.1-6.4L4 9.2l5.6-1.6z" fill="#E25A28" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.89S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.031v-2.867s-.109-3.402 3.35-3.402h5.766s3.24.052 3.24-3.13V3.296S18.325 0 11.914 0zM8.708 1.904a1.053 1.053 0 1 1 0 2.106 1.053 1.053 0 0 1 0-2.106z" fill="#3776AB" />
      <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.131S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.031v2.867s.109 3.402-3.35 3.402H9.45s-3.24-.052-3.24 3.13v5.234S5.675 24 12.086 24zm3.206-1.904a1.053 1.053 0 1 1 0-2.106 1.053 1.053 0 0 1 0 2.106z" fill="#FFD43B" />
    </svg>
  ),
  OpenCV: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <circle cx="12" cy="5.5" r="3.5" fill="#5C3EE8" />
      <circle cx="5.5" cy="16.5" r="3.5" fill="#00D8D6" />
      <circle cx="18.5" cy="16.5" r="3.5" fill="#FF0000" />
    </svg>
  ),

  // ── Frontend ───────────────────────────────────────────────────────────────
  React: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <ellipse cx="12" cy="12" rx="2" ry="2" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <circle cx="12" cy="12" r="10" fill="black" />
      <path d="M9.5 8v8l8-8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 14.5l2 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M12 6c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.76.19 1.303.742 1.903 1.35C13.357 10.807 14.517 12 17 12c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.76-.19-1.303-.742-1.903-1.35C15.643 7.193 14.483 6 12 6zm-5 6c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.76.19 1.303.742 1.903 1.35C8.357 16.807 9.517 18 12 18c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.76-.19-1.303-.742-1.903-1.35C10.643 13.193 9.483 12 7 12z" fill="#38B2AC" />
    </svg>
  ),
  Flutter: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M14.3 2.3L5 11.6l4.7 4.7 9.3-9.3z" fill="#54C5F8" />
      <path d="M14.3 21.7l-4.6-4.6 4.6-4.6 4.6 4.6z" fill="#01579B" />
      <path d="M9.7 17.1l4.6 4.6-2 .3-4.9-4.9 2.3-4.3 1.5 1.5z" fill="#29B6F6" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect width="24" height="24" rx="2" fill="#3178C6" />
      <path d="M14 9.5V11h-2.5v7.5H9.5V11H7V9.5H14zm1.5 5c0-1.5 1-2.5 2.5-2.5 1.3 0 2 .6 2 .6l-.5 1.1s-.6-.5-1.4-.5c-.7 0-1 .3-1 .9 0 .7.5.9 1.5 1.3 1.2.5 1.9 1 1.9 2.2 0 1.6-1.1 2.4-2.7 2.4-1.4 0-2.3-.7-2.3-.7l.5-1.1s.8.6 1.7.6c.7 0 1.2-.3 1.2-.9 0-.6-.4-.9-1.5-1.3C16 13.9 15.5 13.2 15.5 14.5z" fill="white" />
    </svg>
  ),
  HTML5: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M4 2l1.5 16 6.5 2 6.5-2L20 2H4z" fill="#E34F26" />
      <path d="M12 4.5h4.5l-.5 5.5H12V13l4-.6-.4 4.6-3.6 1-3.6-1-.3-3.4h1.8l.2 1.8 1.9.5V13H7.5l-.6-8H12z" fill="white" />
    </svg>
  ),

  // ── Backend ────────────────────────────────────────────────────────────────
  "Node.js": (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M12 1.5L2 7v10l10 5.5L22 17V7L12 1.5z" fill="#339933" />
      <path d="M12 4l7.5 4.5v9L12 22 4.5 17.5V8L12 4z" fill="#339933" />
      <path d="M8 9.5v5l4 2 4-2v-5l-4-2-4 2z" fill="white" fillOpacity=".8" />
      <path d="M12 10.5V16M9 12l3-1.5 3 1.5" stroke="#339933" strokeWidth="1.2" />
    </svg>
  ),
  NestJS: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M14.13 2.06c-.27 0-.55.03-.82.1a4.9 4.9 0 0 0-2.27 1.37 6.32 6.32 0 0 1 1.08-.09c2.12 0 3.95 1.08 5.02 2.71.47.7.77 1.48.87 2.28a5.15 5.15 0 0 0-3.88-6.37z" fill="#E0234E" />
      <path d="M10.6 3.9c-1.4.84-2.3 2.39-2.3 4.16 0 .38.04.75.13 1.1A5.15 5.15 0 0 0 12 14.06a5.14 5.14 0 0 0 4.6-2.84c.33-.62.52-1.32.52-2.07 0-2.55-2.07-4.62-4.62-4.62-.64 0-1.25.13-1.8.37z" fill="#E0234E" opacity=".8" />
      <path d="M9.67 2.2C7.9 2.74 6.5 4.23 6.04 6.07c-.13.5-.19 1.02-.19 1.56 0 3.27 2.65 5.92 5.92 5.92 1.48 0 2.82-.54 3.85-1.43a5.91 5.91 0 0 1-4.97-5.83c0-1.38.47-2.64 1.25-3.64a5.87 5.87 0 0 0-2.23-.45z" fill="#E0234E" opacity=".6" />
      <path d="M7 14c-1.06 1.58-1.5 3.68-.76 5.6.74 1.9 2.46 3.19 4.37 3.38 1.9.19 3.8-.67 4.96-2.16a5.44 5.44 0 0 1-4.4-2.2A5.45 5.45 0 0 1 10 14.96L9.78 14H7z" fill="#E0234E" />
    </svg>
  ),
  Go: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M1.8 9.6s-.3-.3 0-.5l.7-.7s.3-.2.5 0l.5.5s.2.3 0 .5l-.7.7s-.3.2-.5 0L1.8 9.6z" fill="#00ADD8" />
      <path d="M2.5 8.5h19v2H2.5z" fill="#00ADD8" />
      <path d="M17 7.5c0 0 0-1.5 1.5-1.5S20 7.5 20 7.5V11s0 1.5-1.5 1.5S17 11 17 11V7.5zM7 7.5C7 6 8 6 9 6s2 1 2 1.5V11c0 .5-1 1.5-2 1.5S7 11.5 7 11V7.5z" stroke="#00ADD8" strokeWidth="1" fill="none" />
      <circle cx="8.5" cy="7" r=".8" fill="#00ADD8" />
      <circle cx="15.5" cy="7" r=".8" fill="#00ADD8" />
      <path d="M9.5 7.5h1.5v1H9.5z" fill="#00ADD8" />
    </svg>
  ),
  Rust: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 1.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17z" fill="#CE422B" />
      <path d="M12 6.5c-3.038 0-5.5 2.462-5.5 5.5S8.962 17.5 12 17.5s5.5-2.462 5.5-5.5S15.038 6.5 12 6.5zm0 1.5c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z" fill="#CE422B" />
      <rect x="11.25" y="5" width="1.5" height="2" rx=".75" fill="#CE422B" />
      <rect x="11.25" y="17" width="1.5" height="2" rx=".75" fill="#CE422B" />
      <rect x="5" y="11.25" width="2" height="1.5" rx=".75" fill="#CE422B" />
      <rect x="17" y="11.25" width="2" height="1.5" rx=".75" fill="#CE422B" />
    </svg>
  ),

  // ── Mobile ─────────────────────────────────────────────────────────────────
  "React Native": (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <ellipse cx="12" cy="12" rx="2" ry="2" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
      <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
    </svg>
  ),
  Swift: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect width="24" height="24" rx="5" fill="#F05138" />
      <path d="M19 6.5C17 4.5 13.5 3.5 10 5c0 0 4 2.5 4.5 6.5 0 0-2-2.5-4.5-3.5-1-.5-3 0-4 1.5 0 0 2 3 5.5 4S17 17 18 16.5c1.5-1 2.5-3 1-5 0 0 1.5.5 2 2.5 0 0 2.5-4.5-2-7.5z" fill="white" />
    </svg>
  ),
  Kotlin: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <defs>
        <linearGradient id="kotlin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7F52FF" />
          <stop offset="100%" stopColor="#E44857" />
        </linearGradient>
      </defs>
      <path d="M2 2h10l10 10L12 22H2V2z" fill="url(#kotlin-grad)" />
      <path d="M2 2l10 10L2 22" stroke="white" strokeWidth="0" fill="none" />
    </svg>
  ),

  // ── Database ───────────────────────────────────────────────────────────────
  PostgreSQL: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M17.1 5.9c-.7-3.2-3.2-3.9-5.1-3.9-2.2 0-4.2 1-5.1 2.7-.8 1.5-.8 3.4-.1 5.1.5 1.2 1.3 2.1 2.2 2.7l-.5 5.6c-.1.6.2 1 .8 1 .4 0 .8-.3.8-.7l.5-5.3h.5l.5 5.3c.1.4.4.7.8.7.6 0 .9-.4.8-1l-.5-5.6c.9-.6 1.7-1.5 2.2-2.7.7-1.7.7-3.6-.1-5 0 .1 0 .1.1.1.1-.3.2-.6.2-1z" fill="#336791" />
      <path d="M15 9c-.5 1.5-1.7 2.5-3 2.5S9.5 10.5 9 9c-.5-1.5-.3-3.3.7-4.5C10.5 3.3 11.7 3 12 3s1.5.3 2.3 1.5c1 1.2 1.2 3 .7 4.5z" fill="white" fillOpacity=".3" />
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M12 2C9.3 7.8 7.5 10.8 12 22c4.5-11.2 2.7-14.2 0-20z" fill="#47A248" />
      <path d="M12 2c2.7 5.8 4.5 8.8 0 20-4.5-11.2-2.7-14.2 0-20z" fill="#A9D18E" fillOpacity=".6" />
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M3 6h18v2.5c-2 0-3.5.8-4.5 2.5-1 1.8-1 4.2 0 6H3V6z" fill="#4479A1" />
      <path d="M16.5 11c1-1.7 2.5-2.5 4.5-2.5V17c-2 0-3.5-.8-4.5-2.5-1-1.8-1-4.2 0-3.5z" fill="#00758F" />
      <text x="5" y="15" fontSize="5" fontWeight="bold" fill="white">MySQL</text>
    </svg>
  ),

  // ── Cloud ──────────────────────────────────────────────────────────────────
  AWS: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M6.76 11.13c0 .38.04.68.11.9.08.21.19.44.35.69a.42.42 0 0 1 .07.22c0 .1-.06.2-.19.3l-.63.42a.48.48 0 0 1-.26.09c-.1 0-.2-.05-.3-.14a3.1 3.1 0 0 1-.37-.48 7.9 7.9 0 0 1-.32-.6 4.22 4.22 0 0 1-3.34 1.57c-.95 0-1.71-.27-2.26-.82-.56-.54-.84-1.27-.84-2.18 0-.96.34-1.74 1.03-2.33.69-.58 1.6-.88 2.76-.88.38 0 .77.03 1.18.09.41.06.84.15 1.28.26v-.81c0-.85-.18-1.44-.52-1.78-.35-.35-.95-.52-1.8-.52-.38 0-.78.04-1.19.14-.4.1-.8.22-1.18.38-.18.08-.31.13-.39.15a.66.66 0 0 1-.17.03c-.15 0-.22-.11-.22-.34v-.53c0-.18.02-.31.08-.39a.83.83 0 0 1 .31-.23c.38-.2.84-.36 1.38-.49a6.8 6.8 0 0 1 1.72-.2c1.31 0 2.27.3 2.89.89.61.6.92 1.5.92 2.72v3.58zm-4.62 1.73c.37 0 .75-.07 1.14-.2.4-.14.75-.38 1.05-.72.18-.21.31-.44.38-.7.07-.26.11-.57.11-.93v-.45a9.3 9.3 0 0 0-1.02-.19 8.34 8.34 0 0 0-1.04-.07c-.74 0-1.28.14-1.65.44-.36.29-.54.71-.54 1.26 0 .51.13.9.4 1.16.26.27.64.4 1.17.4zm8.88 1.19c-.2 0-.33-.03-.42-.1-.09-.06-.17-.2-.24-.4L8.1 7.93a1.8 1.8 0 0 1-.09-.43c0-.17.08-.26.25-.26h1.03c.21 0 .35.03.43.1.09.06.16.2.22.4l1.61 6.35 1.5-6.35c.05-.21.12-.34.21-.4.09-.07.24-.1.44-.1h.84c.21 0 .35.03.44.1.09.06.17.2.21.4l1.52 6.43 1.65-6.43c.06-.21.14-.34.22-.4.09-.07.23-.1.43-.1h.98c.17 0 .26.08.26.26 0 .05-.01.1-.02.16-.02.06-.04.14-.08.25l-2.29 5.62c-.06.21-.14.34-.23.4-.09.06-.23.1-.42.1h-.9c-.21 0-.35-.03-.44-.1-.09-.07-.17-.2-.21-.41l-1.49-6.2-1.48 6.19c-.05.21-.12.34-.21.41-.09.07-.24.1-.44.1zm12.2.26c-.54 0-1.08-.06-1.61-.19a4.69 4.69 0 0 1-1.21-.46c-.17-.1-.29-.2-.33-.3a.8.8 0 0 1-.06-.31v-.55c0-.23.09-.34.26-.34.07 0 .14.01.21.04.07.02.17.07.28.12.38.17.79.3 1.23.39.45.09.88.13 1.33.13.7 0 1.25-.12 1.62-.37.38-.25.57-.6.57-1.06 0-.31-.1-.57-.3-.78-.2-.21-.58-.4-1.14-.58l-1.64-.51c-.83-.26-1.44-.64-1.83-1.14a2.71 2.71 0 0 1-.57-1.68c0-.49.1-.92.31-1.29.21-.37.49-.69.85-.95.36-.27.77-.47 1.25-.61a5.44 5.44 0 0 1 1.53-.2c.27 0 .55.01.82.05.28.04.54.09.79.16.24.06.47.14.68.22.21.09.37.18.49.27.16.1.27.21.34.32.07.1.1.24.1.41v.51c0 .23-.09.35-.26.35a1.2 1.2 0 0 1-.44-.14 5.3 5.3 0 0 0-2.22-.45c-.64 0-1.14.1-1.5.32-.36.21-.54.54-.54 1 0 .31.11.58.34.79.22.21.63.42 1.22.61l1.61.51c.82.26 1.41.62 1.78 1.1.36.47.54 1.01.54 1.61 0 .5-.1.95-.3 1.35-.2.39-.48.73-.84 1.01-.36.27-.79.48-1.29.62-.52.15-1.07.22-1.66.22z" fill="#FF9900" />
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="black">
      <path d="M12 2L2 22h20L12 2z" />
    </svg>
  ),
  "Google Cloud": (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M12 5.5C8.97 5.5 6.38 7.27 5.14 9.82A5.504 5.504 0 0 0 5.5 20.5h13a5 5 0 0 0 1.95-9.6A7.5 7.5 0 0 0 12 5.5z" fill="none" stroke="#4285F4" strokeWidth="1.5" />
      <path d="M15.5 12H12l-2 2h5.5" fill="#EA4335" />
      <path d="M10 14l2-2V9" stroke="#FBBC05" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1" fill="#34A853" />
    </svg>
  ),

  // ── DevOps ─────────────────────────────────────────────────────────────────
  Docker: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M13.5 11h-2V9h2v2zm-3 0h-2V9h2v2zm-3 0H5.5V9H7.5v2zm6 0h-2V9h2v2zm3 0h-2V9h2v2zM10.5 8H8.5V6h2v2zm3 0h-2V6h2v2zm3 0h-2V6h2v2z" fill="#2496ED" />
      <path d="M21.8 11.5c-.5-.3-1.6-.4-2.4-.2-.1-.9-.6-1.6-1.4-2.1l-.5-.3-.3.5c-.3.6-.5 1.5-.4 2.2-.4-.2-1.1-.3-1.3-.3H2.1c-.3 1.2 0 2.8.7 3.9.8 1.2 2 1.8 3.6 1.8 3.4 0 5.9-1.5 7.1-4.2h.6c.9 0 3 0 4.1-1.9.1-.1.2-.3.3-.5l.1-.2-.8-.7z" fill="#2496ED" />
    </svg>
  ),
  Kubernetes: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" stroke="#326CE5" strokeWidth="1.3" fill="none" />
      <circle cx="12" cy="12" r="2.5" fill="#326CE5" />
      <line x1="12" y1="2" x2="12" y2="9.5" stroke="#326CE5" strokeWidth="1.2" />
      <line x1="12" y1="14.5" x2="12" y2="22" stroke="#326CE5" strokeWidth="1.2" />
      <line x1="3.5" y1="6.8" x2="10" y2="10.5" stroke="#326CE5" strokeWidth="1.2" />
      <line x1="14" y1="13.5" x2="20.5" y2="17" stroke="#326CE5" strokeWidth="1.2" />
      <line x1="20.5" y1="6.8" x2="14" y2="10.5" stroke="#326CE5" strokeWidth="1.2" />
      <line x1="10" y1="13.5" x2="3.5" y2="17" stroke="#326CE5" strokeWidth="1.2" />
    </svg>
  ),
  "GitHub Actions": (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <circle cx="12" cy="12" r="10" fill="#2088FF" />
      <path d="M8 8l3 3-3 3M13 14h3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // ── Frameworks & Platforms ─────────────────────────────────────────────────
  Django: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect width="24" height="24" rx="3" fill="#092E20" />
      <path d="M13 5h2v9.5c0 2.5-1.17 3.5-3.04 3.5C10.26 18 9 17 9 15.5h2c0 .55.33.8.9.8.68 0 1.1-.35 1.1-1.2V5zM10 5h2v2h-2V5z" fill="white" />
    </svg>
  ),
  FastAPI: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <circle cx="12" cy="12" r="10" fill="#009688" />
      <path d="M12 5l-1 7h4l-6 7 1-7H6l6-7z" fill="white" />
    </svg>
  ),

  // ── Automation & Integration ────────────────────────────────────────────────
  Zapier: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect width="24" height="24" rx="5" fill="#FF4A00" />
      <path d="M12 4.5V10M12 14v5.5M4.5 12H10M14 12h5.5M6.5 6.5L9.8 9.8M14.2 14.2l3.3 3.3M17.5 6.5l-3.3 3.3M9.8 14.2L6.5 17.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  n8n: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect width="24" height="24" rx="5" fill="#EA4B71" />
      <text x="3.5" y="16.5" fontSize="9.5" fontWeight="900" fill="white" fontFamily="monospace">n8n</text>
    </svg>
  ),
  "REST APIs": (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect x="2" y="7" width="20" height="10" rx="3" fill="#6366F1" />
      <path d="M6 12h12M16 9l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Webhooks: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M12 2a4 4 0 0 1 3.46 6A4 4 0 1 1 8 13.54L5.54 18A2 2 0 1 1 4 17.27L6.54 12.7a4 4 0 0 1-.54-2 4 4 0 0 1 4-4A4 4 0 0 1 12 2z" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
    </svg>
  ),
};

function DefaultTechIcon({ name }: { name: string }) {
  const initials = name
    .split(/[\s./]+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return <span className="font-bold text-xs text-primary select-none">{initials}</span>;
}

export function TechIcon({ name }: { name: string }) {
  return (
    <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100 shrink-0">
      {techIconMap[name] ?? <DefaultTechIcon name={name} />}
    </div>
  );
}

interface TechCardGridProps {
  items: { name: string; href: string }[];
  linkable?: boolean;
}

export function TechCardGrid({ items, linkable = true }: TechCardGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) =>
        linkable ? (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3.5 p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:border-primary/20 hover:shadow-md transition-all duration-300 group cursor-pointer"
          >
            <div className="group-hover:scale-105 transition-transform duration-300">
              <TechIcon name={item.name} />
            </div>
            <span className="text-[13.5px] font-bold text-slate-800 group-hover:text-primary transition-colors">
              {item.name}
            </span>
          </Link>
        ) : (
          <div
            key={item.name}
            className="flex items-center gap-3.5 p-4 rounded-xl border border-gray-100 bg-white shadow-sm"
          >
            <TechIcon name={item.name} />
            <span className="text-[13.5px] font-bold text-slate-800">{item.name}</span>
          </div>
        )
      )}
    </div>
  );
}
