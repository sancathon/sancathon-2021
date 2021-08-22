import { NextSeo } from 'next-seo'

/*
 * Pages that need props for SEO could then replace the default
 * tags when needed
 */
export default function SEO(title, description) {
  return <NextSeo title={title} description={description} />
}
