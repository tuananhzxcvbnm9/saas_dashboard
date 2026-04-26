import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Input } from "@/components/ui/input";

import { Breadcrumbs } from "./breadcrumbs";

export function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <div className="space-y-0.5">
        <Breadcrumbs />
        <h1 className="text-lg font-semibold">Analytics Dashboard</h1>
      </div>
      <div className="flex items-center gap-2">
        <Input placeholder="Search..." className="hidden w-48 md:flex" />
        <ThemeToggle />
      </div>
    </header>
  );
}
