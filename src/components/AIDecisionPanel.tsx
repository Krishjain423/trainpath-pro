import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Zap, CheckCircle, XCircle, Edit, Clock, TrendingUp } from "lucide-react";
import { mockAIRecommendations } from "@/lib/mockData";

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High': return 'bg-destructive text-destructive-foreground';
    case 'Medium': return 'bg-warning text-warning-foreground';
    case 'Low': return 'bg-success text-success-foreground';
    default: return 'bg-muted text-muted-foreground';
  }
};

export const AIDecisionPanel = () => {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-card-foreground">
          <Zap className="h-5 w-5 text-primary animate-pulse-glow" />
          AI Decision Support
          <Badge variant="outline" className="ml-auto bg-primary/10 text-primary border-primary">
            Active
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {mockAIRecommendations.map((recommendation) => (
              <div
                key={recommendation.id}
                className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 animate-fade-in-up"
              >
                <div className="flex items-start justify-between mb-3">
                  <Badge className={getPriorityColor(recommendation.priority)}>
                    {recommendation.priority} Priority
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {recommendation.timestamp}
                  </div>
                </div>
                
                <p className="text-sm text-foreground mb-3 leading-relaxed">
                  {recommendation.message}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-success">
                    <TrendingUp className="h-3 w-3" />
                    <span>Est. time saved: {recommendation.timeSaved}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
                      <Edit className="h-3 w-3 mr-1" />
                      Modify
                    </Button>
                    <Button size="sm" variant="outline" className="h-7 px-2 text-xs text-destructive hover:text-destructive">
                      <XCircle className="h-3 w-3 mr-1" />
                      Reject
                    </Button>
                    <Button size="sm" className="h-7 px-2 text-xs bg-gradient-success">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Accept
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <div className="mt-4 pt-4 border-t border-border">
          <Button className="w-full bg-gradient-primary hover:bg-primary/90">
            <Zap className="h-4 w-4 mr-2" />
            Recalculate with AI
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};