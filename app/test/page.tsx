'use client';

import { supabase } from '../../lib/supabaseClient';
import { useEffect, useState } from 'react';

type Location = {
  id: number;
  name: string;
  type: string[];
};

type Person = {
  id: number;
  name: string;
};

export default function TestPage() {
  const [locations, setLocations] = useState<(Location & { persons: Person[] })[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Récupérer les lieux
        const { data: locs, error: locError } = await supabase.from('locations').select('*');
        if (locError) throw locError;

        if (!locs) return;

        // Pour chaque lieu, récupérer les marins associés
        const results = await Promise.all(
          locs.map(async (loc: Location) => {
            const { data: persons, error: personsError } = await supabase
              .from('location_persons')
              .select('person_id, persons(name)')
              .eq('location_id', loc.id)
              .single();
            
            if (personsError) return { ...loc, persons: [] };
            const personList: Person[] = persons?.persons ? [persons.persons] : [];
            return { ...loc, persons: personList };
          })
        );

        setLocations(results);
      } catch (err: any) {
        setError(err.message || 'Erreur lors de la récupération des données');
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Test Supabase - Lieux de mémoire</h1>
      {error && <p style={{ color: 'red' }}>Erreur : {error}</p>}
      {locations.map(loc => (
        <div key={loc.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
          <h2>{loc.name}</h2>
          <p>Type : {loc.type.join(', ')}</p>
          <h3>Marins associés :</h3>
          {loc.persons.length > 0 ? (
            <ul>
              {loc.persons.map(p => (
                <li key={p.id}>{p.name}</li>
              ))}
            </ul>
          ) : (
            <p>Aucun marin associé</p>
          )}
        </div>
      ))}
    </div>
  );
}
