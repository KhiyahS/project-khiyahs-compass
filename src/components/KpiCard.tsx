import { TrendingUp, TrendingDown } from "lucide-react";
import { sparklineData } from "@/data/mockData";

interface KpiCardProps {
  label: string;
  value: string;
  change: number;
  trend: "up" | "down";
  index: number;
}

const MiniSparkline = ({ data, color }: { data: number[]; color: string }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const width = 80;
  const height = 28;

  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((v - min) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} className="opacity-60">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const KpiCard = ({ label, value, change, trend, index }: KpiCardProps) => {
  const isUp = trend === "up";

  return (
    <div className="stat-card animate-slide-up" style={{ animationDelay: `${index * 80}ms` }}>
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {label}
        </span>
        <div
          className={`flex items-center gap-1 text-xs font-medium ${
            isUp ? "text-success" : "text-destructive"
          }`}
        >
          {isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {Math.abs(change)}%
        </div>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-display font-bold text-foreground">{value}</span>
        <MiniSparkline
          data={sparklineData[index] || sparklineData[0]}
          color={isUp ? "hsl(152, 60%, 48%)" : "hsl(0, 72%, 56%)"}
        />
      </div>
    </div>
  );
};

export default KpiCard;
