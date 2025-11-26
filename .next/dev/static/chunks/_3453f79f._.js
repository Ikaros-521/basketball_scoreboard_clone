(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/led-digit.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LEDDigit",
    ()=>LEDDigit,
    "LEDNumber",
    ()=>LEDNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.store/next@16.0.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
// 7-segment LED display patterns for digits 0-9
const SEGMENT_PATTERNS = {
    "0": [
        true,
        true,
        true,
        true,
        true,
        true,
        false
    ],
    "1": [
        false,
        true,
        true,
        false,
        false,
        false,
        false
    ],
    "2": [
        true,
        true,
        false,
        true,
        true,
        false,
        true
    ],
    "3": [
        true,
        true,
        true,
        true,
        false,
        false,
        true
    ],
    "4": [
        false,
        true,
        true,
        false,
        false,
        true,
        true
    ],
    "5": [
        true,
        false,
        true,
        true,
        false,
        true,
        true
    ],
    "6": [
        true,
        false,
        true,
        true,
        true,
        true,
        true
    ],
    "7": [
        true,
        true,
        true,
        false,
        false,
        false,
        false
    ],
    "8": [
        true,
        true,
        true,
        true,
        true,
        true,
        true
    ],
    "9": [
        true,
        true,
        true,
        true,
        false,
        true,
        true
    ],
    ":": [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true
    ],
    ".": [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true
    ]
};
const colorMap = {
    red: {
        on: "#ff2a2a",
        off: "#330808",
        glow: "0 0 20px #ff2a2a, 0 0 40px #ff2a2a, 0 0 60px #ff000080"
    },
    green: {
        on: "#00ff88",
        off: "#082818",
        glow: "0 0 20px #00ff88, 0 0 40px #00ff88, 0 0 60px #00ff8880"
    },
    yellow: {
        on: "#ffcc00",
        off: "#332800",
        glow: "0 0 20px #ffcc00, 0 0 40px #ffcc00, 0 0 60px #ffcc0080"
    }
};
const sizeMap = {
    sm: {
        width: 30,
        height: 50,
        segmentWidth: 6,
        gap: 2
    },
    md: {
        width: 50,
        height: 80,
        segmentWidth: 10,
        gap: 3
    },
    lg: {
        width: 80,
        height: 130,
        segmentWidth: 14,
        gap: 4
    },
    xl: {
        width: 100,
        height: 160,
        segmentWidth: 18,
        gap: 5
    }
};
function LEDDigit({ digit, color = "red", size = "md", showDot = false }) {
    const pattern = SEGMENT_PATTERNS[digit] || SEGMENT_PATTERNS["0"];
    const colors = colorMap[color];
    const dims = sizeMap[size];
    // Segment definitions: [a, b, c, d, e, f, g] - standard 7-segment layout
    const renderSegment = (index, isOn)=>{
        const style = {
            position: "absolute",
            backgroundColor: isOn ? colors.on : colors.off,
            boxShadow: isOn ? colors.glow : "none",
            borderRadius: dims.segmentWidth / 2,
            transition: "all 0.1s ease"
        };
        const sw = dims.segmentWidth;
        const w = dims.width;
        const h = dims.height;
        switch(index){
            case 0:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...style,
                        top: 0,
                        left: sw,
                        width: w - sw * 2,
                        height: sw
                    }
                }, index, false, {
                    fileName: "[project]/components/led-digit.tsx",
                    lineNumber: 74,
                    columnNumber: 16
                }, this);
            case 1:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...style,
                        top: sw,
                        right: 0,
                        width: sw,
                        height: h / 2 - sw * 1.5
                    }
                }, index, false, {
                    fileName: "[project]/components/led-digit.tsx",
                    lineNumber: 76,
                    columnNumber: 16
                }, this);
            case 2:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...style,
                        top: h / 2 + sw / 2,
                        right: 0,
                        width: sw,
                        height: h / 2 - sw * 1.5
                    }
                }, index, false, {
                    fileName: "[project]/components/led-digit.tsx",
                    lineNumber: 79,
                    columnNumber: 11
                }, this);
            case 3:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...style,
                        bottom: 0,
                        left: sw,
                        width: w - sw * 2,
                        height: sw
                    }
                }, index, false, {
                    fileName: "[project]/components/led-digit.tsx",
                    lineNumber: 82,
                    columnNumber: 16
                }, this);
            case 4:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...style,
                        top: h / 2 + sw / 2,
                        left: 0,
                        width: sw,
                        height: h / 2 - sw * 1.5
                    }
                }, index, false, {
                    fileName: "[project]/components/led-digit.tsx",
                    lineNumber: 85,
                    columnNumber: 11
                }, this);
            case 5:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...style,
                        top: sw,
                        left: 0,
                        width: sw,
                        height: h / 2 - sw * 1.5
                    }
                }, index, false, {
                    fileName: "[project]/components/led-digit.tsx",
                    lineNumber: 88,
                    columnNumber: 16
                }, this);
            case 6:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...style,
                        top: h / 2 - sw / 2,
                        left: sw,
                        width: w - sw * 2,
                        height: sw
                    }
                }, index, false, {
                    fileName: "[project]/components/led-digit.tsx",
                    lineNumber: 90,
                    columnNumber: 16
                }, this);
            default:
                return null;
        }
    };
    // Handle colon separately
    if (digit === ":") {
        const dotSize = dims.segmentWidth * 1.2;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: dims.width / 2,
                height: dims.height,
                position: "relative"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        top: dims.height / 3 - dotSize / 2,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: dotSize,
                        height: dotSize,
                        backgroundColor: colors.on,
                        borderRadius: "50%",
                        boxShadow: colors.glow
                    }
                }, void 0, false, {
                    fileName: "[project]/components/led-digit.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        top: dims.height * 2 / 3 - dotSize / 2,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: dotSize,
                        height: dotSize,
                        backgroundColor: colors.on,
                        borderRadius: "50%",
                        boxShadow: colors.glow
                    }
                }, void 0, false, {
                    fileName: "[project]/components/led-digit.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/led-digit.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: dims.width,
            height: dims.height,
            position: "relative",
            display: "inline-block"
        },
        children: [
            pattern.slice(0, 7).map((isOn, index)=>renderSegment(index, isOn)),
            showDot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: 0,
                    right: -dims.segmentWidth,
                    width: dims.segmentWidth,
                    height: dims.segmentWidth,
                    backgroundColor: colors.on,
                    borderRadius: "50%",
                    boxShadow: colors.glow
                }
            }, void 0, false, {
                fileName: "[project]/components/led-digit.tsx",
                lineNumber: 135,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/led-digit.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_c = LEDDigit;
function LEDNumber({ value, color = "red", size = "md" }) {
    const dims = sizeMap[size];
    const gap = dims.gap * 3;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            gap,
            alignItems: "center"
        },
        children: value.split("").map((char, index)=>{
            const showDot = char !== "." && value[index + 1] === ".";
            if (char === ".") return null;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LEDDigit, {
                digit: char,
                color: color,
                size: size,
                showDot: showDot
            }, index, false, {
                fileName: "[project]/components/led-digit.tsx",
                lineNumber: 167,
                columnNumber: 16
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/led-digit.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_c1 = LEDNumber;
var _c, _c1;
__turbopack_context__.k.register(_c, "LEDDigit");
__turbopack_context__.k.register(_c1, "LEDNumber");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/scoreboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scoreboard",
    ()=>Scoreboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.store/next@16.0.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.store/next@16.0.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$led$2d$digit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/led-digit.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Scoreboard() {
    _s();
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        homeTeam: {
            name: "比赛一队",
            score: 107,
            fouls: 4,
            timeouts: 0
        },
        awayTeam: {
            name: "比赛二队",
            score: 119,
            fouls: 6,
            timeouts: 3
        },
        quarter: 1,
        time: 579.8,
        shotClock: 7
    });
    const [flarePosition, setFlarePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 50,
        y: 50
    });
    const [flareOpacity, setFlareOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.3);
    // 模拟数据动态变化
    const simulateChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Scoreboard.useCallback[simulateChange]": ()=>{
            setGameState({
                "Scoreboard.useCallback[simulateChange]": (prev)=>{
                    const changes = Math.random();
                    // 随机改变比分
                    if (changes < 0.15) {
                        const isHome = Math.random() > 0.5;
                        const points = Math.random() > 0.7 ? 3 : Math.random() > 0.5 ? 2 : 1;
                        return {
                            ...prev,
                            homeTeam: isHome ? {
                                ...prev.homeTeam,
                                score: prev.homeTeam.score + points
                            } : prev.homeTeam,
                            awayTeam: !isHome ? {
                                ...prev.awayTeam,
                                score: prev.awayTeam.score + points
                            } : prev.awayTeam
                        };
                    }
                    // 随机改变犯规数
                    if (changes < 0.25) {
                        const isHome = Math.random() > 0.5;
                        return {
                            ...prev,
                            homeTeam: isHome ? {
                                ...prev.homeTeam,
                                fouls: Math.min(prev.homeTeam.fouls + 1, 9)
                            } : prev.homeTeam,
                            awayTeam: !isHome ? {
                                ...prev.awayTeam,
                                fouls: Math.min(prev.awayTeam.fouls + 1, 9)
                            } : prev.awayTeam
                        };
                    }
                    // 时间递减
                    let newTime = prev.time - 0.1;
                    let newQuarter = prev.quarter;
                    let newShotClock = prev.shotClock;
                    if (newTime <= 0) {
                        newTime = 600; // 重置为10分钟
                        newQuarter = prev.quarter >= 4 ? 1 : prev.quarter + 1;
                    }
                    // 24秒计时器
                    if (changes < 0.05) {
                        newShotClock = 24;
                    } else {
                        newShotClock = Math.max(0, prev.shotClock - 0.1);
                        if (newShotClock <= 0) newShotClock = 24;
                    }
                    return {
                        ...prev,
                        time: newTime,
                        quarter: newQuarter,
                        shotClock: Math.round(newShotClock)
                    };
                }
            }["Scoreboard.useCallback[simulateChange]"]);
        }
    }["Scoreboard.useCallback[simulateChange]"], []);
    // 模拟光晕移动
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Scoreboard.useEffect": ()=>{
            const flareInterval = setInterval({
                "Scoreboard.useEffect.flareInterval": ()=>{
                    setFlarePosition({
                        x: 40 + Math.random() * 20,
                        y: 40 + Math.random() * 20
                    });
                    setFlareOpacity(0.2 + Math.random() * 0.3);
                }
            }["Scoreboard.useEffect.flareInterval"], 2000);
            return ({
                "Scoreboard.useEffect": ()=>clearInterval(flareInterval)
            })["Scoreboard.useEffect"];
        }
    }["Scoreboard.useEffect"], []);
    // 主模拟循环
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Scoreboard.useEffect": ()=>{
            const interval = setInterval(simulateChange, 100);
            return ({
                "Scoreboard.useEffect": ()=>clearInterval(interval)
            })["Scoreboard.useEffect"];
        }
    }["Scoreboard.useEffect"], [
        simulateChange
    ]);
    const formatTime = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toFixed(1).padStart(4, "0")}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-20",
                style: {
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }
            }, void 0, false, {
                fileName: "[project]/components/scoreboard.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute pointer-events-none transition-all duration-1000",
                style: {
                    left: `${flarePosition.x}%`,
                    top: `${flarePosition.y}%`,
                    transform: "translate(-50%, -50%)",
                    width: "400px",
                    height: "400px",
                    background: `radial-gradient(circle, rgba(255,255,255,${flareOpacity}) 0%, rgba(100,255,150,${flareOpacity * 0.5}) 30%, transparent 70%)`,
                    filter: "blur(30px)"
                }
            }, void 0, false, {
                fileName: "[project]/components/scoreboard.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute pointer-events-none",
                style: {
                    left: "60%",
                    top: "40%",
                    width: "200px",
                    height: "200px",
                    background: "radial-gradient(circle, rgba(255,100,100,0.15) 0%, transparent 70%)",
                    filter: "blur(40px)"
                }
            }, void 0, false, {
                fileName: "[project]/components/scoreboard.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 p-8 rounded-lg",
                style: {
                    background: "linear-gradient(180deg, #0a0a0a 0%, #151515 100%)",
                    boxShadow: "0 0 100px rgba(0,0,0,0.8), inset 0 0 50px rgba(0,0,0,0.5)",
                    border: "2px solid #222"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-6 px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold tracking-wider",
                                style: {
                                    color: "#ff4444",
                                    textShadow: "0 0 10px #ff4444, 0 0 20px #ff4444",
                                    fontFamily: "monospace"
                                },
                                children: gameState.homeTeam.name
                            }, void 0, false, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-bold",
                                style: {
                                    color: "#ffffff",
                                    textShadow: "0 0 10px #ffffff"
                                },
                                children: "VS"
                            }, void 0, false, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold tracking-wider",
                                style: {
                                    color: "#ff4444",
                                    textShadow: "0 0 10px #ff4444, 0 0 20px #ff4444",
                                    fontFamily: "monospace"
                                },
                                children: gameState.awayTeam.name
                            }, void 0, false, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/scoreboard.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center p-4 rounded-lg",
                                style: {
                                    background: "linear-gradient(180deg, #1a0505 0%, #0d0202 100%)",
                                    border: "3px solid #331111",
                                    boxShadow: "inset 0 0 30px rgba(255,0,0,0.1)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$led$2d$digit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEDNumber"], {
                                        value: gameState.homeTeam.score.toString().padStart(3, "0"),
                                        color: "red",
                                        size: "xl"
                                    }, void 0, false, {
                                        fileName: "[project]/components/scoreboard.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-8 mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-red-400 mb-1",
                                                        style: {
                                                            textShadow: "0 0 5px #ff0000"
                                                        },
                                                        children: "犯规"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/scoreboard.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$led$2d$digit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEDNumber"], {
                                                        value: gameState.homeTeam.fouls.toString(),
                                                        color: "yellow",
                                                        size: "md"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/scoreboard.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/scoreboard.tsx",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-red-400 mb-1",
                                                        style: {
                                                            textShadow: "0 0 5px #ff0000"
                                                        },
                                                        children: "暂停"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/scoreboard.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$led$2d$digit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEDNumber"], {
                                                        value: gameState.homeTeam.timeouts.toString(),
                                                        color: "yellow",
                                                        size: "md"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/scoreboard.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/scoreboard.tsx",
                                                lineNumber: 209,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/scoreboard.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xl font-bold",
                                        style: {
                                            color: "#aaffaa",
                                            textShadow: "0 0 10px #00ff00"
                                        },
                                        children: [
                                            "第 ",
                                            gameState.quarter,
                                            " 节"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/scoreboard.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-lg",
                                        style: {
                                            background: "linear-gradient(180deg, #051a0a 0%, #020d05 100%)",
                                            border: "3px solid #113311",
                                            boxShadow: "inset 0 0 30px rgba(0,255,0,0.1)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$led$2d$digit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEDNumber"], {
                                            value: formatTime(gameState.time),
                                            color: "green",
                                            size: "lg"
                                        }, void 0, false, {
                                            fileName: "[project]/components/scoreboard.tsx",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/scoreboard.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 rounded-lg",
                                        style: {
                                            background: "linear-gradient(180deg, #1a0a05 0%, #0d0502 100%)",
                                            border: "2px solid #332211"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$led$2d$digit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEDNumber"], {
                                            value: gameState.shotClock.toString().padStart(2, "0"),
                                            color: "red",
                                            size: "md"
                                        }, void 0, false, {
                                            fileName: "[project]/components/scoreboard.tsx",
                                            lineNumber: 251,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/scoreboard.tsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center p-4 rounded-lg",
                                style: {
                                    background: "linear-gradient(180deg, #1a0505 0%, #0d0202 100%)",
                                    border: "3px solid #331111",
                                    boxShadow: "inset 0 0 30px rgba(255,0,0,0.1)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$led$2d$digit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEDNumber"], {
                                        value: gameState.awayTeam.score.toString().padStart(3, "0"),
                                        color: "red",
                                        size: "xl"
                                    }, void 0, false, {
                                        fileName: "[project]/components/scoreboard.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-8 mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-red-400 mb-1",
                                                        style: {
                                                            textShadow: "0 0 5px #ff0000"
                                                        },
                                                        children: "犯规"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/scoreboard.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$led$2d$digit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEDNumber"], {
                                                        value: gameState.awayTeam.fouls.toString(),
                                                        color: "yellow",
                                                        size: "md"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/scoreboard.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/scoreboard.tsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-red-400 mb-1",
                                                        style: {
                                                            textShadow: "0 0 5px #ff0000"
                                                        },
                                                        children: "暂停"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/scoreboard.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$led$2d$digit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEDNumber"], {
                                                        value: gameState.awayTeam.timeouts.toString(),
                                                        color: "yellow",
                                                        size: "md"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/scoreboard.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/scoreboard.tsx",
                                                lineNumber: 272,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/scoreboard.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/scoreboard.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 h-1 rounded-full",
                        style: {
                            background: "linear-gradient(90deg, transparent, #333, transparent)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/scoreboard.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/scoreboard.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none z-20 opacity-10",
                style: {
                    background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)"
                }
            }, void 0, false, {
                fileName: "[project]/components/scoreboard.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none z-20",
                style: {
                    background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/scoreboard.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/scoreboard.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(Scoreboard, "I3I6308AWS1miH71/XNjiihSD24=");
_c = Scoreboard;
var _c;
__turbopack_context__.k.register(_c, "Scoreboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.store/next@16.0.3/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.store/next@16.0.3/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/.store/next@16.0.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/.store/next@16.0.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.store/next@16.0.3/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/.store/next@16.0.3/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_3453f79f._.js.map