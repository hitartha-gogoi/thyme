/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["localhost", "www.azuki.com"], // ✅ Allow external images from GitHub
      },
};

export default nextConfig;
