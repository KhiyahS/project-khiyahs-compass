export const kpiData = [
  { label: "Active Users", value: "12,847", change: 12.5, trend: "up" as const },
  { label: "Sessions", value: "48,291", change: 8.3, trend: "up" as const },
  { label: "Conversion Rate", value: "3.24%", change: -1.2, trend: "down" as const },
  { label: "Avg. Revenue", value: "$42.18", change: 15.7, trend: "up" as const },
];

export const trendData = [
  { date: "Jan", users: 8200, sessions: 32000, revenue: 28000 },
  { date: "Feb", users: 8900, sessions: 35000, revenue: 31000 },
  { date: "Mar", users: 9400, sessions: 37000, revenue: 29000 },
  { date: "Apr", users: 10200, sessions: 41000, revenue: 35000 },
  { date: "May", users: 11000, sessions: 44000, revenue: 38000 },
  { date: "Jun", users: 11800, sessions: 46000, revenue: 41000 },
  { date: "Jul", users: 12847, sessions: 48291, revenue: 44000 },
];

export const funnelData = [
  { stage: "Page View", users: 48291, pct: 100 },
  { stage: "Sign Up Start", users: 12400, pct: 25.7 },
  { stage: "Email Verified", users: 8900, pct: 18.4 },
  { stage: "Onboarding Done", users: 5200, pct: 10.8 },
  { stage: "First Purchase", users: 1564, pct: 3.24 },
];

export const riceData = [
  { feature: "AI-Powered Recommendations", reach: 9, impact: 8, confidence: 7, effort: 5, score: 100.8 },
  { feature: "Dark Mode", reach: 7, impact: 4, confidence: 9, effort: 2, score: 126.0 },
  { feature: "Export to CSV", reach: 6, impact: 5, confidence: 8, effort: 1, score: 240.0 },
  { feature: "Real-Time Notifications", reach: 8, impact: 7, confidence: 6, effort: 4, score: 84.0 },
  { feature: "Custom Dashboards", reach: 5, impact: 9, confidence: 5, effort: 8, score: 28.1 },
  { feature: "SSO Integration", reach: 3, impact: 6, confidence: 8, effort: 6, score: 24.0 },
  { feature: "Mobile App", reach: 8, impact: 8, confidence: 4, effort: 10, score: 25.6 },
];

export const eventData = [
  { event: "page_view", count: 148291, users: 12847, avgPerUser: 11.5 },
  { event: "button_click", count: 89432, users: 10234, avgPerUser: 8.7 },
  { event: "sign_up", count: 12400, users: 12400, avgPerUser: 1.0 },
  { event: "purchase", count: 3128, users: 1564, avgPerUser: 2.0 },
  { event: "search", count: 34521, users: 8932, avgPerUser: 3.9 },
  { event: "share", count: 5621, users: 3201, avgPerUser: 1.8 },
];

export const sparklineData = [
  [3, 5, 4, 7, 6, 8, 9, 8, 10, 12],
  [10, 12, 11, 14, 13, 15, 16, 15, 17, 18],
  [5, 4, 5, 4, 3, 4, 3, 3, 4, 3],
  [6, 7, 6, 8, 9, 10, 11, 12, 13, 15],
];
