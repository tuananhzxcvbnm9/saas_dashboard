"use client";

import { usePathname } from "next/navigation";

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="text-sm text-muted-foreground">
      Home
      {segments.map((segment) => (
        <span key={segment}> / <span className="capitalize text-foreground">{segment}</span></span>
      ))}
    </div>
  );
}
