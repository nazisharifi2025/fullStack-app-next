"use client";
import DashboardSidbar from "@/Component/shared/dashboard/sidbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { LayoutDashboardIcon, Package, ShoppingCart, SquareUserRound } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function page() {
  const [showText, setShowText] = useState(true);
  return (
    <div className="w-full min-h-screen flex justify-between">
      <div className="max-w-3xs w-full h-full">
        <DashboardSidbar showText={showText} />
      </div>
    </div>
  );
}

export default page;