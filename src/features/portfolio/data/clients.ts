export type Client = {
  key: string
  /** Full name, shown in the tooltip. */
  name: string
  /** Short label used when no logo file exists yet. */
  short: string
  /** Sector, shown in the tooltip. */
  sector: string
  /** File name inside `/public/images/clients/`. */
  logo?: string
  /**
   * Monochrome logo shipped as `{logo}-light.{ext}` + `{logo}-dark.{ext}`.
   * `currentColor` cannot work here: an SVG in an <img> is an isolated
   * document and never inherits the page color.
   */
  themed?: boolean
  /** Extension of the themed variants. Defaults to "svg". */
  ext?: string
  /** Optional link to the work delivered for this brand. */
  href?: string
}

/**
 * Brands worked for through Bureau347 — not personal clients, see EXPERIENCES.
 * Sibling brands are grouped: four Renault Group brands read as padding when
 * listed separately, as account depth when grouped.
 */
export const CLIENTS: Client[] = [
  {
    key: "renault-group",
    name: "Renault Group",
    short: "Renault",
    sector: "Renault, Dacia, Mobilize",
    logo: "renault-group",
    themed: true,
    href: "https://offres.renault.be/vehicules-particuliers",
  },
  {
    key: "alpine-brussels",
    name: "Alpine Brussels",
    short: "Alpine",
    sector: "Automotive retail — Groupe Autosphere",
    logo: "alpine-brussels",
    themed: true,
    href: "https://www.alpine-groupeautosphere.be/fr",
  },
  {
    key: "publicis",
    name: "Publicis",
    short: "Publicis",
    sector: "Advertising",
    logo: "publicis",
    themed: true,
  },
  {
    key: "bnp-paribas",
    name: "BNP Paribas",
    short: "BNP",
    sector: "Banking, incl. Fintro",
    logo: "bnp-paribas",
    themed: true,
  },
  {
    key: "carrefour",
    name: "Carrefour",
    short: "Carrefour",
    sector: "Retail",
    logo: "carrefour.svg",
  },
  {
    key: "hoegaarden",
    name: "Hoegaarden",
    short: "Hoegaarden",
    sector: "AB InBev",
    logo: "hoegaarden.svg",
  },
]
