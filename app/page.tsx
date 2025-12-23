'use client'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-blue-50 text-gray-800 p-8">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
          Mémoire de la Marine
        </h1>

        <p className="text-lg mb-4">
          Bienvenue sur <strong>Mémoire de la Marine</strong>, un site collaboratif qui recense l'ensemble des lieux de mémoire liés à la marine française et internationale.
        </p>

        <p className="text-lg mb-4">
          Ici, vous pouvez découvrir des tombes de marins célèbres, des monuments commémoratifs, des plaques, des épaves, des lieux de bataille et bien d’autres sites historiques liés à la mer et à la marine.
        </p>

        <p className="text-lg mb-4">
          Chaque lieu est géolocalisé sur une carte interactive et accompagné, lorsque possible, de photos et de descriptions pour mieux comprendre son histoire et son importance.
        </p>

        <p className="text-lg mb-4">
          <strong>Contributeurs</strong> : vous pouvez participer en ajoutant de nouveaux lieux ou des photos. Toutes les contributions sont modérées par des administrateurs ou modérateurs avant validation.
        </p>

        <p className="text-lg mb-8">
          Ce projet a pour objectif de créer une mémoire collective et vivante de la marine, accessible à tous, et de permettre à chacun de découvrir ou de rendre hommage aux lieux et aux marins qui ont marqué l’histoire.
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
  )
}
