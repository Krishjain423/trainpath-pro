import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Train, AlertCircle } from "lucide-react";

export const MapVisualization = () => {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-card-foreground">
          <MapPin className="h-5 w-5 text-primary" />
          Section Overview
          <Badge variant="outline" className="ml-auto bg-success/10 text-success border-success">
            All Clear
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-[400px] bg-muted/20 rounded-lg border border-border overflow-hidden">
          {/* Railway Track Layout */}
          <div className="absolute inset-4">
            {/* Main Track Lines */}
            <div className="absolute top-1/4 left-0 right-0 h-1 bg-primary rounded-full"></div>
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary rounded-full"></div>
            <div className="absolute top-3/4 left-0 right-0 h-1 bg-primary rounded-full"></div>
            
            {/* Junction Points */}
            <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"></div>
            <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"></div>
            
            {/* Station Markers */}
            <div className="absolute top-1/4 left-1/6 flex flex-col items-center">
              <div className="w-2 h-2 bg-foreground rounded-full"></div>
              <span className="text-xs text-muted-foreground mt-1">Station A</span>
            </div>
            <div className="absolute top-1/2 left-1/2 flex flex-col items-center">
              <div className="w-2 h-2 bg-foreground rounded-full"></div>
              <span className="text-xs text-muted-foreground mt-1">Junction B</span>
            </div>
            <div className="absolute top-3/4 left-5/6 flex flex-col items-center">
              <div className="w-2 h-2 bg-foreground rounded-full"></div>
              <span className="text-xs text-muted-foreground mt-1">Station C</span>
            </div>
            
            {/* Moving Trains - Simplified Colors */}
            <div className="absolute top-1/4 left-1/4 flex items-center gap-1 animate-train-move" style={{ animationDuration: '30s' }}>
              <Train className="h-4 w-4 text-primary" />
              <span className="text-xs bg-primary text-primary-foreground px-1 rounded">12345</span>
            </div>
            
            <div className="absolute top-1/2 left-1/3 flex items-center gap-1" style={{ animationDelay: '5s' }}>
              <Train className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs bg-muted text-muted-foreground px-1 rounded">67890</span>
            </div>
            
            <div className="absolute top-3/4 left-1/5 flex items-center gap-1 animate-train-move" style={{ animationDuration: '25s', animationDelay: '10s' }}>
              <Train className="h-4 w-4 text-accent" />
              <span className="text-xs bg-accent text-accent-foreground px-1 rounded">11111</span>
            </div>
            
            {/* Signal Points - Simplified */}
            <div className="absolute top-1/4 right-1/4">
              <div className="w-2 h-2 bg-success rounded-full animate-signal-blink"></div>
              <span className="text-xs text-success">Clear</span>
            </div>
            
            <div className="absolute top-1/2 right-1/3">
              <div className="w-2 h-2 bg-warning rounded-full animate-signal-blink"></div>
              <span className="text-xs text-warning">Caution</span>
            </div>
            
            {/* Congestion Alert */}
            <div className="absolute top-3/4 left-2/3 flex items-center gap-1 animate-scale-pulse">
              <AlertCircle className="h-4 w-4 text-accent" />
              <span className="text-xs text-accent bg-accent/10 px-1 rounded">Congestion</span>
            </div>
          </div>
          
          {/* Simplified Legend */}
          <div className="absolute bottom-2 left-2 bg-card/90 p-2 rounded border border-border">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-primary rounded"></div>
                <span>Express</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-muted rounded"></div>
                <span>Freight</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-accent rounded"></div>
                <span>VIP</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-success rounded"></div>
                <span>Local</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};