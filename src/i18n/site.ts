import enRaw from './en.json'
import noRaw from './no.json'

export const locales = ['en', 'no'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value) && locales.includes(value as Locale)
}

export function withLocale(locale: Locale, path = ''): string {
  if (!path || path === '/') return `/${locale}`

  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `/${locale}${normalizedPath}`
}

export function getDateLocale(locale: Locale): string {
  return locale === 'no' ? 'nb-NO' : 'en-US'
}

type RawDict = typeof enRaw

/**
 * The translation JSON format represents arrays as indexed string-keyed objects
 * ({ "0": ..., "1": ..., "2": ... }). This helper converts them back to arrays.
 */
function vals<T>(obj: Record<string, T>): T[] {
  return Object.values(obj)
}

function buildDictionary(raw: RawDict) {
  return {
    layout: raw.layout,
    navbar: raw.navbar,
    hero: {
      ...raw.hero,
      trustSignals: vals(raw.hero.trustSignals),
    },
    features: {
      ...raw.features,
      items: vals(raw.features.items),
    },
    howItWorks: {
      ...raw.howItWorks,
      steps: vals(raw.howItWorks.steps),
    },
    pricing: {
      ...raw.pricing,
      features: vals(raw.pricing.features),
    },
    benefits: {
      ...raw.benefits,
      developerBenefits: vals(raw.benefits.developerBenefits),
      userBenefits: vals(raw.benefits.userBenefits),
      callouts: {
        developers: {
          ...raw.benefits.callouts.developers,
          tags: vals(raw.benefits.callouts.developers.tags),
        },
        users: {
          ...raw.benefits.callouts.users,
          tags: vals(raw.benefits.callouts.users.tags),
        },
      },
    },
    cta: raw.cta,
    productMockup: {
      ...raw.productMockup,
      defaultComments: vals(raw.productMockup.defaultComments),
      cards: vals(raw.productMockup.cards).map((card) => ({
        ...card,
        comments: vals(card.comments),
      })),
    },
    footer: raw.footer,
    blog: raw.blog,
  }
}

const dictionaries = {
  en: buildDictionary(enRaw),
  no: buildDictionary(noRaw as RawDict),
}

export type SiteDictionary = ReturnType<typeof buildDictionary>

export function getDictionary(locale: Locale): SiteDictionary {
  return dictionaries[locale]
}
