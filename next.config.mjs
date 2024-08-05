/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.prismic.io',
      port: '',
      pathname: '/noteplan-landing-cms/**'
    }]
  },
};

export default nextConfig;
