import type { APIRoute } from 'astro'

export const GET: APIRoute = () => {
  const body = [
    '# Security policy for Veerify',
    '# https://securitytxt.org/',
    '',
    'Contact: mailto:security@veerify.io',
    'Preferred-Languages: en',
    'Canonical: https://veerify.io/.well-known/security.txt',
    'Expires: 2027-03-27T00:00:00.000Z',
  ].join('\n')

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
