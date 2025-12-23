import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

type Location = {
  id: string
  title: string
  latitude: number
  longitude: number
}

export default function Home() {
  const [locations, setLocations] = useState<Location[]>([])

  useEffect(() => {
    const fetchLocations = async () => {
      const { data, error } = await supabase
        .from('locations')
        .select('id,title,latitude,longitude')
        .in('status', ['pending','approved'])
      if (error) console.error(error)
      else setLocations(data)
    }
    fetchLocations()
  }, [])

  return (
    <div>
      <h1>Carte des lieux de mémoire</h1>
      <ul>
        {locations.map(loc => (
          <li key={loc.id}>{loc.title} ({loc.latitude}, {loc.longitude})</li>
        ))}
      </ul>
    </div>
  )
}
