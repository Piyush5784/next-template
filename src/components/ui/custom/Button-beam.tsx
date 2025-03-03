"use client";

import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

export const BeamBetweenButtons = () => {
  const btn1Ref = useRef<HTMLButtonElement>(null);
  const btn2Ref = useRef<HTMLButtonElement>(null);
  const [beamStyle, setBeamStyle] = useState({
    width: 0,
    angle: 0,
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (btn1Ref.current && btn2Ref.current) {
      const rect1 = btn1Ref.current.getBoundingClientRect();
      const rect2 = btn2Ref.current.getBoundingClientRect();

      const x1 = rect1.x + rect1.width / 2;
      const y1 = rect1.y + rect1.height / 2;
      const x2 = rect2.x + rect2.width / 2;
      const y2 = rect2.y + rect2.height / 2;

      const dx = x2 - x1;
      const dy = y2 - y1;

      const width = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      setBeamStyle({
        width,
        angle,
        x: x1,
        y: y1,
      });
    }
  }, []);

  return (
    <div className="relative flex items-center justify-between gap-16 p-8">
      <button
        ref={btn1Ref}
        className="relative z-10 rounded-xl bg-blue-500 p-4 text-white"
      >
        Button 1
      </button>

      <motion.div
        className="absolute z-0"
        style={{
          width: beamStyle.width,
          transform: `translate(${beamStyle.x}px, ${beamStyle.y}px) rotate(${beamStyle.angle}deg)`,
        }}
      >
        <BorderBeam size={40} colorFrom="#ffaa40" colorTo="#9c40ff" />
      </motion.div>

      <button
        ref={btn2Ref}
        className="relative z-10 rounded-xl bg-green-500 p-4 text-white"
      >
        Button 2
      </button>
    </div>
  );
};

import { cn } from "@/lib/utils";
import { MotionStyle, Transition } from "motion/react";

interface BorderBeamProps {
  /**
   * The size of the border beam.
   */
  size?: number;
  /**
   * The duration of the border beam.
   */
  duration?: number;
  /**
   * The delay of the border beam.
   */
  delay?: number;
  /**
   * The color of the border beam from.
   */
  colorFrom?: string;
  /**
   * The color of the border beam to.
   */
  colorTo?: string;
  /**
   * The motion transition of the border beam.
   */
  transition?: Transition;
  /**
   * The class name of the border beam.
   */
  className?: string;
  /**
   * The style of the border beam.
   */
  style?: React.CSSProperties;
  /**
   * Whether to reverse the animation direction.
   */
  reverse?: boolean;
  /**
   * The initial offset position (0-100).
   */
  initialOffset?: number;
}

export const BorderBeam = ({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
}: BorderBeamProps) => {
  return (
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
      <motion.div
        className={cn(
          "absolute aspect-square",
          "bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent",
          className
        )}
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            "--color-from": colorFrom,
            "--color-to": colorTo,
            ...style,
          } as MotionStyle
        }
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
          delay: -delay,
          ...transition,
        }}
      />
    </div>
  );
};
