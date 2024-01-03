import { defineConfig, squooshImageService } from 'astro/config';

export default defineConfig({
   site: 'https://diegoj4v.github.io',
   service: squooshImageService()
});