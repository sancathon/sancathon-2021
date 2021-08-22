import { DefaultSeo } from 'next-seo'

export default function SEODefault() {
  const title = 'SancaThon 2021 - Move'

  const description =
    'O SancaThon 2021 - Move é a 4ª maratona tecnológica organizada pela Escola de Engenharia de São Carlos (EESC)'

  return <DefaultSeo title={title} description={description} />
}
