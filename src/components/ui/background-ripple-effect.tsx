"use client";
import React, { useMemo, useRef, useState } from "react";
import { cn } from "../../utils/cn";
 
export const BackgroundRippleEffect = ({
 rows = 12,
 cols = 30,
 cellSize = 50,
}: {
 rows?: number;
 cols?: number;
 cellSize?: number;
}) => {
 const [clickedCell, setClickedCell] = useState<{
 row: number;
 col: number;
 } | null>(null);
 const [rippleKey, setRippleKey] = useState(0);
 const ref = useRef<HTMLDivElement>(null);
 
 return (
 <div
 ref={ref}
 className={cn(
 "absolute inset-0 h-full w-full pointer-events-none",
 "[--cell-border-color:var(--color-gray-300)] [--cell-fill-color:transparent] [--cell-shadow-color:var(--color-gray-400)]",
 )}
 >
 <div className="relative h-full w-full overflow-hidden">
 <div className="pointer-events-none absolute inset-0 z-[2] h-full w-full overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_100%)] opacity-20" />
 <DivGrid
 key={`base-${rippleKey}`}
 className="opacity-40"
 rows={rows}
 cols={cols}
 cellSize={cellSize}
 borderColor="var(--cell-border-color)"
 fillColor="var(--cell-fill-color)"
 clickedCell={clickedCell}
 onCellClick={(row, col) => {
 setClickedCell({ row, col });
 setRippleKey((k) => k + 1);
 }}
 interactive
 />
 </div>
 </div>
 );
};
 
type DivGridProps = {
 className?: string;
 rows: number;
 cols: number;
 cellSize: number;
 borderColor: string;
 fillColor: string;
 clickedCell: { row: number; col: number } | null;
 onCellClick?: (row: number, col: number) => void;
 interactive?: boolean;
};
 
type CellStyle = React.CSSProperties & {
 ["--delay"]?: string;
 ["--duration"]?: string;
};
 
const DivGrid = ({
 className,
 rows = 7,
 cols = 30,
 cellSize = 56,
 borderColor = "#3f3f46",
 fillColor = "rgba(14,165,233,0.3)",
 clickedCell = null,
 onCellClick = () => {},
 interactive = true,
}: DivGridProps) => {
 const cells = useMemo(
 () => Array.from({ length: rows * cols }, (_, idx) => idx),
 [rows, cols],
 );
 
 const gridStyle: React.CSSProperties = {
 display: "grid",
 gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
 gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
 width: "100%",
 height: "100%",
 justifyContent: "center",
 };
 
 return (
 <div className={cn("relative z-[3] pointer-events-auto", className)} style={gridStyle}>
 {cells.map((idx) => {
 const rowIdx = Math.floor(idx / cols);
 const colIdx = idx % cols;
 const distance = clickedCell
 ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
 : 0;
 const delay = clickedCell ? Math.max(0, distance * 40) : 0;
 const duration = 300 + distance * 60;
 
 const style: CellStyle = clickedCell
 ? {
 "--delay": `${delay}ms`,
 "--duration": `${duration}ms`,
 }
 : {};
 
 return (
 <div
 key={idx}
 className={cn(
 "cell relative border-[0.5px] border-white/5 opacity-40 transition-opacity duration-150 hover:opacity-80",
 clickedCell && "animate-cell-ripple [animation-fill-mode:none]",
 !interactive && "pointer-events-none",
 )}
 style={{
 backgroundColor: fillColor,
 borderColor: borderColor,
 ...style,
 }}
 onClick={
 interactive ? () => onCellClick?.(rowIdx, colIdx) : undefined
 }
 />
 );
 })}
 </div>
 );
};
