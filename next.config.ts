import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
// https://i.ibb.co.com/khHN7Pk/9780143454212.jpg
  images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.ibb.co.com",
            },
        ],
    },

};

export default nextConfig;
