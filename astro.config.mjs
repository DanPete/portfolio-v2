// @ts-check
import { loadEnv } from "vite";
import { defineConfig, envField } from 'astro/config';
import tailwind from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),

  vite: {
    plugins: [
      tailwind()
    ]
  },

  env: {
    schema: {
      MAINTENANCE_MODE: envField.boolean({
        default: true,
        context: 'server',
        access: 'secret'
      })
    }
  },

  integrations: [sanity({
    projectId: env.SANITY_STUDIO_PROJECT_ID,
    dataset: env.SANITY_STUDIO_DATASET,
  }), react()]
});
