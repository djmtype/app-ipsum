<script setup>
	// import "@fontsource/plus-jakarta-sans/500.css"
	// import "@fontsource/plus-jakarta-sans/700.css"
	import "@fontsource/fraunces/700.css"

	// import jakarta500 from "@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-500-normal.woff2"

	// import jakarta700 from "@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-700-normal.woff2"

	import fraunces700 from "@fontsource/fraunces/files/fraunces-latin-700-normal.woff2"

	// const desc = ref("My amazing site.")

	useHead({
		titleTemplate: (titleChunk) => {
			return titleChunk ? `${titleChunk} / Nuxt PWA Demo` : "Nuxt PWA Demo"
		},
		link: [
			{
				rel: "preload",
				as: "font",
				href: fraunces700,
				type: "font/woff2",
				crossorigin: "anonymous"
			},
			// { rel: "preload", as: "font", href: jakarta500, type: "font/woff2", crossorigin: "anonymous" },
			// { rel: "preload", as: "font", href: jakarta700, type: "font/woff2", crossorigin: "anonymous" },
		],
	})

	// const appConfig = useAppConfig()
</script>

<template>
	<Html lang="en" dir="ltr">
		<!-- <meta name="color-scheme" content="dark light" /> -->
		<!-- <Meta name="description" :content="desc" /> -->
		<Body>
			<BaseHeader />
				<NuxtPage
					:transition="{
						name: 'fade',
						mode: 'out-in',
					}"
				/>

		</Body>
	</Html>
</template>

<style>
	@import "@style/main.css";

	.fade-enter-active,
	.fade-leave-active {
		transition: all 250ms;
	}
	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
		/* filter: blur(10px); */
	}

	:root {
		--translateX: 10px;
		--translateX-invert: -10px;
	}
	.slide-left-enter-active,
	.slide-left-leave-active,
	.slide-right-enter-active,
	.slide-right-leave-active {
		transition: all 250ms;
	}
	.slide-left-enter-from {
		opacity: 0;
		transform: translate3d(var(--translateX), 0, 0);
	}
	.slide-left-leave-to {
		opacity: 0;
		transform: translate3d(var(--translateX-invert), 0, 0);
	}
	.slide-right-enter-from {
		opacity: 0;
		transform: translate3d(var(--translateX-invert), 0, 0);
	}
	.slide-right-leave-to {
		opacity: 0;
		transform: translate3d(var(--translateX), 0, 0);
	}
</style>
