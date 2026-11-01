import { defaultLocale, locales, withLocale, type Locale } from '../i18n/site'

export const siteName = 'Veerify'
export const siteOrigin = 'https://veerify.io'
export const defaultSocialImagePath = '/og/veerify-preview.png'
export const githubUrl = 'https://github.com/Frogbyte-io/veerify'

const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  no: 'nb_NO',
}

type JsonLd = Record<string, unknown>

export function normalizePathname(pathname: string): string {
  const sanitized = pathname.split('#')[0]?.split('?')[0] ?? '/'
  const withLeadingSlash = sanitized.startsWith('/') ? sanitized : `/${sanitized}`

  if (withLeadingSlash !== '/' && withLeadingSlash.endsWith('/')) {
    return withLeadingSlash.slice(0, -1)
  }

  return withLeadingSlash || '/'
}

export function getAbsoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//.test(pathOrUrl)) {
    return pathOrUrl
  }

  return new URL(normalizePathname(pathOrUrl), siteOrigin).toString()
}

function stripLocalePrefix(pathname: string): string {
  for (const locale of locales) {
    const prefix = `/${locale}`

    if (pathname === prefix) {
      return '/'
    }

    if (pathname.startsWith(`${prefix}/`)) {
      return pathname.slice(prefix.length) || '/'
    }
  }

  return pathname
}

export function getOgLocale(locale: Locale): string {
  return ogLocales[locale]
}

export function getAlternateLocaleLinks(pathname: string, _locale: Locale) {
  const normalizedPath = normalizePathname(pathname)
  const basePath = stripLocalePrefix(normalizedPath)

  return locales.map(entryLocale => ({
    locale: entryLocale,
    href: getAbsoluteUrl(withLocale(entryLocale, basePath)),
  }))
}

export function getCanonicalPath(pathname: string, locale: Locale, localized: boolean): string {
  const normalizedPath = normalizePathname(pathname)

  if (!localized) {
    return normalizedPath
  }

  if (locale === defaultLocale) {
    return stripLocalePrefix(normalizedPath)
  }

  return normalizedPath
}

export function serializeJsonLd(schema?: JsonLd | JsonLd[]): string[] {
  if (!schema) {
    return []
  }

  const items = Array.isArray(schema) ? schema : [schema]
  return items.map((item) => JSON.stringify(item))
}

export function buildOrganizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteOrigin,
    logo: getAbsoluteUrl('/veerify.svg'),
    description: 'Open-source feedback management and shared inbox for product teams: collect ideas, prioritize requests, publish roadmaps and changelogs, and answer customer email on your own domain.',
    email: 'hello@veerify.io',
    sameAs: [githubUrl],
  }
}

export function buildSoftwareApplicationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteName,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: siteOrigin,
    image: getAbsoluteUrl(defaultSocialImagePath),
    description: 'Open-source feedback management and shared inbox for product teams: collect ideas, prioritize requests, publish roadmaps and changelogs, and answer customer email on your own domain.',
    isAccessibleForFree: true,
    license: 'https://www.gnu.org/licenses/agpl-3.0.html',
    sameAs: [githubUrl],
    featureList: [
      'Public feedback boards with voting',
      'Public kanban roadmap',
      'Changelog with RSS',
      'Shared inbox with SLAs, canned responses and CSAT surveys',
      'Email addresses on your own domain with forwarding and catch-all',
      'Marketing hub: site audit, AI visibility, mentions, reviews',
      'GitHub issue sync',
      'REST API and MCP server for AI agents',
      'Import from Canny',
      'Self-hosting',
    ],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free during open beta',
    },
  }
}

export function buildBreadcrumbSchema(items: Array<{ name: string; path: string }>): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.path),
    })),
  }
}

export function buildFaqSchema(items: Array<{ question: string; answer: string }>): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function buildWebSiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteOrigin,
    description: 'Open-source feedback management and shared inbox for product teams: collect ideas, prioritize requests, publish roadmaps and changelogs, and answer customer email on your own domain.',
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: getAbsoluteUrl('/veerify.svg'),
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteOrigin}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function buildArticleSchema(input: {
  headline: string
  description: string
  path: string
  locale: Locale
  datePublished: Date
  dateModified?: Date
  author?: string
  keywords?: string[]
}): JsonLd {
  const { headline, description, path, locale, datePublished, dateModified, author = 'Veerify Team', keywords = [] } = input

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    inLanguage: locale,
    datePublished: datePublished.toISOString(),
    dateModified: (dateModified ?? datePublished).toISOString(),
    mainEntityOfPage: getAbsoluteUrl(path),
    url: getAbsoluteUrl(path),
    image: getAbsoluteUrl(defaultSocialImagePath),
    author: {
      '@type': author === 'Veerify Team' ? 'Organization' : 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: getAbsoluteUrl('/veerify.svg'),
      },
    },
    keywords,
  }
}
