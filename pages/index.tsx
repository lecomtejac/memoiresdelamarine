export default function HomePage() {
  return (
    <main className="min-h-screen bg-blue-50 text-gray-800 p-8">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
          Mémoire de la Marine
        </h1>
        <p className="text-lg mb-4">
          Bienvenue sur <strong>Mémoire de la Marine</strong>, un site collaboratif qui recense l'ensemble des lieux de mémoire liés à la marine.
        </p>
        <p className="text-lg mb-4">
          Découvrez tombes, monuments, plaques, épaves, lieux de bataille et autres sites historiques.
        </p>
        <p className="text-lg mb-8">
          Chaque lieu est géolocalisé et accompagné de photos et descriptions. Contribuez en ajoutant de nouveaux lieux ou photos ! 
        </p>
        <div className="text-center">
          <a 
            href="/test" 
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          >
            Explorer la carte des lieux
          </a>
        </div>
      </section>
    </main>
  );
}
