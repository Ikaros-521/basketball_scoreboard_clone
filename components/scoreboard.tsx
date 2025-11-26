"use client"

import { useEffect, useState, useCallback } from "react"
import { LEDNumber } from "./led-digit"

interface TeamData {
  name: string
  score: number
  fouls: number
  timeouts: number
}

interface GameState {
  homeTeam: TeamData
  awayTeam: TeamData
  quarter: number
  time: number // in seconds with decimals
  shotClock: number
}

export function Scoreboard() {
  const [gameState, setGameState] = useState<GameState>({
    homeTeam: { name: "比赛一队", score: 107, fouls: 4, timeouts: 0 },
    awayTeam: { name: "比赛二队", score: 119, fouls: 6, timeouts: 3 },
    quarter: 1,
    time: 579.8, // 9:39.8
    shotClock: 7,
  })

  const [flarePosition, setFlarePosition] = useState({ x: 50, y: 50 })
  const [flareOpacity, setFlareOpacity] = useState(0.3)

  // 模拟数据动态变化
  const simulateChange = useCallback(() => {
    setGameState((prev) => {
      const changes = Math.random()

      // 随机改变比分
      if (changes < 0.15) {
        const isHome = Math.random() > 0.5
        const points = Math.random() > 0.7 ? 3 : Math.random() > 0.5 ? 2 : 1
        return {
          ...prev,
          homeTeam: isHome ? { ...prev.homeTeam, score: prev.homeTeam.score + points } : prev.homeTeam,
          awayTeam: !isHome ? { ...prev.awayTeam, score: prev.awayTeam.score + points } : prev.awayTeam,
        }
      }

      // 随机改变犯规数
      if (changes < 0.25) {
        const isHome = Math.random() > 0.5
        return {
          ...prev,
          homeTeam: isHome ? { ...prev.homeTeam, fouls: Math.min(prev.homeTeam.fouls + 1, 9) } : prev.homeTeam,
          awayTeam: !isHome ? { ...prev.awayTeam, fouls: Math.min(prev.awayTeam.fouls + 1, 9) } : prev.awayTeam,
        }
      }

      // 时间递减
      let newTime = prev.time - 0.1
      let newQuarter = prev.quarter
      let newShotClock = prev.shotClock

      if (newTime <= 0) {
        newTime = 600 // 重置为10分钟
        newQuarter = prev.quarter >= 4 ? 1 : prev.quarter + 1
      }

      // 24秒计时器
      if (changes < 0.05) {
        newShotClock = 24
      } else {
        newShotClock = Math.max(0, prev.shotClock - 0.1)
        if (newShotClock <= 0) newShotClock = 24
      }

      return {
        ...prev,
        time: newTime,
        quarter: newQuarter,
        shotClock: Math.round(newShotClock),
      }
    })
  }, [])

  // 模拟光晕移动
  useEffect(() => {
    const flareInterval = setInterval(() => {
      setFlarePosition({
        x: 40 + Math.random() * 20,
        y: 40 + Math.random() * 20,
      })
      setFlareOpacity(0.2 + Math.random() * 0.3)
    }, 2000)

    return () => clearInterval(flareInterval)
  }, [])

  // 主模拟循环
  useEffect(() => {
    const interval = setInterval(simulateChange, 100)
    return () => clearInterval(interval)
  }, [simulateChange])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toFixed(1).padStart(4, "0")}`
  }

  return (
    <div className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* 背景噪点和纹理 */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 模拟镜头光晕 */}
      <div
        className="absolute pointer-events-none transition-all duration-1000"
        style={{
          left: `${flarePosition.x}%`,
          top: `${flarePosition.y}%`,
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "400px",
          background: `radial-gradient(circle, rgba(255,255,255,${flareOpacity}) 0%, rgba(100,255,150,${flareOpacity * 0.5}) 30%, transparent 70%)`,
          filter: "blur(30px)",
        }}
      />

      {/* 额外的光晕层 */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "60%",
          top: "40%",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(255,100,100,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* 主计分板 */}
      <div
        className="relative z-10 p-8 rounded-lg"
        style={{
          background: "linear-gradient(180deg, #0a0a0a 0%, #151515 100%)",
          boxShadow: "0 0 100px rgba(0,0,0,0.8), inset 0 0 50px rgba(0,0,0,0.5)",
          border: "2px solid #222",
        }}
      >
        {/* 队伍名称 */}
        <div className="flex justify-between items-center mb-6 px-4">
          <div
            className="text-2xl font-bold tracking-wider"
            style={{
              color: "#ff4444",
              textShadow: "0 0 10px #ff4444, 0 0 20px #ff4444",
              fontFamily: "monospace",
            }}
          >
            {gameState.homeTeam.name}
          </div>
          <div
            className="text-3xl font-bold"
            style={{
              color: "#ffffff",
              textShadow: "0 0 10px #ffffff",
            }}
          >
            VS
          </div>
          <div
            className="text-2xl font-bold tracking-wider"
            style={{
              color: "#ff4444",
              textShadow: "0 0 10px #ff4444, 0 0 20px #ff4444",
              fontFamily: "monospace",
            }}
          >
            {gameState.awayTeam.name}
          </div>
        </div>

        {/* 主显示区 */}
        <div className="flex items-start justify-center gap-6">
          {/* 主队区域 */}
          <div
            className="flex flex-col items-center p-4 rounded-lg"
            style={{
              background: "linear-gradient(180deg, #1a0505 0%, #0d0202 100%)",
              border: "3px solid #331111",
              boxShadow: "inset 0 0 30px rgba(255,0,0,0.1)",
            }}
          >
            <LEDNumber value={gameState.homeTeam.score.toString().padStart(3, "0")} color="red" size="xl" />
            <div className="flex gap-8 mt-4">
              <div className="flex flex-col items-center">
                <span className="text-xs text-red-400 mb-1" style={{ textShadow: "0 0 5px #ff0000" }}>
                  犯规
                </span>
                <LEDNumber value={gameState.homeTeam.fouls.toString()} color="yellow" size="md" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-red-400 mb-1" style={{ textShadow: "0 0 5px #ff0000" }}>
                  暂停
                </span>
                <LEDNumber value={gameState.homeTeam.timeouts.toString()} color="yellow" size="md" />
              </div>
            </div>
          </div>

          {/* 中间区域 - 时间和节次 */}
          <div className="flex flex-col items-center gap-4">
            {/* 节次 */}
            <div
              className="text-xl font-bold"
              style={{
                color: "#aaffaa",
                textShadow: "0 0 10px #00ff00",
              }}
            >
              第 {gameState.quarter} 节
            </div>

            {/* 时间显示 */}
            <div
              className="p-4 rounded-lg"
              style={{
                background: "linear-gradient(180deg, #051a0a 0%, #020d05 100%)",
                border: "3px solid #113311",
                boxShadow: "inset 0 0 30px rgba(0,255,0,0.1)",
              }}
            >
              <LEDNumber value={formatTime(gameState.time)} color="green" size="lg" />
            </div>

            {/* 24秒计时器 */}
            <div
              className="p-3 rounded-lg"
              style={{
                background: "linear-gradient(180deg, #1a0a05 0%, #0d0502 100%)",
                border: "2px solid #332211",
              }}
            >
              <LEDNumber value={gameState.shotClock.toString().padStart(2, "0")} color="red" size="md" />
            </div>
          </div>

          {/* 客队区域 */}
          <div
            className="flex flex-col items-center p-4 rounded-lg"
            style={{
              background: "linear-gradient(180deg, #1a0505 0%, #0d0202 100%)",
              border: "3px solid #331111",
              boxShadow: "inset 0 0 30px rgba(255,0,0,0.1)",
            }}
          >
            <LEDNumber value={gameState.awayTeam.score.toString().padStart(3, "0")} color="red" size="xl" />
            <div className="flex gap-8 mt-4">
              <div className="flex flex-col items-center">
                <span className="text-xs text-red-400 mb-1" style={{ textShadow: "0 0 5px #ff0000" }}>
                  犯规
                </span>
                <LEDNumber value={gameState.awayTeam.fouls.toString()} color="yellow" size="md" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-red-400 mb-1" style={{ textShadow: "0 0 5px #ff0000" }}>
                  暂停
                </span>
                <LEDNumber value={gameState.awayTeam.timeouts.toString()} color="yellow" size="md" />
              </div>
            </div>
          </div>
        </div>

        {/* 底部装饰线 */}
        <div
          className="mt-6 h-1 rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent, #333, transparent)",
          }}
        />
      </div>

      {/* 模拟CRT扫描线效果 */}
      <div
        className="absolute inset-0 pointer-events-none z-20 opacity-10"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
        }}
      />

      {/* 模拟镜头边缘暗角 */}
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </div>
  )
}
