import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TrainMonitorPanel } from "@/components/TrainMonitorPanel";
import { AIDecisionPanel } from "@/components/AIDecisionPanel";
import { KPICards } from "@/components/KPICards";
import { PerformanceChart } from "@/components/PerformanceChart";
import { AlertsPanel } from "@/components/AlertsPanel";
import { MapVisualization } from "@/components/MapVisualization";
import { Badge } from "@/components/ui/badge";
import { Activity, Clock, Zap } from "lucide-react";

export const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Junction Identification Banner */}
          <div className="bg-gradient-primary border-b-2 border-primary/20 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Activity className="h-7 w-7 text-primary-foreground animate-pulse-glow" />
                <div>
                  <h1 className="text-2xl font-bold text-primary-foreground">
                    📍 Mumbai Central Junction
                  </h1>
                  <p className="text-sm text-primary-foreground/80">Section Control Dashboard</p>
                </div>
              </div>
            </div>
          </div>

          {/* Header */}
          <header className="h-12 border-b border-border bg-card flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
            </div>
            
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="bg-success/10 text-success border-success">
                <Clock className="h-3 w-3 mr-1" />
                System Online
              </Badge>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary">
                <Zap className="h-3 w-3 mr-1" />
                AI Active
              </Badge>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 space-y-6 overflow-auto">
            {/* Top Row - KPIs */}
            <KPICards />

            {/* Middle Row - Train Monitor & AI Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TrainMonitorPanel />
              <AIDecisionPanel />
            </div>

            {/* Bottom Row - Charts, Map & Alerts */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-1">
                <PerformanceChart />
              </div>
              <div className="xl:col-span-1">
                <MapVisualization />
              </div>
              <div className="xl:col-span-1">
                <AlertsPanel />
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};