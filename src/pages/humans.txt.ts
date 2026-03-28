import type { APIRoute } from 'astro'

export const GET: APIRoute = () => {
  const body = [
    '/* TEAM */',
    'Name: Veerify Team',
    'Site: https://veerify.io',
    'Location: Norway',
    '',
    '/* TECHNOLOGY */',
    'Framework: Astro',
    'Styling: Tailwind CSS',
    'Hosting: Vercel',
    'Language: TypeScript',
  ].join('\n')

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
