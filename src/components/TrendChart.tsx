import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { trendData } from "@/data/mockData";

const TrendChart = () => {
  return (
    <div className="stat-card animate-slide-up" style={{ animationDelay: "320ms" }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-sm font-semibold text-foreground">User & Session Trends</h3>
        <span className="text-xs text-muted-foreground">Last 7 months</span>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={trendData}>
          <defs>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(174, 72%, 56%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(174, 72%, 56%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(262, 60%, 58%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(262, 60%, 58%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 16%)" />
          <XAxis
            dataKey="date"
            tick={{ fill: "hsl(215, 15%, 50%)", fontSize: 11 }}
            axisLine={{ stroke: "hsl(220, 14%, 16%)" }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "hsl(215, 15%, 50%)", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(220, 18%, 12%)",
              border: "1px solid hsl(220, 14%, 18%)",
              borderRadius: "8px",
              fontSize: "12px",
              color: "hsl(210, 20%, 92%)",
            }}
          />
          <Area
            type="monotone"
            dataKey="sessions"
            stroke="hsl(262, 60%, 58%)"
            strokeWidth={2}
            fill="url(#colorSessions)"
          />
          <Area
            type="monotone"
            dataKey="users"
            stroke="hsl(174, 72%, 56%)"
            strokeWidth={2}
            fill="url(#colorUsers)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendChart;
