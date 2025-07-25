"use client";

import { TypeAnimation } from "react-type-animation";
import { cn } from "@/lib/utils";

interface TypingEffectProps {
  sequences: (string | number)[];
  className?: string;
  speed?: number | { type: 'keyStrokeDelayInMs'; value: number };
  repeat?: number;
}

export function TypingEffect({
  sequences,
  className,
  speed = 50,
  repeat = Infinity,
}: TypingEffectProps) {
  // Convert the speed to the expected GranularSpeed format when it's a number
  const formattedSpeed = typeof speed === 'number' 
    ? { type: 'keyStrokeDelayInMs', value: speed } as const
    : speed;

  return (
    <TypeAnimation
      sequence={sequences}
      wrapper="span"
      speed={formattedSpeed}
      repeat={repeat}
      className={cn("inline-block", className)}
    />
  );
}