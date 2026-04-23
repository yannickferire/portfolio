"use client"

import { CoverLayout } from "./cover-layout"

export default function CoverLetterDefault() {
  return (
    <CoverLayout>
      <p>Bonjour,</p>

      <p>
        Je me permets de vous contacter suite à votre offre de Frontend Engineer.
      </p>

      <p>
        En quelques mots : je suis développeur front-end depuis plus de 12 ans,
        dont les 6 dernières en tant que seul front-end developer chez Bureau347.
        J&apos;y ai tout porté : la couche UI de bout en bout, en collaboration
        directe avec les designers, les développeurs back-end et les parties
        prenantes produit. Ce contexte m&apos;a rendu très autonome et m&apos;a donné
        une vraie vision produit.
      </p>

      <p>
        Ma stack au quotidien : TypeScript, React, Next.js, Tailwind CSS, shadcn/ui.
        J&apos;ai aussi de l&apos;expérience avec Vue.js, Svelte et Laravel.
      </p>

      <p>
        À côté, je développe des side projects que je conçois, design et ship seul.
        GROAR (groar.app), un SaaS pour créateurs, et TFTOdds (tftodds.com), une
        app data-driven. Ces projets reflètent bien ma manière de travailler :
        ownership total, du design à la mise en production.
      </p>

      <p>
        Ce qui m&apos;attire, c&apos;est de rejoindre une équipe produit, autonome,
        avec de vrais cycles courts. C&apos;est exactement comme ça que j&apos;aime
        travailler.
      </p>

      <p>
        Mon portfolio :{" "}
        <span className="font-medium text-zinc-900">yannickferire.be</span>
      </p>

      <p>À disposition pour en discuter,</p>

      <p className="font-medium text-zinc-900">Yannick Ferire</p>
    </CoverLayout>
  )
}
