<script setup>
const { page } = useContent()

const bodyClass = ref(page.value.bodyAttrs.class)

useHead({
		bodyAttrs: { class: bodyClass },
	})



	const { path } = useRoute()
	const { data } = await useAsyncData(`content-${path}`, () => {
		return queryContent().where({ _path: path }).findOne()
	})


	


// console.log(bodyClass)
</script>

<template>
	<main class="section">
		<div class="wrapper grid-lg">
			<div class="grid-lg__col-left">
				<div class="grid-sm grid-sm--left block-effect">
					<figure class="block-reveal">
						<nuxt-img
							fit="cover"
							quality="60"
							format="webp"
							alt=""
							width="320"
							height="480"
							sizes="sm:220px md:320px lg:480px xl:33vw"
							class="image-0"
							:src="data.image.zero"
							fetchpriority="high"
						/>
					</figure>
					<figure class="block-reveal">
						<nuxt-img
							fit="cover"
							quality="60"
							format="webp"
							alt=""
							width="320"
							height="480"
							sizes="sm:220px md:320px lg:480px xl:33vw"
							class="image-1"
							:src="data.image.one"
						/>
					</figure>
					<figure class="block-reveal">
						<nuxt-img
							fit="cover"
							quality="60"
							format="webp"
							alt=""
							width="320"
							height="480"
							sizes="sm:220px md:320px lg:480px xl:33vw"
							class="image-2"
							:src="data.image.two"
						/>
					</figure>
					<figure class="block-reveal">
						<nuxt-img
							fit="cover"
							quality="60"
							format="webp"
							alt=""
							width="320"
							height="480"
							sizes="sm:220px md:320px lg:480px xl:33vw"
							class="image-3"
							:src="data.image.three"
						/>
					</figure>
				</div>
			</div>
			<div class="grid-lg__number scale-in">
				<NumberBox :headline="data.number" />
			</div>
			<div class="grid-lg__summary flow">
				<p class="entry__eyeline">{{ data.eyeline }}</p>
				<h1 class="entry__title">{{ data.title }}</h1>
	
					<ContentDoc class="prose flow" />
		

				<ul class="entry__meta" role="list">
					<li v-for="tag in data.tags">
						{{ tag }}
					</li>
				</ul>
			</div>

			<div class="grid-lg__col-right">
				<div class="grid-sm grid-sm--right block-effect">
					<figure class="block-reveal">
						<nuxt-img
							fit="cover"
							quality="60"
							format="webp"
							alt=""
							width="320"
							height="480"
							sizes="sm:220px md:320px lg:480px xl:33vw"
							class="image-5"
							:src="data.image.three"
						/>
					</figure>
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped>
	@import "@style/layout/layout-a.css";
	picture {
		height: 100%;
	}
</style>
