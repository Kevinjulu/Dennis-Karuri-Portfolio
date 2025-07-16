"use client"

import AboutClient from "@/components/about-client"
import { Award, Heart, Star } from "lucide-react"

export default function AboutPage() {
  // Define milestones data
  const milestones = [
    {
      year: "2018",
      title: "Started Makeup Journey",
      description: "Began my professional journey as a makeup artist after discovering my passion for creative expression.",
      image: "/images/milestones/journey-start.jpg",
      icon: "🎨",
      color: "from-red-500 to-rose-400"
    },
    {
      year: "2019",
      title: "First Major Collaboration",
      description: "Collaborated with leading Kenyan fashion brands, establishing my presence in the industry.",
      image: "/images/milestones/collaboration.jpg",
      icon: "🤝",
      color: "from-purple-500 to-indigo-400"
    },
    {
      year: "2020",
      title: "Social Media Growth",
      description: "Expanded my social media presence, reaching over 100,000 followers across platforms.",
      image: "/images/milestones/social-media.jpg",
      icon: "📱",
      color: "from-blue-500 to-cyan-400"
    },
    {
      year: "2021",
      title: "Brand Partnerships",
      description: "Secured partnerships with international beauty brands, representing their products in East Africa.",
      image: "/images/milestones/partnerships.jpg",
      icon: "💼",
      color: "from-amber-500 to-yellow-400"
    },
    {
      year: "2022",
      title: "Beauty Workshop Launch",
      description: "Launched my first beauty workshop series, teaching makeup techniques to aspiring artists.",
      image: "/images/milestones/workshop.jpg",
      icon: "👩‍🏫",
      color: "from-green-500 to-emerald-400"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Received industry awards for innovation and excellence in makeup artistry.",
      image: "/images/milestones/awards.jpg",
      icon: "🏆",
      color: "from-red-500 to-rose-400"
    }
  ]

  // Define values data
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "Authenticity",
      description: "I believe in staying true to yourself and expressing your unique beauty without compromise.",
      color: "from-red-500 to-rose-400",
      delay: 0.1
    },
    {
      icon: <Star className="h-8 w-8 text-white" />,
      title: "Creativity",
      description: "Pushing boundaries and exploring new techniques keeps my work fresh and inspiring.",
      color: "from-purple-500 to-indigo-400",
      delay: 0.2
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: "Excellence",
      description: "I strive for perfection in every makeup application, ensuring clients always look their best.",
      color: "from-amber-500 to-yellow-400",
      delay: 0.3
    }
  ]

  return (
    <main className="container max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-24">
      <AboutClient milestones={milestones} values={values} />
    </main>
  )
}
