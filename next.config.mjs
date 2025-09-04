/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir:'build',

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ssh.mqawilk.com',
            port: '',
            pathname: '/public/storage/**',
            
          },
        ],
      }
};

export default nextConfig;
