// src/components/FeatureCard.jsx
import { Card, CardContent } from "@/components/ui/card"

export default function FeatureCard({ title, description, icon }) {
  return (
    <Card className="shadow-md hover:shadow-lg transition">
      <CardContent className="p-6 text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
