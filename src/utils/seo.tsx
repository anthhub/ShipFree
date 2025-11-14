import type { Metadata } from "next";

import config from "@/config";

// SEO utility functions for ShipFree
// These functions help you add SEO tags to your pages easily
// See: https://nextjs.org/docs/app/api-reference/functions/generate-metadata

export interface SEOTagsOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
    type?: "website" | "article" | "product";
    locale?: string;
  };
  twitter?: {
    card?: "summary" | "summary_large_image";
    title?: string;
    description?: string;
    images?: string[];
    creator?: string;
    site?: string;
  };
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
  robots?: string;
}

/**
 * Generate SEO metadata for Next.js App Router
 * This function creates comprehensive SEO tags including OpenGraph and Twitter Cards
 * 
 * @example
 * ```tsx
 * export const metadata = getSEOTags({
 *   title: "My Page Title",
 *   description: "Page description",
 *   canonicalUrl: "/my-page"
 * });
 * ```
 */
export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  twitter,
  canonicalUrl,
  noindex = false,
  nofollow = false,
  robots,
}: SEOTagsOptions = {}): Metadata => {
  const siteUrl = config.domainName.replace(/^https?:\/\//, "");
  const fullSiteUrl = config.domainName.startsWith("http")
    ? config.domainName
    : `https://${config.domainName}`;

  const defaultTitle = title || config.appName;
  const defaultDescription =
    description ||
    "Open Source Alternative to ShipFast - Launch your startup in days Not in weeks";

  // Build robots directive
  const robotsDirective = robots || [
    noindex && "noindex",
    nofollow && "nofollow",
  ]
    .filter(Boolean)
    .join(", ") || "index, follow";

  return {
    title: defaultTitle,
    description: defaultDescription,
    keywords: keywords || [
      "saas",
      "boilerplate",
      "open source",
      "free",
      "nextjs",
      "startup",
    ],
    applicationName: config.appName,
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : fullSiteUrl
    ),
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: openGraph?.type || "website",
      locale: openGraph?.locale || "en_US",
      url: openGraph?.url || canonicalUrl || fullSiteUrl,
      title: openGraph?.title || defaultTitle,
      description: openGraph?.description || defaultDescription,
      siteName: config.appName,
      images: openGraph?.images || [
        {
          url: `${fullSiteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: defaultTitle,
        },
      ],
    },
    twitter: {
      card: twitter?.card || "summary_large_image",
      title: twitter?.title || defaultTitle,
      description: twitter?.description || defaultDescription,
      images: twitter?.images || [`${fullSiteUrl}/og-image.png`],
      creator: twitter?.creator,
      site: twitter?.site,
    },
    alternates: {
      canonical: canonicalUrl
        ? canonicalUrl.startsWith("http")
          ? canonicalUrl
          : `${fullSiteUrl}${canonicalUrl}`
        : fullSiteUrl,
    },
    verification: {
      // Add your verification codes here when needed
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
      // bing: "your-bing-verification-code",
    },
  };
};

/**
 * Generate structured data (JSON-LD) for rich snippets
 * This helps Google understand your content better and may show rich results
 * 
 * @example
 * ```tsx
 * <Script
 *   type="application/ld+json"
 *   dangerouslySetInnerHTML={{
 *     __html: JSON.stringify(getStructuredData({
 *       type: "SoftwareApplication",
 *       name: "My App",
 *       description: "App description"
 *     }))
 *   }}
 * />
 * ```
 */
export interface StructuredDataOptions {
  type:
    | "SoftwareApplication"
    | "WebApplication"
    | "Organization"
    | "Article"
    | "Product"
    | "Service";
  name: string;
  description: string;
  url?: string;
  image?: string;
  author?: {
    name: string;
    url?: string;
  };
  datePublished?: string;
  dateModified?: string;
  aggregateRating?: {
    ratingValue: string;
    ratingCount: string;
  };
  offers?: Array<{
    price: string;
    priceCurrency: string;
    availability?: string;
  }>;
  applicationCategory?: string;
}

export const getStructuredData = (
  options: StructuredDataOptions
): Record<string, any> => {
  const siteUrl = config.domainName.startsWith("http")
    ? config.domainName
    : `https://${config.domainName}`;

  const base = {
    "@context": "https://schema.org",
    "@type": options.type,
    name: options.name,
    description: options.description,
    url: options.url || siteUrl,
    ...(options.image && { image: options.image }),
  };

  if (options.type === "SoftwareApplication" || options.type === "WebApplication") {
    return {
      ...base,
      ...(options.applicationCategory && {
        applicationCategory: options.applicationCategory,
      }),
      ...(options.aggregateRating && {
        aggregateRating: {
          "@type": "AggregateRating",
          ...options.aggregateRating,
        },
      }),
      ...(options.offers && {
        offers: options.offers.map((offer) => ({
          "@type": "Offer",
          ...offer,
        })),
      }),
    };
  }

  if (options.type === "Article") {
    return {
      ...base,
      ...(options.author && {
        author: {
          "@type": "Person",
          name: options.author.name,
          ...(options.author.url && { url: options.author.url }),
        },
      }),
      ...(options.datePublished && { datePublished: options.datePublished }),
      ...(options.dateModified && { dateModified: options.dateModified }),
    };
  }

  if (options.type === "Organization") {
    return {
      ...base,
      ...(options.url && { url: options.url }),
    };
  }

  return base;
};

/**
 * Render structured data as a script tag
 * Use this in your page components to add structured data
 * 
 * @example
 * ```tsx
 * {renderStructuredData({
 *   type: "SoftwareApplication",
 *   name: config.appName,
 *   description: "App description"
 * })}
 * ```
 */
export const renderStructuredData = (
  options: StructuredDataOptions
): JSX.Element => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(options)),
      }}
    />
  );
};
