// pages/index.tsx
import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      <section className="max-w-5xl mx-auto px-6 py-16">
        {/* Titre principal */}
        <h1 className="text-5xl font-extrabold text-center text-blue-900 mb-8">
          Mémoire de la Marine
        </h1>

        {/* Introduction */}
        <p className="text-lg md:text-xl mb-6">
          Bienvenue sur <strong>Mémoire de la Marine</strong>, un site collaboratif qui recense l'ensemble des lieux de mémoire liés à la marine française et internationale.
        </p>

        <p className="text-lg md:text-xl mb-6">
          Découvrez tombes, monuments, plaques commémoratives, épaves, lieux de bataille et autres sites historiques. Chaque lieu est géolocalisé et accompagné de photos et de descriptions détaillées.
        </p>

        <p className="text-lg md:text-xl mb-8">
          Contribuez en ajoutant de nouveaux lieux, photos ou informations pour enrichir la mémoire collective de la marine.
        </p>

        {/* Bouton vers la carte */}
        <div className="text-center">
          <a
            href="/test"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Explorer la carte des lieux
          </a>
        </div>

        {/* Section pédagogique */}
        <section className="mt-16 bg-blue-100 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Comment ça marche ?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Chaque lieu est vérifié par un modérateur avant d’être validé.</li>
            <li>Les contributeurs peuvent ajouter des photos et des informations supplémentaires.</li>
            <li>Les lieux “pending” ou validés sont visibles par tous, mais les lieux rejetés ne le sont pas.</li>
            <li>Le projet est collaboratif et ouvert à tous ceux qui souhaitent enrichir la mémoire maritime.</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
