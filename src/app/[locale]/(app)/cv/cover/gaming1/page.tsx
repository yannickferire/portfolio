"use client"

import { CoverLayout } from "../cover-layout"

export default function CoverLetterGaming1() {
  return (
    <CoverLayout>
      <p>Bonjour,</p>

      <p>
        Je suis Yannick, développeur front-end senior avec plus de 12 ans
        d&apos;expérience basé près de Liège. J&apos;ai vu votre offre de
        Frontend Engineer sur LinkedIn le poste m&apos;a tout de suite parlé.
      </p>

      <p>
        Ce qui m&apos;a convaincu, c&apos;est ce que je lis dans
        votre offre : des petites équipes autonomes, orientées produit, avec de
        vrais cycles courts. Après 12 ans dans la même structure, c&apos;est
        exactement ce que je recherche pour la suite.
      </p>

      <p>
        Chez Bureau347, j&apos;ai été le seul développeur front-end pendant
        6 ans. J&apos;ai appris à être autonome, à prendre des décisions
        produit et à collaborer avec tous les corps de métier autour de moi.
        Aujourd&apos;hui, j&apos;ai envie de retrouver ça dans une vraie équipe,
        où je peux contribuer mais aussi apprendre des autres.
      </p>

      <p>
        En dehors du boulot, je développe des side projects que je conçois
        et livre seul :
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          <span className="font-medium text-zinc-900">GROAR</span> (groar.app) :
          un SaaS qui permet aux créateurs de transformer leurs métriques en
          visuels partageables en quelques secondes.
        </li>
        <li>
          <span className="font-medium text-zinc-900">TFTOdds</span> (tftodds.com) :
          un outil de probabilités pour les joueurs de Teamfight Tactics, basé
          sur les données réelles du jeu.
        </li>
      </ul>
      <p>
        Ces projets me permettent de tester d&apos;autres technos et de garder
        l&apos;esprit ouvert en dehors de mon travail quotidien.
      </p>

      <p>
        Et puis il y a le produit en lui-même. Je suis joueur de poker et
        j&apos;aime l&apos;univers du casino. Travailler sur un produit que je
        connais en tant qu&apos;utilisateur, c&apos;est un vrai moteur.
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
