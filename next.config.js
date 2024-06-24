/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "/nextjs-github-pages",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/:locale/assets/:path*',
        destination: '/assets/:path*',
      },
      {
        source: '/:path*.xml',
        destination: '/:path*.xml',
      },
      {
        source: '/robots.txt',
        destination: '/robots.txt',
      },
    ]
  },
}

module.exports = nextConfig
