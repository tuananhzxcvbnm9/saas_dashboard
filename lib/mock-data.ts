export type Metric = {
  title: string;
  value: string;
  changeLabel: string;
  direction: "up" | "down";
  tone: "positive" | "negative";
};

export type RevenuePoint = { month: string; revenue: number };
export type UserGrowthPoint = { month: string; users: number };

export type Transaction = {
  id: string;
  customer: string;
  plan: "Starter" | "Pro" | "Enterprise";
  amount: number;
  date: string;
  status: "completed" | "pending" | "failed";
};

export type User = {
  id: string;
  name: string;
  email: string;
  company: string;
  status: "active" | "invited" | "suspended";
  plan: "Starter" | "Pro" | "Enterprise";
  joinedAt: string;
};

export type Subscription = {
  id: string;
  customer: string;
  plan: "Starter" | "Pro" | "Enterprise";
  renewalDate: string;
  paymentStatus: "paid" | "due" | "failed";
  amount: number;
};

const delay = (ms = 450) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getDashboardData() {
  await delay();

  return {
    metrics: [
      { title: "Total Revenue", value: "$482,130", changeLabel: "+12.3% vs last month", direction: "up", tone: "positive" },
      { title: "Active Users", value: "8,942", changeLabel: "+6.8% vs last month", direction: "up", tone: "positive" },
      { title: "MRR", value: "$78,410", changeLabel: "+3.2% vs last month", direction: "up", tone: "positive" },
      { title: "Churn Rate", value: "2.4%", changeLabel: "-0.5% vs last month", direction: "down", tone: "positive" }
    ] as Metric[],
    revenue: [
      { month: "Jan", revenue: 44000 },
      { month: "Feb", revenue: 48000 },
      { month: "Mar", revenue: 51000 },
      { month: "Apr", revenue: 55000 },
      { month: "May", revenue: 62000 },
      { month: "Jun", revenue: 67000 },
      { month: "Jul", revenue: 71000 },
      { month: "Aug", revenue: 75000 },
      { month: "Sep", revenue: 79000 },
      { month: "Oct", revenue: 82000 },
      { month: "Nov", revenue: 86000 },
      { month: "Dec", revenue: 93000 }
    ] as RevenuePoint[],
    growth: [
      { month: "Jan", users: 2100 },
      { month: "Feb", users: 2500 },
      { month: "Mar", users: 2850 },
      { month: "Apr", users: 3300 },
      { month: "May", users: 3800 },
      { month: "Jun", users: 4500 },
      { month: "Jul", users: 5200 },
      { month: "Aug", users: 5900 },
      { month: "Sep", users: 6600 },
      { month: "Oct", users: 7300 },
      { month: "Nov", users: 8100 },
      { month: "Dec", users: 8942 }
    ] as UserGrowthPoint[],
    transactions: [
      { id: "TXN-1001", customer: "Acme Inc", plan: "Enterprise", amount: 4999, date: "2026-04-22", status: "completed" },
      { id: "TXN-1002", customer: "Northstar", plan: "Pro", amount: 299, date: "2026-04-21", status: "completed" },
      { id: "TXN-1003", customer: "Bluebird Labs", plan: "Starter", amount: 49, date: "2026-04-20", status: "pending" },
      { id: "TXN-1004", customer: "Orbit.io", plan: "Pro", amount: 299, date: "2026-04-19", status: "failed" },
      { id: "TXN-1005", customer: "Pioneer Systems", plan: "Enterprise", amount: 4999, date: "2026-04-18", status: "completed" }
    ] as Transaction[]
  };
}

export async function getUsers() {
  await delay();

  return [
    { id: "USR-001", name: "Olivia Martin", email: "olivia@acme.com", company: "Acme Inc", status: "active", plan: "Enterprise", joinedAt: "2025-10-12" },
    { id: "USR-002", name: "Jackson Lee", email: "jackson@northstar.io", company: "Northstar", status: "active", plan: "Pro", joinedAt: "2025-09-20" },
    { id: "USR-003", name: "Sophia Kim", email: "sophia@bluebird.dev", company: "Bluebird Labs", status: "invited", plan: "Starter", joinedAt: "2026-01-03" },
    { id: "USR-004", name: "Noah Wilson", email: "noah@orbit.io", company: "Orbit.io", status: "suspended", plan: "Pro", joinedAt: "2024-12-11" },
    { id: "USR-005", name: "Amelia Davis", email: "amelia@pioneer.ai", company: "Pioneer Systems", status: "active", plan: "Enterprise", joinedAt: "2025-07-17" },
    { id: "USR-006", name: "Liam Brown", email: "liam@stellar.app", company: "Stellar", status: "active", plan: "Starter", joinedAt: "2026-02-15" },
    { id: "USR-007", name: "Charlotte White", email: "charlotte@zenly.io", company: "Zenly", status: "invited", plan: "Pro", joinedAt: "2026-04-01" },
    { id: "USR-008", name: "Ethan Harris", email: "ethan@nova.com", company: "Nova", status: "active", plan: "Pro", joinedAt: "2025-11-09" }
  ] as User[];
}

export async function getSubscriptions() {
  await delay();

  return [
    { id: "SUB-1001", customer: "Acme Inc", plan: "Enterprise", renewalDate: "2026-05-10", paymentStatus: "paid", amount: 4999 },
    { id: "SUB-1002", customer: "Northstar", plan: "Pro", renewalDate: "2026-05-02", paymentStatus: "paid", amount: 299 },
    { id: "SUB-1003", customer: "Bluebird Labs", plan: "Starter", renewalDate: "2026-05-16", paymentStatus: "due", amount: 49 },
    { id: "SUB-1004", customer: "Orbit.io", plan: "Pro", renewalDate: "2026-04-29", paymentStatus: "failed", amount: 299 },
    { id: "SUB-1005", customer: "Pioneer Systems", plan: "Enterprise", renewalDate: "2026-05-20", paymentStatus: "paid", amount: 4999 }
  ] as Subscription[];
}
