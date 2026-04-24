import { Card } from "./ui/card";
import type { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  color?: string;
  trend?: { value: string; positive: boolean };
}

export function MetricCard({ title, value, subtitle, icon: Icon, color = "#22D3EE", trend }: MetricCardProps) {
  return (
    <Card className="p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-2xl" style={{ fontWeight: 700, color: "#000F61" }}>{value}</p>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
          )}
          {trend && (
            <p className={`text-xs mt-1 ${trend.positive ? "text-emerald-600" : "text-red-500"}`}>
              {trend.value}
            </p>
          )}
        </div>
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
      </div>
    </Card>
  );
}
