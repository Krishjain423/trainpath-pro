import { 
  Activity, 
  BarChart3, 
  Train, 
  MapPin, 
  AlertTriangle, 
  Settings, 
  Users,
  TrendingUp,
  Navigation,
  Zap
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard Overview",
    url: "#",
    icon: Activity,
    isActive: true,
  },
  {
    title: "Train Monitor",
    url: "#trains",
    icon: Train,
  },
  {
    title: "AI Decisions",
    url: "#ai",
    icon: Zap,
  },
  {
    title: "Section Map",
    url: "#map",
    icon: MapPin,
  },
  {
    title: "Analytics",
    url: "#analytics",
    icon: BarChart3,
  },
  {
    title: "Performance",
    url: "#performance",
    icon: TrendingUp,
  },
  {
    title: "Alerts",
    url: "#alerts",
    icon: AlertTriangle,
  },
];

const controlItems = [
  {
    title: "Station Control",
    url: "#station",
    icon: Navigation,
  },
  {
    title: "Personnel",
    url: "#personnel",
    icon: Users,
  },
  {
    title: "System Settings",
    url: "#settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="w-64 bg-sidebar border-sidebar-border">
      <SidebarContent className="py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 text-xs font-semibold uppercase tracking-wider">
            Control Center
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={item.isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}
                  >
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors">
                      <item.icon className={`h-4 w-4 ${item.isActive ? 'text-primary' : ''}`} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 text-xs font-semibold uppercase tracking-wider">
            System Control
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {controlItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}