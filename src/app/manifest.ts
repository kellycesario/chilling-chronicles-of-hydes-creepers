import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chilling Chronicles of Hydes Creepers',
    short_name: 'Chilling Blog',
    description:
      "Explore chilling and mysterious stories on 'Chilling Chronicles of Hydes Creepers' blog. Dive into suspenseful narratives, eerie encounters, and enigmatic events, delivering thrilling content for mystery enthusiasts",
    start_url: '/',
    display: 'standalone',
    background_color: '#fdffff',
    theme_color: '#765ba8',
    icons: [
      {
        src: '/ghost-pp.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/ghost-p.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/ghost-m.png',
        sizes: '256x256',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/ghost-g.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
