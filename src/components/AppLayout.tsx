import { ReactNode, useState, createContext, useContext } from "react";
import AppSidebar from "./AppSidebar";

const SidebarContext = createContext({ collapsed: false, setCollapsed: (_: boolean) => {} });
export const useSidebarState = () => useContext(SidebarContext);

const AppLayout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
      <div className="min-h-screen bg-background">
        <AppSidebar />
        <main
          className={`p-6 min-h-screen transition-all duration-300 ${
            collapsed ? "ml-16" : "ml-56"
          }`}
        >
          {children}
        </main>
      </div>
    </SidebarContext.Provider>
  );
};

export default AppLayout;
