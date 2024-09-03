/** @type {import('next').NextConfig} */
const nextConfig = {
    // for image
    images: {
        // domains: ["cdn-icons-png.flaticon.com"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    }
};

export default nextConfig;
