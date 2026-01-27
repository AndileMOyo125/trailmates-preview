import {
  Users,
  Sun,
  MapPin,
  Droplet,
  Zap,
  ShieldCheck,
  Backpack,
  Footprints,
  Car,
} from 'lucide-react'
import type { HikeFeature, IncludedItem } from './types'

export const WHATSAPP_NUMBER = '+270687685758'
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`

export const FEATURES: HikeFeature[] = [
  { icon: <Footprints className="w-6 h-6" />, text: 'Beginner-friendly' },
  { icon: <Sun className="w-6 h-6" />, text: 'Easy pace' },
  { icon: <Users className="w-6 h-6" />, text: 'Social & welcoming' },
  {
    icon: <MapPin className="w-6 h-6" />,
    text: 'Different locations shared weekly',
  },
]

export const INCLUDED: IncludedItem[] = [
  { icon: <Users className="w-5 h-5" />, label: 'Guided group hike' },
  { icon: <Droplet className="w-5 h-5" />, label: 'Bottle of water' },
  { icon: <Zap className="w-5 h-5" />, label: 'Energy drink' },
  { icon: <Sun className="w-5 h-5" />, label: 'Sunscreen provided' },
  { icon: <ShieldCheck className="w-5 h-5" />, label: 'Hand lotion' },
  { icon: <Backpack className="w-5 h-5" />, label: 'Hiking bag provided' },
  {
    icon: <Car className="w-5 h-5" />,
    label: 'Free transport from Johannesburg to Pretoria',
  },
]

export const NOTES: string[] = [
  'Bring a cap/hat',
  'No toilets on the trails',
  'Wear comfortable shoes',
]
