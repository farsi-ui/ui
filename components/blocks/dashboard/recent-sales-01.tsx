"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Sale {
  name: string;
  email: string;
  amount: string;
  avatar?: string;
}

export function RecentSales01() {
  const sales: Sale[] = [
    {
      name: "علی محمدی",
      email: "ali@example.com",
      amount: "+۱,۹۹۹,۰۰۰ تومان",
    },
    {
      name: "سارا احمدی",
      email: "sara@example.com",
      amount: "+۳۹,۰۰۰ تومان",
    },
    {
      name: "رضا کریمی",
      email: "reza@example.com",
      amount: "+۲۹۹,۰۰۰ تومان",
    },
    {
      name: "مریم حسینی",
      email: "maryam@example.com",
      amount: "+۹۹,۰۰۰ تومان",
    },
    {
      name: "امیر رضایی",
      email: "amir@example.com",
      amount: "+۳۹,۰۰۰ تومان",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>فروش‌های اخیر</CardTitle>
        <CardDescription>شما این ماه ۲۶۵ فروش داشته‌اید.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {sales.map((sale, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={sale.avatar} alt={sale.name} />
                  <AvatarFallback className="text-xs">
                    {sale.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-0.5">
                  <p className="text-sm font-medium leading-none">{sale.name}</p>
                  <p className="text-xs text-muted-foreground" dir="ltr">
                    {sale.email}
                  </p>
                </div>
              </div>
              <div className="text-sm font-medium text-green-600 dark:text-green-400">
                {sale.amount}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
