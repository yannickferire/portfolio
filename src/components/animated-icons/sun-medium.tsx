"use client"

import type { Variants } from "motion/react"
import { motion, useAnimation } from "motion/react"
import type { HTMLAttributes } from "react"
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react"

import { cn } from "@/lib/utils"

export interface SunMediumIconHandle {
  startAnimation: () => void
  stopAnimation: () => void
}

interface SunMediumIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
}

const pathVariants: Variants = {
  normal: { opacity: 1 },
  animate: (i: number) => ({
    opacity: [0, 1],
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
}

const SunMediumIcon = forwardRef<SunMediumIconHandle, SunMediumIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 24, ...props }, ref) => {
    const controls = useAnimation()
    const isControlledRef = useRef(false)

    useImperativeHandle(ref, () => {
      isControlledRef.current = true

      return {
        startAnimation: () => controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      }
    })

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start("animate")
        } else {
          onMouseEnter?.(e)
        }
      },
      [controls, onMouseEnter]
    )

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start("normal")
        } else {
          onMouseLeave?.(e)
        }
      },
      [controls, onMouseLeave]
    )

    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" />
          {[
            "M12 2V3.5",
            "M12 20.5V22",
            "M3.5 12H2",
            "M20.5 12H22",
            "M19.0708 19.0713L18.0101 18.0106",
            "M5.98926 5.98926L4.9286 4.9286",
            "M19.0713 4.92871L18.0106 5.98937",
            "M5.98975 18.0107L4.92909 19.0714",
          ].map((d, index) => (
            <motion.path
              key={d}
              d={d}
              animate={controls}
              variants={pathVariants}
              custom={index + 1}
            />
          ))}
        </svg>
      </div>
    )
  }
)

SunMediumIcon.displayName = "SunMediumIcon"

export { SunMediumIcon }
