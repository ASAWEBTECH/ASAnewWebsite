/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Domínios remotos permitidos
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'courses.ulc.asu.edu',
        pathname: '/assets/img/**',
      }
    ],
    // Configurações otimizadas para velocidade
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128],
    minimumCacheTTL: 3600, // Cache por 1 hora
    dangerouslyAllowSVG: false,
  },
  experimental: {
    largePageDataBytes: 128 * 100000
  }
}

module.exports = nextConfig