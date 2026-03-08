import AppLayout from "@/components/AppLayout";
import KpiCard from "@/components/KpiCard";
import TrendChart from "@/components/TrendChart";
import FunnelChart from "@/components/FunnelChart";
import RiceTable from "@/components/RiceTable";
import EventsTable from "@/components/EventsTable";
import { kpiData } from "@/data/mockData";
import { Calendar } from "lucide-react";

const Index = () => {
  return (
    <AppLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-display font-bold text-foreground">Product Overview</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Real-time analytics for your product
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-card border border-border rounded-md px-3 py-2">
          <Calendar className="w-3.5 h-3.5" />
          <span>Jul 1 – Jul 31, 2025</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpiData.map((kpi, i) => (
          <KpiCard key={kpi.label} {...kpi} index={i} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-2">
          <TrendChart />
        </div>
        <FunnelChart />
      </div>

      {/* Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <RiceTable />
        <EventsTable />
      </div>
    </AppLayout>
  );
};

export default Index;
