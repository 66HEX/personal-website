cat > next.config.mjs << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        formats: ['image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
    },
    webpack(config, { dev, isServer }) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });
        config.optimization = {
            ...config.optimization,
            moduleIds: 'deterministic',
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all',
                minSize: 20000,
                minChunks: 1,
                maxAsyncRequests: 30,
                maxInitialRequests: 30,
                cacheGroups: {
                    r3f: {
                        test: /[\\/]node_modules[\\/](@react-three|three)[\\/]/,
                        name: 'r3f-vendors',
                        priority: 10,
                        reuseExistingChunk: true,
                        chunks: 'all',
                    },
                    scheduler: {
                        test: /[\\/]node_modules[\\/]scheduler[\\/]/,
                        name: 'scheduler',
                        priority: 9,
                        reuseExistingChunk: true,
                    },
                    tempus: {
                        test: /[\\/]node_modules[\\/]@studio-freight[\\/]tempus[\\/]/,
                        name: 'animation-lib',
                        priority: 8,
                        reuseExistingChunk: true,
                    },
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        priority: -10,
                        reuseExistingChunk: true,
                    },
                },
            },
        };
        if (!dev && !isServer) {
            config.optimization.minimize = true;
            config.optimization.concatenateModules = true;
        }
        return config;
    },
    poweredByHeader: false,
    reactStrictMode: true,
    compress: true,
    productionBrowserSourceMaps: false,
};
export default nextConfig;
EOF
