import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Train, Clock, MapPin, AlertCircle } from "lucide-react";
import { mockTrains } from "@/lib/mockData";

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Running': return 'bg-success text-success-foreground';
    case 'Delayed': return 'bg-warning text-warning-foreground';
    case 'Halted': return 'bg-destructive text-destructive-foreground';
    case 'Rerouted': return 'bg-primary text-primary-foreground';
    default: return 'bg-muted text-muted-foreground';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'Express': return 'bg-railway-express text-white border-railway-express';
    case 'VIP': return 'bg-railway-vip text-white border-railway-vip';
    case 'Freight': return 'bg-railway-freight text-white border-railway-freight';
    case 'Local': return 'bg-railway-local text-white border-railway-local';
    default: return 'bg-muted text-muted-foreground';
  }
};

export const TrainMonitorPanel = () => {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-card-foreground">
          <Train className="h-5 w-5 text-primary" />
          Active Trains Monitor
          <Badge variant="outline" className="ml-auto">
            {mockTrains.length} Active
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-3">
            {mockTrains.map((train) => (
              <div
                key={train.id}
                className="p-4 rounded-lg bg-muted/50 border border-border hover:bg-muted/70 transition-colors animate-fade-in-up"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-foreground">
                      {train.id}
                    </span>
                    <Badge className={getPriorityColor(train.priority)}>
                      {train.priority}
                    </Badge>
                  </div>
                  <Badge className={getStatusColor(train.status)}>
                    {train.status}
                  </Badge>
                </div>
                
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{train.route}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>ETA: {train.eta}</span>
                    {train.delay && (
                      <span className="text-warning ml-2">
                        (+{train.delay} min delay)
                      </span>
                    )}
                  </div>
                  {train.status === 'Halted' && (
                    <div className="flex items-center gap-1 text-destructive">
                      <AlertCircle className="h-3 w-3" />
                      <span>Signal clearance required</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};