"use client";
import MainSection from "@/Component/shared/dashboard/MainSection";
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
    <div className="w-full bg-stone-50 dark:bg-black min-h-screen flex justify-start gap-1">
      <div className={`${showText ? "w-3xs hidden md:block " : "w-fit"}`}>
        <DashboardSidbar showText={showText} />
      </div>
        <MainSection setShowText={setShowText} showText={showText} />
    </div>
  );
}

export default page;