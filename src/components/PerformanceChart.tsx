import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";
import { mockPerformanceData } from "@/lib/mockData";

export const PerformanceChart = () => {
  const maxTrains = Math.max(...mockPerformanceData.map(d => d.trains));
  const maxDelays = Math.max(...mockPerformanceData.map(d => d.delays));

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-card-foreground">
          <BarChart3 className="h-5 w-5 text-primary" />
          24-Hour Performance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-sm" />
              <span className="text-muted-foreground">Trains Processed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-warning rounded-sm" />
              <span className="text-muted-foreground">Delays</span>
            </div>
          </div>
          
          <div className="space-y-3">
            {mockPerformanceData.map((data, index) => (
              <div key={data.time} className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{data.time}</span>
                  <span>{data.trains} trains | {data.delays} delays</span>
                </div>
                <div className="flex gap-1 h-6">
                  <div 
                    className="bg-gradient-primary rounded-sm transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${(data.trains / maxTrains) * 70}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  />
                  <div 
                    className="bg-gradient-warning rounded-sm transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${(data.delays / maxDelays) * 30}%`,
                      animationDelay: `${index * 100 + 200}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="pt-2 border-t border-border">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-primary">
                  {mockPerformanceData.reduce((sum, d) => sum + d.trains, 0)}
                </div>
                <div className="text-xs text-muted-foreground">Total Processed</div>
              </div>
              <div>
                <div className="text-lg font-bold text-warning">
                  {mockPerformanceData.reduce((sum, d) => sum + d.delays, 0)}
                </div>
                <div className="text-xs text-muted-foreground">Total Delays</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};