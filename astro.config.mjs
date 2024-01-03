import { defineConfig, squooshImageService } from 'astro/config';

export default defineConfig({
   site: 'https://diegoj4v.github.io',
   base: 'My-website',
   service: squooshImageService()
});