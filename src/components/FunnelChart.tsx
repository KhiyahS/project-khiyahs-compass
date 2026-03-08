import { funnelData } from "@/data/mockData";

const FunnelChart = () => {
  return (
    <div className="stat-card animate-slide-up" style={{ animationDelay: "400ms" }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-sm font-semibold text-foreground">Conversion Funnel</h3>
        <span className="text-xs text-muted-foreground">This month</span>
      </div>
      <div className="space-y-3">
        {funnelData.map((step, i) => (
          <div key={step.stage} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-secondary-foreground">{step.stage}</span>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground">{step.users.toLocaleString()}</span>
                <span className="font-display font-semibold text-foreground w-14 text-right">
                  {step.pct}%
                </span>
              </div>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${step.pct}%`,
                  background: `linear-gradient(90deg, hsl(174, 72%, 56%), hsl(${174 + i * 22}, ${72 - i * 5}%, ${56 - i * 4}%))`,
                  transitionDelay: `${i * 100}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunnelChart;
