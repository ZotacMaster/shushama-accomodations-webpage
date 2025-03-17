'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { Button } from '@/components/ui/button'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix Leaflet icon issues
const fixLeafletIcon = () => {
  // Fix the default icon issue
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  })
}

// Component to update map view when location changes

interface ChangeViewProps {
    center : [number, number]
    zoom : number
}
function ChangeView({ center, zoom }: ChangeViewProps) {
  const map = useMap()
  map.setView(center, zoom)
  return null
}

// Location type definition
type Location = {
  id: number
  name: string
  address: string
  phone: string
  email: string
  description: string
  image: string
  coordinates: { lat: number; lng: number }
}

interface LocationMapProps {
  locations: Location[]
  activeLocation: number
  setActiveLocation: (index: number) => void
}

export default function LocationMap({ locations, activeLocation, setActiveLocation }: LocationMapProps) {
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
    fixLeafletIcon()
  }, [])

  if (!isMounted) {
    return (
      <div className="w-full h-[400px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">Loading map...</p>
      </div>
    )
  }

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <MapContainer 
        center={[locations[activeLocation].coordinates.lat, locations[activeLocation].coordinates.lng]} 
        zoom={13} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <ChangeView 
          center={[locations[activeLocation].coordinates.lat, locations[activeLocation].coordinates.lng]} 
          zoom={13} 
        />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, index) => (
          <Marker 
            key={location.id}
            position={[location.coordinates.lat, location.coordinates.lng]}
            eventHandlers={{
              click: () => {
                setActiveLocation(index)
              },
            }}
          >
            <Popup>
              <div className="p-1">
                <h3 className="font-bold text-sm">{location.name}</h3>
                <p className="text-xs mt-1">{location.address}</p>
                <Button size="sm" className="mt-2 w-full text-xs">Book Now</Button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}