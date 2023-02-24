// https://nuxt.com/docs/api/configuration/nuxt-config

import postcssConfig from "./postcss.config"
export default defineNuxtConfig({
	modules: [
		"@nuxt/content",
		"@nuxt/image-edge",

		// [
		// 	"@nuxt-modules/compression",
		// 	{
		// 		algorithm: "brotliCompress",
		// 	},
		// ],
	],

	nitro: {
		compressPublicAssets: true,
	},

	content: {
		documentDriven: true,
	},

	image: {
		staticFilename: "[publicPath]/images/[name]-[hash][ext]",
		// The screen sizes predefined by `@nuxt/image`:
		screens: {
			sm: 580,
			md: 700,
			lg: 880,
			xl: 1000,
			xxl: 1240,
			"2xl": 1240,
		},
	},

	alias: {
		"@img": "/assets/images",
		"@style": "/assets/styles",
	},
	app: {
		head: {
			charset: "utf-8",
			viewport: "initial-scale=1",
			title: "AppIpsum",
		},
	},

	vite: {
		css: {
			devSourcemap: true,
		},
	},

	postcss: postcssConfig,
	

	// css: ['@style/main.css'],
})
