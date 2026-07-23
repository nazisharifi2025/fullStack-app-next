import React from "react";
import DashboardHeader from "./DashboardHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PackagePlus } from "lucide-react";
import InsertProduct from "./InsertProduct";

function AddProductMainSection({
  showText,
  setShowText,
}: {
  showText: boolean;
  setShowText: any;
}) {
  return (
    <div className="w-full flex flex-col">
      <DashboardHeader showText={showText} setShowText={setShowText} />
      <div className="w-full h-full flex justify-center items-center p-3">
        <div className="w-full max-w-5xl mx-auto border p-5 border-gray-300 rounded-md dark:border-gray-100 ">
          <div className="flex w-full flex-col items-center">
            <PackagePlus size={32} />
            <h1 className="text-3xl my-4 font-semibold text-gray-400 dark:text-stone-100">
              Add New Products
            </h1>
          </div>
          <InsertProduct />
        </div>
      </div>
    </div>
  );
}

export default AddProductMainSection;