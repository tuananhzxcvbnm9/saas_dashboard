"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, CreditCard, LayoutDashboard, Users } from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/users", label: "Users", icon: Users },
  { href: "/subscriptions", label: "Subscriptions", icon: CreditCard }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full border-b bg-card md:h-screen md:w-64 md:border-b-0 md:border-r">
      <div className="flex h-16 items-center gap-2 px-5 font-semibold">
        <BarChart3 className="size-5 text-primary" /> SaaS Pulse
      </div>
      <nav className="grid gap-1 px-3 pb-4 md:pb-0">
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
