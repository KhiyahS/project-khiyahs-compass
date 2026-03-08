import { eventData } from "@/data/mockData";

const EventsTable = () => {
  return (
    <div className="stat-card animate-slide-up" style={{ animationDelay: "560ms" }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-sm font-semibold text-foreground">Top Events</h3>
        <span className="text-xs text-muted-foreground">Last 30 days</span>
      </div>
      <div className="space-y-2">
        {eventData.map((event) => (
          <div
            key={event.event}
            className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
          >
            <div className="flex items-center gap-3">
              <code className="text-xs font-display text-primary bg-primary/10 px-2 py-0.5 rounded">
                {event.event}
              </code>
            </div>
            <div className="flex items-center gap-6 text-xs">
              <span className="text-muted-foreground">
                {event.count.toLocaleString()} <span className="text-muted-foreground/60">fires</span>
              </span>
              <span className="text-secondary-foreground w-16 text-right">
                {event.users.toLocaleString()} <span className="text-muted-foreground/60">users</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsTable;
