import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base: "/aliceborner.github.io/", 
	plugins: [sveltekit()],
});