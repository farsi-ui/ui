"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp, TrendingDown, Users, ShoppingCart, DollarSign, Activity } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  trend: "up" | "down";
  trendValue: string;
  icon: React.ReactNode;
}

function StatCard({ title, value, description, trend, trendValue, icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
          {trend === "up" ? (
            <TrendingUp className="h-3 w-3 text-green-500" />
          ) : (
            <TrendingDown className="h-3 w-3 text-red-500" />
          )}
          <span className={trend === "up" ? "text-green-500" : "text-red-500"}>
            {trendValue}
          </span>
          <span>{description}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function StatsCards01() {
  const stats: StatCardProps[] = [
    {
      title: "کل درآمد",
      value: "۴۵,۲۳۱,۰۰۰ تومان",
      description: "نسبت به ماه قبل",
      trend: "up",
      trendValue: "+۲۰.۱%",
      icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "کاربران فعال",
      value: "۲,۳۵۰",
      description: "نسبت به ماه قبل",
      trend: "up",
      trendValue: "+۱۸۰.۱%",
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "سفارشات",
      value: "۱۲,۲۳۴",
      description: "نسبت به ماه قبل",
      trend: "down",
      trendValue: "-۱۹%",
      icon: <ShoppingCart className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "نرخ تبدیل",
      value: "۵.۷۳%",
      description: "نسبت به ماه قبل",
      trend: "up",
      trendValue: "+۲۰۱%",
      icon: <Activity className="h-4 w-4 text-muted-foreground" />,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}
