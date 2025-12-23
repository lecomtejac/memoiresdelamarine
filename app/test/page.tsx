import { supabase } from "@/lib/supabaseClient";

export default async function TestPage() {
  // On récupère toutes les colonnes de la table
  const { data, error } = await supabase
    .from("locations")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return <div className="p-4 text-red-600">Erreur Supabase : {error.message}</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Liste des Lieux de Mémoire</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Titre</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Pays</th>
              <th className="px-4 py-2 border">Adresse</th>
              <th className="px-4 py-2 border">Statut</th>
              <th className="px-4 py-2 border">Latitude</th>
              <th className="px-4 py-2 border">Longitude</th>
              <th className="px-4 py-2 border">Début période</th>
              <th className="px-4 py-2 border">Fin période</th>
              <th className="px-4 py-2 border">Créé le</th>
              <th className="px-4 py-2 border">Mis à jour le</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item: any) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{item.id}</td>
                <td className="px-4 py-2 border">{item.title}</td>
                <td className="px-4 py-2 border">{item.description}</td>
                <td className="px-4 py-2 border">{item.country}</td>
                <td className="px-4 py-2 border">{item.address_text}</td>
                <td className="px-4 py-2 border">{item.status}</td>
                <td className="px-4 py-2 border">{item.latitude}</td>
                <td className="px-4 py-2 border">{item.longitude}</td>
                <td className="px-4 py-2 border">{item.period_start}</td>
                <td className="px-4 py-2 border">{item.period_end}</td>
                <td className="px-4 py-2 border">{item.created_at}</td>
                <td className="px-4 py-2 border">{item.updated_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
