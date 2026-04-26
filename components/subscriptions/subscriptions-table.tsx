import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatCurrency, formatDate } from "@/lib/format";
import type { Subscription } from "@/lib/mock-data";

const statusVariant: Record<Subscription["paymentStatus"], "success" | "warning" | "destructive"> = {
  paid: "success",
  due: "warning",
  failed: "destructive"
};

export function SubscriptionsTable({ subscriptions }: { subscriptions: Subscription[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Customer</TableHead>
          <TableHead>Plan</TableHead>
          <TableHead>Renewal Date</TableHead>
          <TableHead>Payment Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {subscriptions.map((subscription) => (
          <TableRow key={subscription.id}>
            <TableCell className="font-medium">{subscription.customer}</TableCell>
            <TableCell>{subscription.plan}</TableCell>
            <TableCell>{formatDate(subscription.renewalDate)}</TableCell>
            <TableCell><Badge variant={statusVariant[subscription.paymentStatus]}>{subscription.paymentStatus}</Badge></TableCell>
            <TableCell className="text-right">{formatCurrency(subscription.amount)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
