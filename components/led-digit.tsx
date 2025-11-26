"use client"

import type React from "react"

// 7-segment LED display patterns for digits 0-9
const SEGMENT_PATTERNS: Record<string, boolean[]> = {
  "0": [true, true, true, true, true, true, false],
  "1": [false, true, true, false, false, false, false],
  "2": [true, true, false, true, true, false, true],
  "3": [true, true, true, true, false, false, true],
  "4": [false, true, true, false, false, true, true],
  "5": [true, false, true, true, false, true, true],
  "6": [true, false, true, true, true, true, true],
  "7": [true, true, true, false, false, false, false],
  "8": [true, true, true, true, true, true, true],
  "9": [true, true, true, true, false, true, true],
  ":": [false, false, false, false, false, false, false, true], // Special for colon
  ".": [false, false, false, false, false, false, false, false, true], // Special for dot
}

interface LEDDigitProps {
  digit: string
  color?: "red" | "green" | "yellow"
  size?: "sm" | "md" | "lg" | "xl"
  showDot?: boolean
}

const colorMap = {
  red: {
    on: "#ff2a2a",
    off: "#330808",
    glow: "0 0 20px #ff2a2a, 0 0 40px #ff2a2a, 0 0 60px #ff000080",
  },
  green: {
    on: "#00ff88",
    off: "#082818",
    glow: "0 0 20px #00ff88, 0 0 40px #00ff88, 0 0 60px #00ff8880",
  },
  yellow: {
    on: "#ffcc00",
    off: "#332800",
    glow: "0 0 20px #ffcc00, 0 0 40px #ffcc00, 0 0 60px #ffcc0080",
  },
}

const sizeMap = {
  sm: { width: 30, height: 50, segmentWidth: 6, gap: 2 },
  md: { width: 50, height: 80, segmentWidth: 10, gap: 3 },
  lg: { width: 80, height: 130, segmentWidth: 14, gap: 4 },
  xl: { width: 100, height: 160, segmentWidth: 18, gap: 5 },
}

export function LEDDigit({ digit, color = "red", size = "md", showDot = false }: LEDDigitProps) {
  const pattern = SEGMENT_PATTERNS[digit] || SEGMENT_PATTERNS["0"]
  const colors = colorMap[color]
  const dims = sizeMap[size]

  // Segment definitions: [a, b, c, d, e, f, g] - standard 7-segment layout
  const renderSegment = (index: number, isOn: boolean) => {
    const style: React.CSSProperties = {
      position: "absolute",
      backgroundColor: isOn ? colors.on : colors.off,
      boxShadow: isOn ? colors.glow : "none",
      borderRadius: dims.segmentWidth / 2,
      transition: "all 0.1s ease",
    }

    const sw = dims.segmentWidth
    const w = dims.width
    const h = dims.height

    switch (index) {
      case 0: // Top horizontal
        return <div key={index} style={{ ...style, top: 0, left: sw, width: w - sw * 2, height: sw }} />
      case 1: // Top-right vertical
        return <div key={index} style={{ ...style, top: sw, right: 0, width: sw, height: h / 2 - sw * 1.5 }} />
      case 2: // Bottom-right vertical
        return (
          <div key={index} style={{ ...style, top: h / 2 + sw / 2, right: 0, width: sw, height: h / 2 - sw * 1.5 }} />
        )
      case 3: // Bottom horizontal
        return <div key={index} style={{ ...style, bottom: 0, left: sw, width: w - sw * 2, height: sw }} />
      case 4: // Bottom-left vertical
        return (
          <div key={index} style={{ ...style, top: h / 2 + sw / 2, left: 0, width: sw, height: h / 2 - sw * 1.5 }} />
        )
      case 5: // Top-left vertical
        return <div key={index} style={{ ...style, top: sw, left: 0, width: sw, height: h / 2 - sw * 1.5 }} />
      case 6: // Middle horizontal
        return <div key={index} style={{ ...style, top: h / 2 - sw / 2, left: sw, width: w - sw * 2, height: sw }} />
      default:
        return null
    }
  }

  // Handle colon separately
  if (digit === ":") {
    const dotSize = dims.segmentWidth * 1.2
    return (
      <div style={{ width: dims.width / 2, height: dims.height, position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: dims.height / 3 - dotSize / 2,
            left: "50%",
            transform: "translateX(-50%)",
            width: dotSize,
            height: dotSize,
            backgroundColor: colors.on,
            borderRadius: "50%",
            boxShadow: colors.glow,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: (dims.height * 2) / 3 - dotSize / 2,
            left: "50%",
            transform: "translateX(-50%)",
            width: dotSize,
            height: dotSize,
            backgroundColor: colors.on,
            borderRadius: "50%",
            boxShadow: colors.glow,
          }}
        />
      </div>
    )
  }

  return (
    <div style={{ width: dims.width, height: dims.height, position: "relative", display: "inline-block" }}>
      {pattern.slice(0, 7).map((isOn, index) => renderSegment(index, isOn))}
      {showDot && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: -dims.segmentWidth,
            width: dims.segmentWidth,
            height: dims.segmentWidth,
            backgroundColor: colors.on,
            borderRadius: "50%",
            boxShadow: colors.glow,
          }}
        />
      )}
    </div>
  )
}

interface LEDNumberProps {
  value: string
  color?: "red" | "green" | "yellow"
  size?: "sm" | "md" | "lg" | "xl"
}

export function LEDNumber({ value, color = "red", size = "md" }: LEDNumberProps) {
  const dims = sizeMap[size]
  const gap = dims.gap * 3

  return (
    <div style={{ display: "flex", gap, alignItems: "center" }}>
      {value.split("").map((char, index) => {
        const showDot = char !== "." && value[index + 1] === "."
        if (char === ".") return null
        return <LEDDigit key={index} digit={char} color={color} size={size} showDot={showDot} />
      })}
    </div>
  )
}
