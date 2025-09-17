import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Clock, Activity, Shield, BarChart3 } from "lucide-react";
import { mockKPIData } from "@/lib/mockData";

const kpiCards = [
  {
    title: "Throughput",
    value: mockKPIData.throughput.toString(),
    unit: "trains/hour",
    icon: BarChart3,
    trend: "+5.2%",
    trendUp: true,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    title: "Average Delay",
    value: mockKPIData.averageDelay.toString(),
    unit: "minutes",
    icon: Clock,
    trend: "-12.5%",
    trendUp: false,
    color: "text-warning",
    bgColor: "bg-warning/10"
  },
  {
    title: "Track Utilization",
    value: mockKPIData.utilization.toString(),
    unit: "%",
    icon: Activity,
    trend: "+3.8%",
    trendUp: true,
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    title: "Safety Index",
    value: mockKPIData.safetyIndex.toString(),
    unit: "%",
    icon: Shield,
    trend: "+0.5%",
    trendUp: true,
    color: "text-success",
    bgColor: "bg-success/10"
  }
];

export const KPICards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpiCards.map((kpi, index) => (
        <Card key={kpi.title} className="bg-card border-border animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${kpi.bgColor}`}>
                  <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {kpi.title}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-foreground">
                      {kpi.value}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {kpi.unit}
                    </span>
                  </div>
                </div>
              </div>
              
              <Badge 
                variant="outline" 
                className={`flex items-center gap-1 ${
                  kpi.trendUp 
                    ? 'text-success border-success bg-success/10' 
                    : 'text-destructive border-destructive bg-destructive/10'
                }`}
              >
                {kpi.trendUp ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {kpi.trend}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};