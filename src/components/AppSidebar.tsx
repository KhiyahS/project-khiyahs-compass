import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BarChart3,
  TrendingUp,
  Filter,
  Target,
  Users,
  Zap,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { label: "Overview", icon: BarChart3, path: "/" },
  { label: "Trends", icon: TrendingUp, path: "/trends" },
  { label: "Funnels", icon: Filter, path: "/funnels" },
  { label: "RICE Scoring", icon: Target, path: "/rice" },
  { label: "Cohorts", icon: Users, path: "/cohorts" },
  { label: "Events", icon: Zap, path: "/events" },
];

const AppSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300 z-50 ${
        collapsed ? "w-16" : "w-56"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 h-14 border-b border-sidebar-border">
        <div className="w-7 h-7 rounded-md gradient-primary flex items-center justify-center flex-shrink-0">
          <BarChart3 className="w-4 h-4 text-primary-foreground" />
        </div>
        {!collapsed && (
          <span className="font-display font-bold text-foreground text-sm tracking-tight">
            PulseAI
          </span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-3 px-2 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent/50"
              }`}
            >
              <item.icon
                className={`w-4 h-4 flex-shrink-0 ${
                  isActive ? "text-primary" : ""
                }`}
              />
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-2 border-t border-sidebar-border space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent/50 transition-all">
          <Settings className="w-4 h-4 flex-shrink-0" />
          {!collapsed && <span>Settings</span>}
        </button>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent/50 transition-all"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
          ) : (
            <>
              <ChevronLeft className="w-4 h-4 flex-shrink-0" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
};

export default AppSidebar;
