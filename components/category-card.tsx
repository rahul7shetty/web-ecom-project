import type { ReactNode } from "react"

interface CategoryCardProps {
  icon: ReactNode
  title: string
  active?: boolean
}

export default function CategoryCard({ icon, title, active = false }: CategoryCardProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-6 border rounded-md transition-all hover:border-red-500 ${active ? "border-red-500 bg-red-500 text-white" : ""}`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-sm font-medium">{title}</h3>
    </div>
  )
}
