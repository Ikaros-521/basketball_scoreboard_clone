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
const DOT_MATRIX_PATTERNS = {
    "0": [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            1,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            1,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    "1": [
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    "2": [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            1,
            1,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            1
        ]
    ],
    "3": [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            1,
            1,
            0
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    "4": [
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            1,
            0
        ],
        [
            0,
            1,
            0,
            1,
            0
        ],
        [
            1,
            0,
            0,
            1,
            0
        ],
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            1,
            0
        ]
    ],
    "5": [
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    "6": [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    "7": [
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ]
    ],
    "8": [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    "9": [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ]
};
const colorMap = {
    red: {
        on: "#ff2a2a",
        off: "#330808",
        glow: (intensity)=>`0 0 ${20 * intensity}px #ff2a2a, 0 0 ${40 * intensity}px #ff2a2a, 0 0 ${60 * intensity}px #ff000080`,
        dotGlow: (intensity)=>`0 0 ${4 * intensity}px #ff2a2a, 0 0 ${8 * intensity}px #ff2a2a`
    },
    green: {
        on: "#00ff88",
        off: "#082818",
        glow: (intensity)=>`0 0 ${20 * intensity}px #00ff88, 0 0 ${40 * intensity}px #00ff88, 0 0 ${60 * intensity}px #00ff8880`,
        dotGlow: (intensity)=>`0 0 ${4 * intensity}px #00ff88, 0 0 ${8 * intensity}px #00ff88`
    },
    yellow: {
        on: "#ffcc00",
        off: "#332800",
        glow: (intensity)=>`0 0 ${20 * intensity}px #ffcc00, 0 0 ${40 * intensity}px #ffcc00, 0 0 ${60 * intensity}px #ffcc0080`,
        dotGlow: (intensity)=>`0 0 ${4 * intensity}px #ffcc00, 0 0 ${8 * intensity}px #ffcc00`
    }
};
const sizeMap = {
    sm: {
        width: 30,
        height: 50,
        segmentWidth: 6,
        gap: 2,
        dotSize: 4,
        dotGap: 1
    },
    md: {
        width: 50,
        height: 80,
        segmentWidth: 10,
        gap: 3,
        dotSize: 6,
        dotGap: 2
    },
    lg: {
        width: 80,
        height: 130,
        segmentWidth: 14,
        gap: 4,
        dotSize: 10,
        dotGap: 3
    },
    xl: {
        width: 100,
        height: 160,
        segmentWidth: 18,
        gap: 5,
        dotSize: 12,
        dotGap: 4
    }
};
function DotMatrixDigit({ digit, color = "red", size = "md", glowIntensity = 1 }) {
    const pattern = DOT_MATRIX_PATTERNS[digit] || DOT_MATRIX_PATTERNS["0"];
    const colors = colorMap[color];
    const dims = sizeMap[size];
    const dotSize = dims.dotSize;
    const dotGap = dims.dotGap;
    if (digit === ":") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: dotSize * 2,
                height: (dotSize + dotGap) * 7,
                gap: dotSize * 2
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: dotSize,
                        height: dotSize,
                        borderRadius: "50%",
                        backgroundColor: colors.on,
                        boxShadow: colors.dotGlow(glowIntensity)
                    }
                }, void 0, false, {
                    fileName: "[project]/components/led-digit.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: dotSize,
                        height: dotSize,
                        borderRadius: "50%",
                        backgroundColor: colors.on,
                        boxShadow: colors.dotGlow(glowIntensity)
                    }
                }, void 0, false, {
                    fileName: "[project]/components/led-digit.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/led-digit.tsx",
            lineNumber: 165,
            columnNumber: 7
        }, this);
    }
    if (digit === ".") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                width: dotSize,
                height: (dotSize + dotGap) * 7
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: dotSize,
                    height: dotSize,
                    borderRadius: "50%",
                    backgroundColor: colors.on,
                    boxShadow: colors.dotGlow(glowIntensity)
                }
            }, void 0, false, {
                fileName: "[project]/components/led-digit.tsx",
                lineNumber: 209,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/led-digit.tsx",
            lineNumber: 200,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: dotGap
        },
        children: pattern.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: dotGap
                },
                children: row.map((isOn, colIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: dotSize,
                            height: dotSize,
                            borderRadius: "50%",
                            backgroundColor: isOn ? colors.on : colors.off,
                            boxShadow: isOn ? colors.dotGlow(glowIntensity) : "none",
                            transition: "all 0.05s ease"
                        }
                    }, colIndex, false, {
                        fileName: "[project]/components/led-digit.tsx",
                        lineNumber: 233,
                        columnNumber: 13
                    }, this))
            }, rowIndex, false, {
                fileName: "[project]/components/led-digit.tsx",
                lineNumber: 231,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/led-digit.tsx",
        lineNumber: 223,
        columnNumber: 5
    }, this);
}
_c = DotMatrixDigit;
function TubeDigit({ digit, color = "red", size = "md", showDot = false, glowIntensity = 1 }) {
    const pattern = SEGMENT_PATTERNS[digit] || SEGMENT_PATTERNS["0"];
    const colors = colorMap[color];
    const dims = sizeMap[size];
    const renderSegment = (index, isOn)=>{
        const style = {
            position: "absolute",
            backgroundColor: isOn ? colors.on : colors.off,
            boxShadow: isOn ? colors.glow(glowIntensity) : "none",
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
                    lineNumber: 277,
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
                    lineNumber: 279,
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
                    lineNumber: 282,
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
                    lineNumber: 285,
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
                    lineNumber: 288,
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
                    lineNumber: 291,
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
                    lineNumber: 293,
                    columnNumber: 16
                }, this);
            default:
                return null;
        }
    };
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
                        boxShadow: colors.glow(glowIntensity)
                    }
                }, void 0, false, {
                    fileName: "[project]/components/led-digit.tsx",
                    lineNumber: 303,
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
                        boxShadow: colors.glow(glowIntensity)
                    }
                }, void 0, false, {
                    fileName: "[project]/components/led-digit.tsx",
                    lineNumber: 316,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/led-digit.tsx",
            lineNumber: 302,
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
                    boxShadow: colors.glow(glowIntensity)
                }
            }, void 0, false, {
                fileName: "[project]/components/led-digit.tsx",
                lineNumber: 337,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/led-digit.tsx",
        lineNumber: 334,
        columnNumber: 5
    }, this);
}
_c1 = TubeDigit;
function LEDDigit({ digit, color = "red", size = "md", showDot = false, displayMode = "tube", glowIntensity = 1 }) {
    if (displayMode === "dotMatrix") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DotMatrixDigit, {
            digit: digit,
            color: color,
            size: size,
            showDot: showDot,
            glowIntensity: glowIntensity
        }, void 0, false, {
            fileName: "[project]/components/led-digit.tsx",
            lineNumber: 363,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TubeDigit, {
        digit: digit,
        color: color,
        size: size,
        showDot: showDot,
        glowIntensity: glowIntensity
    }, void 0, false, {
        fileName: "[project]/components/led-digit.tsx",
        lineNumber: 365,
        columnNumber: 10
    }, this);
}
_c2 = LEDDigit;
function LEDNumber({ value, color = "red", size = "md", displayMode = "tube", glowIntensity = 1 }) {
    const dims = sizeMap[size];
    const gap = displayMode === "dotMatrix" ? dims.gap * 4 : dims.gap * 3;
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
                showDot: showDot,
                displayMode: displayMode,
                glowIntensity: glowIntensity
            }, index, false, {
                fileName: "[project]/components/led-digit.tsx",
                lineNumber: 392,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/led-digit.tsx",
        lineNumber: 387,
        columnNumber: 5
    }, this);
}
_c3 = LEDNumber;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "DotMatrixDigit");
__turbopack_context__.k.register(_c1, "TubeDigit");
__turbopack_context__.k.register(_c2, "LEDDigit");
__turbopack_context__.k.register(_c3, "LEDNumber");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$lucide$2d$react$40$0$2e$454$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/.store/lucide-react@0.454.0/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$lucide$2d$react$40$0$2e$454$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.store/lucide-react@0.454.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const initialGameState = {
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
};
function Scoreboard() {
    _s();
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialGameState);
    const [flarePosition, setFlarePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 50,
        y: 50
    });
    const [flareOpacity, setFlareOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.3);
    const [displayMode, setDisplayMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("tube");
    const [showSettings, setShowSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [glowIntensity, setGlowIntensity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [flareIntensity, setFlareIntensity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isSimulating, setIsSimulating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const simulationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 模拟数据动态变化
    const simulateChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Scoreboard.useCallback[simulateChange]": ()=>{
            setGameState({
                "Scoreboard.useCallback[simulateChange]": (prev)=>{
                    const changes = Math.random();
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
                    let newTime = prev.time - 0.1;
                    let newQuarter = prev.quarter;
                    let newShotClock = prev.shotClock;
                    if (newTime <= 0) {
                        newTime = 600;
                        newQuarter = prev.quarter >= 4 ? 1 : prev.quarter + 1;
                    }
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Scoreboard.useEffect": ()=>{
            if (isSimulating) {
                simulationRef.current = setInterval(simulateChange, 100);
            } else {
                if (simulationRef.current) {
                    clearInterval(simulationRef.current);
                    simulationRef.current = null;
                }
            }
            return ({
                "Scoreboard.useEffect": ()=>{
                    if (simulationRef.current) {
                        clearInterval(simulationRef.current);
                    }
                }
            })["Scoreboard.useEffect"];
        }
    }["Scoreboard.useEffect"], [
        simulateChange,
        isSimulating
    ]);
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
    const resetData = ()=>{
        setGameState({
            homeTeam: {
                name: "比赛一队",
                score: 0,
                fouls: 0,
                timeouts: 0
            },
            awayTeam: {
                name: "比赛二队",
                score: 0,
                fouls: 0,
                timeouts: 0
            },
            quarter: 1,
            time: 600,
            shotClock: 24
        });
    };
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
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute pointer-events-none transition-all duration-1000",
                style: {
                    left: `${flarePosition.x}%`,
                    top: `${flarePosition.y}%`,
                    transform: "translate(-50%, -50%)",
                    width: `${400 * flareIntensity}px`,
                    height: `${400 * flareIntensity}px`,
                    background: `radial-gradient(circle, rgba(255,255,255,${flareOpacity * flareIntensity}) 0%, rgba(100,255,150,${flareOpacity * 0.5 * flareIntensity}) 30%, transparent 70%)`,
                    filter: `blur(${30 * flareIntensity}px)`,
                    opacity: flareIntensity
                }
            }, void 0, false, {
                fileName: "[project]/components/scoreboard.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute pointer-events-none",
                style: {
                    left: "60%",
                    top: "40%",
                    width: `${200 * flareIntensity}px`,
                    height: `${200 * flareIntensity}px`,
                    background: `radial-gradient(circle, rgba(255,100,100,${0.15 * flareIntensity}) 0%, transparent 70%)`,
                    filter: `blur(${40 * flareIntensity}px)`,
                    opacity: flareIntensity
                }
            }, void 0, false, {
                fileName: "[project]/components/scoreboard.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute pointer-events-none",
                style: {
                    left: "45%",
                    top: "55%",
                    width: `${150 * flareIntensity}px`,
                    height: `${150 * flareIntensity}px`,
                    background: `radial-gradient(circle, rgba(100,255,100,${0.12 * flareIntensity}) 0%, transparent 70%)`,
                    filter: `blur(${35 * flareIntensity}px)`,
                    opacity: flareIntensity
                }
            }, void 0, false, {
                fileName: "[project]/components/scoreboard.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 z-30 flex gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setShowSettings(!showSettings),
                    className: "p-3 rounded-lg transition-all",
                    style: {
                        background: "linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)",
                        border: "1px solid #444",
                        color: "#fff",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.5)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$lucide$2d$react$40$0$2e$454$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/components/scoreboard.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/scoreboard.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/scoreboard.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            showSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-16 z-40 p-4 rounded-lg w-72",
                style: {
                    background: "linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)",
                    border: "1px solid #444",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.7)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white font-medium",
                                children: "设置"
                            }, void 0, false, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowSettings(false),
                                className: "text-gray-400 hover:text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$lucide$2d$react$40$0$2e$454$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/scoreboard.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/scoreboard.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm text-gray-400 mb-2 block",
                                children: "显示模式"
                            }, void 0, false, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setDisplayMode("tube"),
                                        className: `flex-1 px-3 py-2 rounded text-sm ${displayMode === "tube" ? "bg-green-600 text-white" : "bg-gray-700 text-gray-300"}`,
                                        children: "灯管"
                                    }, void 0, false, {
                                        fileName: "[project]/components/scoreboard.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setDisplayMode("dotMatrix"),
                                        className: `flex-1 px-3 py-2 rounded text-sm ${displayMode === "dotMatrix" ? "bg-green-600 text-white" : "bg-gray-700 text-gray-300"}`,
                                        children: "点阵灯珠"
                                    }, void 0, false, {
                                        fileName: "[project]/components/scoreboard.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/scoreboard.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm text-gray-400 mb-2 block",
                                children: [
                                    "LED光晕强度: ",
                                    glowIntensity.toFixed(1)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "0",
                                max: "2",
                                step: "0.1",
                                value: glowIntensity,
                                onChange: (e)=>setGlowIntensity(Number.parseFloat(e.target.value)),
                                className: "w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            }, void 0, false, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/scoreboard.tsx",
                        lineNumber: 238,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm text-gray-400 mb-2 block",
                                children: [
                                    "镜头炫光强度: ",
                                    flareIntensity.toFixed(1)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "0",
                                max: "2",
                                step: "0.1",
                                value: flareIntensity,
                                onChange: (e)=>setFlareIntensity(Number.parseFloat(e.target.value)),
                                className: "w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            }, void 0, false, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/scoreboard.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm text-gray-400 mb-2 block",
                                children: "数据模拟"
                            }, void 0, false, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 267,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsSimulating(!isSimulating),
                                className: `w-full px-4 py-2 rounded text-sm font-medium transition-all ${isSimulating ? "bg-green-600 text-white" : "bg-gray-700 text-gray-300"}`,
                                children: isSimulating ? "运行中" : "已暂停"
                            }, void 0, false, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/scoreboard.tsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: resetData,
                            className: "w-full px-4 py-2 rounded text-sm font-medium bg-red-600 hover:bg-red-700 text-white transition-all",
                            children: "数据清零"
                        }, void 0, false, {
                            fileName: "[project]/components/scoreboard.tsx",
                            lineNumber: 278,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/scoreboard.tsx",
                        lineNumber: 277,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/scoreboard.tsx",
                lineNumber: 203,
                columnNumber: 9
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
                                    textShadow: `0 0 ${10 * glowIntensity}px #ff4444, 0 0 ${20 * glowIntensity}px #ff4444`,
                                    fontFamily: "monospace"
                                },
                                children: gameState.homeTeam.name
                            }, void 0, false, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-bold",
                                style: {
                                    color: "#ffffff",
                                    textShadow: `0 0 ${10 * glowIntensity}px #ffffff`
                                },
                                children: "VS"
                            }, void 0, false, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold tracking-wider",
                                style: {
                                    color: "#ff4444",
                                    textShadow: `0 0 ${10 * glowIntensity}px #ff4444, 0 0 ${20 * glowIntensity}px #ff4444`,
                                    fontFamily: "monospace"
                                },
                                children: gameState.awayTeam.name
                            }, void 0, false, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/scoreboard.tsx",
                        lineNumber: 298,
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
                                        size: "xl",
                                        displayMode: displayMode,
                                        glowIntensity: glowIntensity
                                    }, void 0, false, {
                                        fileName: "[project]/components/scoreboard.tsx",
                                        lineNumber: 341,
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
                                                            textShadow: `0 0 ${5 * glowIntensity}px #ff0000`
                                                        },
                                                        children: "犯规"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/scoreboard.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$led$2d$digit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEDNumber"], {
                                                        value: gameState.homeTeam.fouls.toString(),
                                                        color: "yellow",
                                                        size: "md",
                                                        displayMode: displayMode,
                                                        glowIntensity: glowIntensity
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/scoreboard.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/scoreboard.tsx",
                                                lineNumber: 349,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-red-400 mb-1",
                                                        style: {
                                                            textShadow: `0 0 ${5 * glowIntensity}px #ff0000`
                                                        },
                                                        children: "暂停"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/scoreboard.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$led$2d$digit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEDNumber"], {
                                                        value: gameState.homeTeam.timeouts.toString(),
                                                        color: "yellow",
                                                        size: "md",
                                                        displayMode: displayMode,
                                                        glowIntensity: glowIntensity
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/scoreboard.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/scoreboard.tsx",
                                                lineNumber: 364,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/scoreboard.tsx",
                                        lineNumber: 348,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 333,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xl font-bold",
                                        style: {
                                            color: "#aaffaa",
                                            textShadow: `0 0 ${10 * glowIntensity}px #00ff00`
                                        },
                                        children: [
                                            "第 ",
                                            gameState.quarter,
                                            " 节"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/scoreboard.tsx",
                                        lineNumber: 384,
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
                                            size: "lg",
                                            displayMode: displayMode,
                                            glowIntensity: glowIntensity
                                        }, void 0, false, {
                                            fileName: "[project]/components/scoreboard.tsx",
                                            lineNumber: 402,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/scoreboard.tsx",
                                        lineNumber: 394,
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
                                            size: "md",
                                            displayMode: displayMode,
                                            glowIntensity: glowIntensity
                                        }, void 0, false, {
                                            fileName: "[project]/components/scoreboard.tsx",
                                            lineNumber: 418,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/scoreboard.tsx",
                                        lineNumber: 411,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 383,
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
                                        size: "xl",
                                        displayMode: displayMode,
                                        glowIntensity: glowIntensity
                                    }, void 0, false, {
                                        fileName: "[project]/components/scoreboard.tsx",
                                        lineNumber: 437,
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
                                                            textShadow: `0 0 ${5 * glowIntensity}px #ff0000`
                                                        },
                                                        children: "犯规"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/scoreboard.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$led$2d$digit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEDNumber"], {
                                                        value: gameState.awayTeam.fouls.toString(),
                                                        color: "yellow",
                                                        size: "md",
                                                        displayMode: displayMode,
                                                        glowIntensity: glowIntensity
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/scoreboard.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/scoreboard.tsx",
                                                lineNumber: 445,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-red-400 mb-1",
                                                        style: {
                                                            textShadow: `0 0 ${5 * glowIntensity}px #ff0000`
                                                        },
                                                        children: "暂停"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/scoreboard.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$led$2d$digit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEDNumber"], {
                                                        value: gameState.awayTeam.timeouts.toString(),
                                                        color: "yellow",
                                                        size: "md",
                                                        displayMode: displayMode,
                                                        glowIntensity: glowIntensity
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/scoreboard.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/scoreboard.tsx",
                                                lineNumber: 460,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/scoreboard.tsx",
                                        lineNumber: 444,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/scoreboard.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/scoreboard.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 h-1 rounded-full",
                        style: {
                            background: "linear-gradient(90deg, transparent, #333, transparent)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/scoreboard.tsx",
                        lineNumber: 479,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/scoreboard.tsx",
                lineNumber: 289,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none z-20 opacity-10",
                style: {
                    background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)"
                }
            }, void 0, false, {
                fileName: "[project]/components/scoreboard.tsx",
                lineNumber: 488,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none z-20",
                style: {
                    background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/scoreboard.tsx",
                lineNumber: 497,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/scoreboard.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_s(Scoreboard, "vFaRgRpTmNrbWyqOkN2l7O9nLxE=");
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
"[project]/node_modules/.store/lucide-react@0.454.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/.store/lucide-react@0.454.0/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/node_modules/.store/lucide-react@0.454.0/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.store/next@16.0.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$lucide$2d$react$40$0$2e$454$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.store/lucide-react@0.454.0/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$lucide$2d$react$40$0$2e$454$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.store/lucide-react@0.454.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$lucide$2d$react$40$0$2e$454$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$lucide$2d$react$40$0$2e$454$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/node_modules/.store/lucide-react@0.454.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.store/next@16.0.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$lucide$2d$react$40$0$2e$454$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.store/lucide-react@0.454.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$lucide$2d$react$40$0$2e$454$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.store/lucide-react@0.454.0/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$next$40$16$2e$0$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$lucide$2d$react$40$0$2e$454$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$lucide$2d$react$40$0$2e$454$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$lucide$2d$react$40$0$2e$454$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/node_modules/.store/lucide-react@0.454.0/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Settings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$lucide$2d$react$40$0$2e$454$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.store/lucide-react@0.454.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$lucide$2d$react$40$0$2e$454$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Settings", [
    [
        "path",
        {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
            key: "1qme2f"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
]);
;
 //# sourceMappingURL=settings.js.map
}),
"[project]/node_modules/.store/lucide-react@0.454.0/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Settings",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$lucide$2d$react$40$0$2e$454$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$lucide$2d$react$40$0$2e$454$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.store/lucide-react@0.454.0/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.store/lucide-react@0.454.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$lucide$2d$react$40$0$2e$454$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.store/lucide-react@0.454.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$lucide$2d$react$40$0$2e$454$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("X", [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
]);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/node_modules/.store/lucide-react@0.454.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$lucide$2d$react$40$0$2e$454$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$store$2f$lucide$2d$react$40$0$2e$454$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.store/lucide-react@0.454.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_78b37268._.js.map