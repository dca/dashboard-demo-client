/** @type {import('next').NextConfig} */

const API_URL = process.env.API_URL ?? 'localhost:3000/api'

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
				destination: `http://${API_URL}/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
