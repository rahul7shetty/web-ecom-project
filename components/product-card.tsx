"use client"

import Image from "next/image"
import { useState } from "react"
import { Heart, ShoppingCart, Eye, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  image: string
  title: string
  price: number
  discountedPrice: number
  discount: number
  rating: number
  reviewCount: number
}

export default function ProductCard({
  image,
  title,
  price,
  discountedPrice,
  discount,
  rating,
  reviewCount,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div
      className="group relative border rounded-md p-4 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {discount > 0 && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md z-10">
          -{discount}%
        </div>
      )}

      <button
        className={`absolute top-2 right-2 p-1 rounded-full z-10 transition-colors ${isFavorite ? "text-red-500" : "text-gray-400"}`}
        onClick={() => setIsFavorite(!isFavorite)}
      >
        <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500" : ""}`} />
      </button>

      <div className="relative h-40 mb-4 bg-gray-100 rounded-md overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover p-2"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div
          className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white py-2 px-4 flex justify-center gap-4 transition-all duration-300 ${isHovered ? "translate-y-0" : "translate-y-full"}`}
        >
          <Button variant="ghost" size="sm" className="text-white p-0 flex items-center gap-1 text-xs">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
          <Button variant="ghost" size="sm" className="text-white p-0 flex items-center gap-1 text-xs">
            <Eye className="h-4 w-4" />
            Quick View
          </Button>
        </div>
      </div>

      <h3 className="font-medium text-sm mb-1 line-clamp-1">{title}</h3>

      <div className="flex gap-2 mb-1">
        <span className="text-red-500 font-medium">${discountedPrice}</span>
        {discount > 0 && <span className="text-gray-400 line-through">${price}</span>}
      </div>

      <div className="flex items-center gap-1">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        <span className="text-xs text-gray-500">({reviewCount})</span>
      </div>
    </div>
  )
}
