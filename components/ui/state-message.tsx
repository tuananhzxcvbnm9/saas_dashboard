import { AlertTriangle, Inbox } from "lucide-react";

import { Button } from "@/components/ui/button";

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex min-h-60 flex-col items-center justify-center rounded-xl border border-dashed text-center">
      <Inbox className="mb-3 size-8 text-muted-foreground" />
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export function ErrorState({ title, description, onRetry }: { title: string; description: string; onRetry: () => void }) {
  return (
    <div className="flex min-h-60 flex-col items-center justify-center rounded-xl border border-destructive/30 bg-destructive/5 text-center">
      <AlertTriangle className="mb-3 size-8 text-destructive" />
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      <Button onClick={onRetry} variant="outline" className="mt-4">Try again</Button>
    </div>
  );
}
