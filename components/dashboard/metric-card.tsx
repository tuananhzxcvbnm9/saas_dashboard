import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Metric } from "@/lib/mock-data";

export function MetricCard({ metric }: { metric: Metric }) {
  const TrendIcon = metric.direction === "up" ? ArrowUpRight : ArrowDownRight;

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold">{metric.value}</div>
        <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
          <TrendIcon
            className={cn(
              "size-4",
              metric.tone === "positive" ? "text-emerald-500" : "text-destructive"
            )}
          />
          {metric.changeLabel}
        </p>
      </CardContent>
    </Card>
  );
}
