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
    <div className="w-full min-h-screen dark:bg-black bg-stone-50 flex gap-1">
      <div className={`${showText ? "max-w-3xs" : "w-fit"}  max-w-3xs w-full h-full`}>
        <DashboardSidbar showText={showText} />
      </div>
        <MainSection setShowText={setShowText} showText={showText} />
    </div>
  );
}

export default page;