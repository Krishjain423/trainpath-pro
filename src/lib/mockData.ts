export interface Train {
  id: string;
  priority: 'Express' | 'VIP' | 'Freight' | 'Local';
  status: 'Running' | 'Delayed' | 'Halted' | 'Rerouted';
  route: string;
  eta: string;
  delay?: number;
  currentLocation: string;
}

export interface AIRecommendation {
  id: string;
  priority: 'High' | 'Medium' | 'Low';
  message: string;
  timestamp: string;
  timeSaved: string;
  trainIds: string[];
}

export interface Alert {
  id: string;
  type: 'breakdown' | 'weather' | 'signal' | 'emergency';
  message: string;
  severity: 'critical' | 'warning' | 'info';
  timestamp: string;
  resolved: boolean;
}

export interface KPIData {
  throughput: number;
  averageDelay: number;
  utilization: number;
  safetyIndex: number;
}

export const mockTrains: Train[] = [
  {
    id: "12345",
    priority: "Express",
    status: "Running",
    route: "New Delhi → Mumbai Central",
    eta: "14:30",
    currentLocation: "Mathura Junction"
  },
  {
    id: "67890",
    priority: "Freight",
    status: "Delayed",
    route: "Chennai → Kolkata",
    eta: "09:45",
    delay: 15,
    currentLocation: "Visakhapatnam"
  },
  {
    id: "11111",
    priority: "VIP",
    status: "Running",
    route: "Mumbai → Ahmedabad",
    eta: "11:20",
    currentLocation: "Surat"
  },
  {
    id: "22222",
    priority: "Local",
    status: "Halted",
    route: "Bangalore → Mysore",
    eta: "16:15",
    delay: 8,
    currentLocation: "Ramanagara"
  },
  {
    id: "33333",
    priority: "Express",
    status: "Rerouted",
    route: "Kolkata → Bhubaneswar",
    eta: "13:50",
    currentLocation: "Kharagpur"
  },
  {
    id: "44444",
    priority: "Freight",
    status: "Running",
    route: "Pune → Hyderabad",
    eta: "18:30",
    currentLocation: "Solapur"
  },
  {
    id: "55555",
    priority: "Express",
    status: "Delayed",
    route: "Jaipur → Jodhpur",
    eta: "12:40",
    delay: 22,
    currentLocation: "Pali"
  }
];

export const mockAIRecommendations: AIRecommendation[] = [
  {
    id: "ai-1",
    priority: "High",
    message: "Give precedence to Express Train 12345 over Freight Train 67890 to reduce overall network delay by 7 minutes.",
    timestamp: "2 min ago",
    timeSaved: "7 min",
    trainIds: ["12345", "67890"]
  },
  {
    id: "ai-2",
    priority: "Medium",
    message: "Reroute Freight Train 44444 via alternate Line 2 due to congestion on primary route. This will prevent cascading delays.",
    timestamp: "5 min ago",
    timeSaved: "12 min",
    trainIds: ["44444"]
  },
  {
    id: "ai-3",
    priority: "High",
    message: "Emergency slot allocation required for VIP Train 11111. Recommend holding Local Train 22222 at current station.",
    timestamp: "8 min ago",
    timeSaved: "15 min",
    trainIds: ["11111", "22222"]
  },
  {
    id: "ai-4",
    priority: "Low",
    message: "Optimize signal timing at Junction A to improve throughput by 3 trains/hour during peak hours.",
    timestamp: "12 min ago",
    timeSaved: "5 min",
    trainIds: []
  }
];

export const mockAlerts: Alert[] = [
  {
    id: "alert-1",
    type: "signal",
    message: "Signal failure at Track 3, Section B. Backup systems active.",
    severity: "critical",
    timestamp: "1 min ago",
    resolved: false
  },
  {
    id: "alert-2",
    type: "weather",
    message: "Heavy rainfall warning for Western section. Speed restrictions advised.",
    severity: "warning",
    timestamp: "15 min ago",
    resolved: false
  },
  {
    id: "alert-3",
    type: "breakdown",
    message: "Minor technical issue resolved for Train 33333. Operations resumed.",
    severity: "info",
    timestamp: "45 min ago",
    resolved: true
  }
];

export const mockKPIData: KPIData = {
  throughput: 127,
  averageDelay: 8.5,
  utilization: 78,
  safetyIndex: 96
};

export const mockPerformanceData = [
  { time: "00:00", trains: 45, delays: 12 },
  { time: "04:00", trains: 23, delays: 5 },
  { time: "08:00", trains: 78, delays: 18 },
  { time: "12:00", trains: 92, delays: 22 },
  { time: "16:00", trains: 87, delays: 15 },
  { time: "20:00", trains: 65, delays: 9 },
];