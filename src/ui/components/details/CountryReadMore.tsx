// src/ui/components/details/CountryReadMore.tsx
import { ArrowRightIcon } from "@phosphor-icons/react"
import type { DTOCountry } from "../../../types/country/DTOCountry"

type CountryReadMoreProps = {
  country: DTOCountry
}

// Mock estático por região. O enunciado autoriza isso explicitamente.
const REGION_CONTENT: Record<string, { title: string; description: string }> = {
  Americas: {
    title: "A Continent of Vast Horizons",
    description:
      "From frozen Arctic tundras to Patagonian steppes, the Americas span every climate and culture imaginable. Indigenous legacies, colonial histories and modern innovation blend into a continent of endless reinvention — a place where vast wilderness meets vibrant metropolises.",
  },
  Europe: {
    title: "Where History Meets Modernity",
    description:
      "Europe is a mosaic of ancient civilizations and cutting-edge societies. Cobblestone streets lead to Michelin-starred kitchens, Gothic cathedrals stand next to glass towers, and centuries of philosophy and art continue to shape the world's cultural heartbeat.",
  },
  Asia: {
    title: "An Ancient Civilization Reborn",
    description:
      "Few continents can claim a history as ancient and continuous as Asia. Spanning millennia of philosophical tradition, artistic mastery, and scientific discovery, it remains a living museum of human ingenuity — standing at the intersection of storied past and ambitious future.",
  },
  Africa: {
    title: "The Cradle of Humanity",
    description:
      "Africa is where our story began. From the Sahara's endless dunes to the Serengeti's thundering herds, from Nile-fed pharaohs to thriving modern capitals, this continent holds both humanity's oldest memories and some of its most dynamic futures.",
  },
  Oceania: {
    title: "Islands of Wonder",
    description:
      "Scattered across the world's largest ocean, Oceania is a constellation of cultures and ecosystems. Coral reefs, volcanic peaks and ancestral songlines define a region where isolation has preserved both biodiversity and tradition in ways found nowhere else on Earth.",
  },
}

function CountryReadMore({ country }: CountryReadMoreProps) {
  const content =
    REGION_CONTENT[country.region] ?? {
      title: "A Land of Stories",
      description:
        "Every nation holds within its borders a unique tapestry of landscapes, languages and lived experience. Explore further to discover what makes this country one of a kind.",
    }

  // Imagem genérica por região (picsum com seed estável = sempre mesma imagem pra mesma região)
  const imageUrl = `https://picsum.photos/seed/${country.region}/600/500`

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-4xl mx-auto bg-stone-100 rounded-md overflow-hidden border border-stone-200">
        <img
            src={imageUrl}
            alt={`A view representing ${country.region}`}
            className="w-full h-full object-cover"/>
        <div className="p-8 flex flex-col justify-center gap-4">
            <h2 className="text-2xl font-serif italic text-stone-900">
                {content.title}
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed">
                {content.description}
            </p>
            <a
            href="#"
            className="flex items-center gap-2 text-amber-600 text-xs uppercase tracking-wider font-semibold hover:text-amber-700">
                Discover More <ArrowRightIcon size={14} />
            </a>
        </div>
    </section>
  )
}

export default CountryReadMore