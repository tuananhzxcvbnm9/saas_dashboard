"use client";

import { useCallback, useEffect, useState } from "react";

import { SubscriptionsTable } from "@/components/subscriptions/subscriptions-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState, ErrorState } from "@/components/ui/state-message";
import { Skeleton } from "@/components/ui/skeleton";
import { getSubscriptions, type Subscription } from "@/lib/mock-data";

export default function SubscriptionsPage() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadSubscriptions = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await getSubscriptions();
      setSubscriptions(result);
    } catch {
      setError("Unable to load subscriptions.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadSubscriptions();
  }, [loadSubscriptions]);

  if (loading) {
    return <Skeleton className="h-[420px]" />;
  }

  if (error) {
    return <ErrorState title="Subscriptions unavailable" description={error} onRetry={() => void loadSubscriptions()} />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscriptions</CardTitle>
      </CardHeader>
      <CardContent>
        {subscriptions.length === 0 ? (
          <EmptyState title="No subscriptions found" description="You can start by creating your first plan." />
        ) : (
          <SubscriptionsTable subscriptions={subscriptions} />
        )}
      </CardContent>
    </Card>
  );
}
