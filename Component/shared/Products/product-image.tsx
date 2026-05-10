"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

function ProductImage({
  images,
}: {
  images: { img_url: string }[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="space-y-4">

      {/* Main Image */}
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden border">

        <Image
          src={`http://localhost:8000/storage/${images?.[currentIndex]?.img_url}`}
          alt="product image"
          fill
          className="object-contain"
          unoptimized
        />

      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 justify-center">

        {images?.map((img, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-20 h-20 relative border cursor-pointer rounded-md overflow-hidden hover:border-orange-700",
              currentIndex === index && "border-orange-900"
            )}
          >

            <Image
              src={`http://localhost:8000/storage/${img.img_url}`}
              alt="product thumbnail"
              fill
              className="object-cover object-center"
              unoptimized
            />

          </div>
        ))}

      </div>

    </div>
  );
}

export default ProductImage;