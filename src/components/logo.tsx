"use client";

import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "h-10", iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Umbrella SVG Logo Mark */}
      <svg
        viewBox="0 0 1000 750"
        className="h-full w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Blue Center Shaft and Handle */}
        <path
          d="M500 80 V500 C500 560, 480 620, 405 620 C340 620, 310 575, 310 535 C310 500, 335 480, 360 480 C385 480, 400 495, 400 520 C400 540, 395 560, 415 560 C435 560, 445 530, 445 490 V80 Z"
          fill="#1565C0"
        />

        {/* LEFT RED PANEL & PERSON */}
        <path
          d="M500 120 C400 120, 240 220, 170 450 C210 390, 260 370, 330 365 C335 340, 315 285, 235 320 C280 230, 385 150, 500 150 Z"
          fill="#E53935"
        />
        <circle cx="280" cy="310" r="28" fill="#E53935" />

        {/* MIDDLE-LEFT BLUE PANEL & PERSON */}
        <path
          d="M500 120 C440 120, 350 190, 320 450 C350 390, 400 370, 460 365 C465 340, 445 285, 375 320 C410 230, 460 150, 500 150 Z"
          fill="#1565C0"
        />
        <circle cx="390" cy="310" r="28" fill="#1565C0" />

        {/* MIDDLE-RIGHT GREEN PANEL & PERSON */}
        <path
          d="M500 120 C560 120, 650 190, 680 450 C650 390, 600 370, 540 365 C535 340, 555 285, 625 320 C590 230, 540 150, 500 150 Z"
          fill="#2E7D32"
        />
        <circle cx="610" cy="310" r="28" fill="#2E7D32" />

        {/* RIGHT PINK/MAGENTA PANEL & PERSON */}
        <path
          d="M500 120 C600 120, 760 220, 830 450 C790 390, 740 370, 670 365 C665 340, 685 285, 765 320 C720 230, 615 150, 500 150 Z"
          fill="#D81B60"
        />
        <circle cx="720" cy="310" r="28" fill="#D81B60" />
      </svg>

      {/* Branding Text */}
      {!iconOnly && (
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-wider leading-none text-[#1565C0] dark:text-white uppercase font-sans">
            Tila
          </span>
          <span className="text-[9px] font-semibold tracking-[0.25em] text-[#64748B] dark:text-[#EAF4FF]/60 uppercase leading-normal">
            Technologies
          </span>
        </div>
      )}
    </div>
  );
}
