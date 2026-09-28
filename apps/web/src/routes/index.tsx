import { createFileRoute } from '@tanstack/react-router'
import { LandingPage } from '@pairdbase_client/ui/src/templates/landingPage'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Pairdbase — One Workspace for Every Database' },
      {
        name: 'description',
        content:
          'Query every database from one browser-native workspace with live collaboration and schema-aware AI. No install required.',
      },
      {
        property: 'og:title',
        content: 'QueryForge — One Workspace for Every Database',
      },
      {
        property: 'og:description',
        content:
          'A browser-native, collaborative database workspace with schema-aware AI.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: LandingPage,
})
