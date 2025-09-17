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
            <div className="absolute top-1/4 left-0 right-0 h-1 bg-railway-track rounded-full"></div>
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-railway-track rounded-full"></div>
            <div className="absolute top-3/4 left-0 right-0 h-1 bg-railway-track rounded-full"></div>
            
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
            
            {/* Moving Trains */}
            <div className="absolute top-1/4 left-1/4 flex items-center gap-1 animate-train-move" style={{ animationDuration: '30s' }}>
              <Train className="h-4 w-4 text-railway-express" />
              <span className="text-xs bg-railway-express text-white px-1 rounded">12345</span>
            </div>
            
            <div className="absolute top-1/2 left-1/3 flex items-center gap-1" style={{ animationDelay: '5s' }}>
              <Train className="h-4 w-4 text-railway-freight" />
              <span className="text-xs bg-railway-freight text-white px-1 rounded">67890</span>
            </div>
            
            <div className="absolute top-3/4 left-1/5 flex items-center gap-1 animate-train-move" style={{ animationDuration: '25s', animationDelay: '10s' }}>
              <Train className="h-4 w-4 text-railway-vip" />
              <span className="text-xs bg-railway-vip text-white px-1 rounded">11111</span>
            </div>
            
            {/* Signal Points */}
            <div className="absolute top-1/4 right-1/4">
              <div className="w-2 h-2 bg-railway-clear rounded-full animate-signal-blink"></div>
              <span className="text-xs text-railway-clear">Clear</span>
            </div>
            
            <div className="absolute top-1/2 right-1/3">
              <div className="w-2 h-2 bg-railway-caution rounded-full animate-signal-blink"></div>
              <span className="text-xs text-railway-caution">Caution</span>
            </div>
            
            {/* Congestion Alert */}
            <div className="absolute top-3/4 left-2/3 flex items-center gap-1 animate-scale-pulse">
              <AlertCircle className="h-4 w-4 text-destructive" />
              <span className="text-xs text-destructive bg-destructive/10 px-1 rounded">Congestion</span>
            </div>
          </div>
          
          {/* Legend */}
          <div className="absolute bottom-2 left-2 bg-card/90 p-2 rounded border border-border">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-railway-express rounded"></div>
                <span>Express</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-railway-freight rounded"></div>
                <span>Freight</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-railway-vip rounded"></div>
                <span>VIP</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-railway-local rounded"></div>
                <span>Local</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};