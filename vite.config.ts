import typescript from '@rollup/plugin-typescript';
import { sveltekit } from '@sveltejs/kit/vite';
import ttsc from 'ttypescript';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
    typescript({
      typescript: ttsc,
    }),
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
