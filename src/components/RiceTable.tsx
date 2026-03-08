import { riceData } from "@/data/mockData";

const RiceTable = () => {
  const sorted = [...riceData].sort((a, b) => b.score - a.score);

  return (
    <div className="stat-card animate-slide-up" style={{ animationDelay: "480ms" }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-sm font-semibold text-foreground">Feature Prioritization (RICE)</h3>
        <span className="text-xs text-muted-foreground">{sorted.length} features</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 text-muted-foreground font-medium">Feature</th>
              <th className="text-center py-2 px-2 text-muted-foreground font-medium">R</th>
              <th className="text-center py-2 px-2 text-muted-foreground font-medium">I</th>
              <th className="text-center py-2 px-2 text-muted-foreground font-medium">C</th>
              <th className="text-center py-2 px-2 text-muted-foreground font-medium">E</th>
              <th className="text-right py-2 pl-4 text-muted-foreground font-medium">Score</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((item, i) => (
              <tr
                key={item.feature}
                className="border-b border-border/50 hover:bg-muted/30 transition-colors"
              >
                <td className="py-2.5 pr-4 text-secondary-foreground font-medium">{item.feature}</td>
                <td className="text-center py-2.5 px-2 text-muted-foreground">{item.reach}</td>
                <td className="text-center py-2.5 px-2 text-muted-foreground">{item.impact}</td>
                <td className="text-center py-2.5 px-2 text-muted-foreground">{item.confidence}</td>
                <td className="text-center py-2.5 px-2 text-muted-foreground">{item.effort}</td>
                <td className="text-right py-2.5 pl-4">
                  <span
                    className={`font-display font-bold ${
                      i === 0
                        ? "text-primary"
                        : i < 3
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.score.toFixed(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RiceTable;
