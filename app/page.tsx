"use client";

import { useCallback, useEffect, useState } from "react";

import { MetricCard } from "@/components/dashboard/metric-card";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { UserGrowthChart } from "@/components/dashboard/user-growth-chart";
import { ErrorState } from "@/components/ui/state-message";
import { Skeleton } from "@/components/ui/skeleton";
import { getDashboardData } from "@/lib/mock-data";

type DashboardData = Awaited<ReturnType<typeof getDashboardData>>;

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await getDashboardData();
      setData(result);
    } catch {
      setError("Unable to load dashboard data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadData();
  }, [loadData]);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, idx) => <Skeleton key={idx} className="h-32" />)}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Skeleton className="h-[360px]" />
          <Skeleton className="h-[360px]" />
        </div>
        <Skeleton className="h-64" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <ErrorState
        title="Dashboard unavailable"
        description={error ?? "An unknown error occurred."}
        onRetry={() => void loadData()}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.metrics.map((metric) => (
          <MetricCard key={metric.title} metric={metric} />
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <RevenueChart data={data.revenue} />
        <UserGrowthChart data={data.growth} />
      </div>
      <RecentTransactions data={data.transactions} />
    </div>
  );
}
