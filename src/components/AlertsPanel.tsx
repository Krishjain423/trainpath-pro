import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, Clock, Zap, CloudRain, Wrench } from "lucide-react";
import { mockAlerts } from "@/lib/mockData";

const getAlertIcon = (type: string) => {
  switch (type) {
    case 'signal': return Zap;
    case 'weather': return CloudRain;
    case 'breakdown': return Wrench;
    default: return AlertTriangle;
  }
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'critical': return 'bg-destructive text-destructive-foreground animate-signal-blink';
    case 'warning': return 'bg-warning text-warning-foreground';
    case 'info': return 'bg-success text-success-foreground';
    default: return 'bg-muted text-muted-foreground';
  }
};

export const AlertsPanel = () => {
  const activeAlerts = mockAlerts.filter(alert => !alert.resolved);
  const resolvedAlerts = mockAlerts.filter(alert => alert.resolved);

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-card-foreground">
          <AlertTriangle className="h-5 w-5 text-warning" />
          System Alerts
          <Badge variant="outline" className="ml-auto bg-destructive/10 text-destructive border-destructive">
            {activeAlerts.length} Active
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-3">
            {/* Active Alerts */}
            {activeAlerts.map((alert) => {
              const IconComponent = getAlertIcon(alert.type);
              return (
                <div
                  key={alert.id}
                  className="p-4 rounded-lg bg-destructive/5 border border-destructive/20 animate-fade-in-up"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded bg-destructive/10">
                      <IconComponent className="h-4 w-4 text-destructive" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <Badge className={getSeverityColor(alert.severity)}>
                          {alert.severity.toUpperCase()}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {alert.timestamp}
                        </div>
                      </div>
                      <p className="text-sm text-foreground">
                        {alert.message}
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
                          Acknowledge
                        </Button>
                        <Button size="sm" className="h-7 px-2 text-xs">
                          Resolve
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Resolved Alerts */}
            {resolvedAlerts.length > 0 && (
              <>
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">
                    Recently Resolved
                  </h4>
                </div>
                {resolvedAlerts.map((alert) => {
                  const IconComponent = getAlertIcon(alert.type);
                  return (
                    <div
                      key={alert.id}
                      className="p-3 rounded-lg bg-success/5 border border-success/20 opacity-75"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-1 rounded bg-success/10">
                          <CheckCircle className="h-4 w-4 text-success" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-1">
                            <Badge className="bg-success/10 text-success border-success">
                              RESOLVED
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {alert.timestamp}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {alert.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};