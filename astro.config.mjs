import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: 'https://lstrzepek.github.io',
    integrations: [tailwind({
        config: {
            applyBaseStyles: false,
        }
    })],
    markdown: {
        shikiConfig: {
            theme: "nord",
            wrap: true
        }
    }
});
