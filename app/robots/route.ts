import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: ['/', '/works/', '/about/', '/contact/'],
                disallow: ['/private/', '/api/']
            }
        ],
        sitemap: 'https://hexthecoder.pl/sitemap.xml',
        host: 'https://hexthecoder.pl'
    }
}