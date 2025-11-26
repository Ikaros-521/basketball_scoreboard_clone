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
  ":": [false, false, false, false, false, false, false, true],
  ".": [false, false, false, false, false, false, false, false, true],
}

const DOT_MATRIX_PATTERNS: Record<string, number[][]> = {
  "0": [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  "1": [
    [0, 0, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
  ],
  "2": [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  "3": [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  "4": [
    [0, 0, 0, 1, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
  ],
  "5": [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  "6": [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  "7": [
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
  ],
  "8": [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  "9": [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
}

export type DisplayMode = "tube" | "dotMatrix"

interface LEDDigitProps {
  digit: string
  color?: "red" | "green" | "yellow"
  size?: "sm" | "md" | "lg" | "xl"
  showDot?: boolean
  displayMode?: DisplayMode
  glowIntensity?: number
}

const colorMap = {
  red: {
    on: "#ff2a2a",
    off: "#330808",
    glow: (intensity: number) =>
      `0 0 ${20 * intensity}px #ff2a2a, 0 0 ${40 * intensity}px #ff2a2a, 0 0 ${60 * intensity}px #ff000080`,
    dotGlow: (intensity: number) => `0 0 ${4 * intensity}px #ff2a2a, 0 0 ${8 * intensity}px #ff2a2a`,
  },
  green: {
    on: "#00ff88",
    off: "#082818",
    glow: (intensity: number) =>
      `0 0 ${20 * intensity}px #00ff88, 0 0 ${40 * intensity}px #00ff88, 0 0 ${60 * intensity}px #00ff8880`,
    dotGlow: (intensity: number) => `0 0 ${4 * intensity}px #00ff88, 0 0 ${8 * intensity}px #00ff88`,
  },
  yellow: {
    on: "#ffcc00",
    off: "#332800",
    glow: (intensity: number) =>
      `0 0 ${20 * intensity}px #ffcc00, 0 0 ${40 * intensity}px #ffcc00, 0 0 ${60 * intensity}px #ffcc0080`,
    dotGlow: (intensity: number) => `0 0 ${4 * intensity}px #ffcc00, 0 0 ${8 * intensity}px #ffcc00`,
  },
}

const sizeMap = {
  sm: { width: 30, height: 50, segmentWidth: 6, gap: 2, dotSize: 4, dotGap: 1 },
  md: { width: 50, height: 80, segmentWidth: 10, gap: 3, dotSize: 6, dotGap: 2 },
  lg: { width: 80, height: 130, segmentWidth: 14, gap: 4, dotSize: 10, dotGap: 3 },
  xl: { width: 100, height: 160, segmentWidth: 18, gap: 5, dotSize: 12, dotGap: 4 },
}

function DotMatrixDigit({ digit, color = "red", size = "md", glowIntensity = 1 }: Omit<LEDDigitProps, "displayMode">) {
  const pattern = DOT_MATRIX_PATTERNS[digit] || DOT_MATRIX_PATTERNS["0"]
  const colors = colorMap[color]
  const dims = sizeMap[size]
  const dotSize = dims.dotSize
  const dotGap = dims.dotGap

  if (digit === ":") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: dotSize * 2,
          height: (dotSize + dotGap) * 7,
          gap: dotSize * 2,
        }}
      >
        <div
          style={{
            width: dotSize,
            height: dotSize,
            borderRadius: "50%",
            backgroundColor: colors.on,
            boxShadow: colors.dotGlow(glowIntensity),
          }}
        />
        <div
          style={{
            width: dotSize,
            height: dotSize,
            borderRadius: "50%",
            backgroundColor: colors.on,
            boxShadow: colors.dotGlow(glowIntensity),
          }}
        />
      </div>
    )
  }

  if (digit === ".") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          width: dotSize,
          height: (dotSize + dotGap) * 7,
        }}
      >
        <div
          style={{
            width: dotSize,
            height: dotSize,
            borderRadius: "50%",
            backgroundColor: colors.on,
            boxShadow: colors.dotGlow(glowIntensity),
          }}
        />
      </div>
    )
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: dotGap,
      }}
    >
      {pattern.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex", gap: dotGap }}>
          {row.map((isOn, colIndex) => (
            <div
              key={colIndex}
              style={{
                width: dotSize,
                height: dotSize,
                borderRadius: "50%",
                backgroundColor: isOn ? colors.on : colors.off,
                boxShadow: isOn ? colors.dotGlow(glowIntensity) : "none",
                transition: "all 0.05s ease",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

function TubeDigit({
  digit,
  color = "red",
  size = "md",
  showDot = false,
  glowIntensity = 1,
}: Omit<LEDDigitProps, "displayMode">) {
  const pattern = SEGMENT_PATTERNS[digit] || SEGMENT_PATTERNS["0"]
  const colors = colorMap[color]
  const dims = sizeMap[size]

  const renderSegment = (index: number, isOn: boolean) => {
    const style: React.CSSProperties = {
      position: "absolute",
      backgroundColor: isOn ? colors.on : colors.off,
      boxShadow: isOn ? colors.glow(glowIntensity) : "none",
      borderRadius: dims.segmentWidth / 2,
      transition: "all 0.1s ease",
    }

    const sw = dims.segmentWidth
    const w = dims.width
    const h = dims.height

    switch (index) {
      case 0:
        return <div key={index} style={{ ...style, top: 0, left: sw, width: w - sw * 2, height: sw }} />
      case 1:
        return <div key={index} style={{ ...style, top: sw, right: 0, width: sw, height: h / 2 - sw * 1.5 }} />
      case 2:
        return (
          <div key={index} style={{ ...style, top: h / 2 + sw / 2, right: 0, width: sw, height: h / 2 - sw * 1.5 }} />
        )
      case 3:
        return <div key={index} style={{ ...style, bottom: 0, left: sw, width: w - sw * 2, height: sw }} />
      case 4:
        return (
          <div key={index} style={{ ...style, top: h / 2 + sw / 2, left: 0, width: sw, height: h / 2 - sw * 1.5 }} />
        )
      case 5:
        return <div key={index} style={{ ...style, top: sw, left: 0, width: sw, height: h / 2 - sw * 1.5 }} />
      case 6:
        return <div key={index} style={{ ...style, top: h / 2 - sw / 2, left: sw, width: w - sw * 2, height: sw }} />
      default:
        return null
    }
  }

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
            boxShadow: colors.glow(glowIntensity),
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
            boxShadow: colors.glow(glowIntensity),
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
            boxShadow: colors.glow(glowIntensity),
          }}
        />
      )}
    </div>
  )
}

export function LEDDigit({
  digit,
  color = "red",
  size = "md",
  showDot = false,
  displayMode = "tube",
  glowIntensity = 1,
}: LEDDigitProps) {
  if (displayMode === "dotMatrix") {
    return <DotMatrixDigit digit={digit} color={color} size={size} showDot={showDot} glowIntensity={glowIntensity} />
  }
  return <TubeDigit digit={digit} color={color} size={size} showDot={showDot} glowIntensity={glowIntensity} />
}

interface LEDNumberProps {
  value: string
  color?: "red" | "green" | "yellow"
  size?: "sm" | "md" | "lg" | "xl"
  displayMode?: DisplayMode
  glowIntensity?: number
}

export function LEDNumber({
  value,
  color = "red",
  size = "md",
  displayMode = "tube",
  glowIntensity = 1,
}: LEDNumberProps) {
  const dims = sizeMap[size]
  const gap = displayMode === "dotMatrix" ? dims.gap * 4 : dims.gap * 3

  return (
    <div style={{ display: "flex", gap, alignItems: "center" }}>
      {value.split("").map((char, index) => {
        const showDot = char !== "." && value[index + 1] === "."
        if (char === ".") return null
        return (
          <LEDDigit
            key={index}
            digit={char}
            color={color}
            size={size}
            showDot={showDot}
            displayMode={displayMode}
            glowIntensity={glowIntensity}
          />
        )
      })}
    </div>
  )
}
