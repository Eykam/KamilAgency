export type InsuranceMarket = {
  name: string
  domain: string
  url: string
}

export const personalLineCarriers: readonly InsuranceMarket[] = [
  {
    name: "Travelers",
    domain: "travelers.com",
    url: "https://www.travelers.com/",
  },
  { name: "GEICO", domain: "geico.com", url: "https://www.geico.com/" },
  {
    name: "Progressive",
    domain: "progressive.com",
    url: "https://www.progressive.com/",
  },
  {
    name: "Nationwide",
    domain: "nationwide.com",
    url: "https://www.nationwide.com/",
  },
  {
    name: "Liberty Mutual",
    domain: "libertymutual.com",
    url: "https://www.libertymutual.com/",
  },
  {
    name: "National General",
    domain: "nationalgeneral.com",
    url: "https://nationalgeneral.com/",
  },
  {
    name: "Clearcover",
    domain: "clearcover.com",
    url: "https://clearcover.com/",
  },
  {
    name: "Maryland Auto",
    domain: "mymarylandauto.com",
    url: "https://www.mymarylandauto.com/",
  },
  { name: "Trexis", domain: "trexis.com", url: "https://www.trexis.com/" },
  { name: "AAA", domain: "aaa.com", url: "https://www.aaa.com/" },
  {
    name: "Stillwater",
    domain: "stillwaterinsurance.com",
    url: "https://stillwaterinsurance.com/",
  },
  { name: "AIC", domain: "aiconline.com", url: "https://www.aiconline.com/" },
  {
    name: "Narragansett Bay",
    domain: "nbic.com",
    url: "https://www.nbic.com/",
  },
  {
    name: "Universal Property",
    domain: "universalproperty.com",
    url: "https://universalproperty.com/",
  },
]

export const commercialCarriers: readonly InsuranceMarket[] = [
  { name: "Chubb", domain: "chubb.com", url: "https://www.chubb.com/" },
  {
    name: "AmTrust",
    domain: "amtrustfinancial.com",
    url: "https://amtrustfinancial.com/",
  },
  { name: "biBERK", domain: "biberk.com", url: "https://www.biberk.com/" },
  { name: "Hiscox", domain: "hiscox.com", url: "https://www.hiscox.com/" },
  { name: "Markel", domain: "markel.com", url: "https://www.markel.com/" },
  {
    name: "Nationwide",
    domain: "nationwide.com",
    url: "https://www.nationwide.com/",
  },
  {
    name: "Neptune Flood",
    domain: "neptuneflood.com",
    url: "https://neptuneflood.com/",
  },
  {
    name: "Travelers",
    domain: "travelers.com",
    url: "https://www.travelers.com/",
  },
  { name: "CNA", domain: "cna.com", url: "https://www.cna.com/" },
]

export const marketAccessPartners: readonly InsuranceMarket[] = [
  {
    name: "Attune",
    domain: "attuneinsurance.com",
    url: "https://www.attuneinsurance.com/",
  },
  {
    name: "Pathpoint",
    domain: "pathpoint.com",
    url: "https://www.pathpoint.com/",
  },
  {
    name: "RT Connector",
    domain: "rtspecialty.com",
    url: "https://www.rtspecialty.com/",
  },
]

export const commercialInsuranceMarkets = [
  ...commercialCarriers,
  ...marketAccessPartners,
] as const
