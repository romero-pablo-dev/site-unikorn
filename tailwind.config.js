/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        'md:col-span-3','md:col-span-4','md:col-span-5','md:col-span-6',
        'md:col-span-7','md:col-span-8','md:col-span-9','md:col-span-10',
        'md:col-span-11','md:col-span-12',
        'lg:col-span-3','lg:col-span-4','lg:col-span-5','lg:col-span-6',
        'lg:col-span-7','lg:col-span-8','lg:col-span-9','lg:col-span-10',
        'lg:col-span-11','lg:col-span-12','lg:col-span-13',
        'lg:grid-cols-13','md:grid-cols-7',
        'aspect-[4/5]','aspect-[3/4]','aspect-[16/10]','aspect-[4/3]','aspect-[1/1]','aspect-[5/6]','aspect-[5/4]',
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                '13': 'repeat(13, minmax(0, 1fr))',
            },
            colors: {
                sakura: '#FFB7C5',
                mint: '#A8E6CF',
                base: '#FFFFFF',
                surface: '#F8F9FA',
                obsidian: '#111111'
            },
            fontFamily: {
                serif: ['"Cormorant Garamond"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
            },
            fontSize: {
                // Override des plus petites tailles pour meilleure lisibilité
                'xs': ['0.8125rem', { lineHeight: '1.15rem' }], // 13px (vs 12px)
                'sm': ['0.95rem',   { lineHeight: '1.45rem' }], // 15.2px (vs 14px)
                'base': ['1.05rem', { lineHeight: '1.65rem' }], // 16.8px (vs 16px)
            },
            fontWeight: {
                normal: '400',
                light: '300',
            },
            boxShadow: {
                soft: '0 20px 40px -15px rgba(0,0,0,0.05)',
            }
        },
    },
    plugins: [],
}
