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

	//   const { navigation, page, surround, globals } = useContent()
	// console.log(page.value)
</script>

<template>
	<main class="section">
		<div class="wrapper grid-lg">
			<div class="grid-lg__col-left">
				<div class="grid-sm grid-sm--left block-effect">
					<figure class="block-reveal">
						<nuxt-img
							class="image-0"
							alt=""
							format="webp"
							width="480"
							height="360"
							fit="cover"
							sizes="sm:280px md:480px lg:640px xl:33vw"
							:src="data.image.zero"
						/>
					</figure>
					<figure class="block-reveal">
						<nuxt-img
							class="image-1"
							alt=""
							format="webp"
							width="480"
							height="320"
							fit="cover"
							sizes="sm:280px md:480px lg:640px xl:33vw"
							:src="data.image.one"
						/>
					</figure>
					<figure class="block-reveal">
						<nuxt-img
							class="image-2"
							alt=""
							format="webp"
							width="480"
							height="320"
							fit="cover"
							sizes="sm:280px md:480px lg:640px xl:33vw"
							:src="data.image.two"
						/>
					</figure>
					<figure class="block-reveal">
						<nuxt-img
							class="image-3"
							alt=""
							format="webp"
							width="320"
							height="480"
							fit="cover"
							sizes="sm:220px md:320px lg:480px xl:33vw"
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
				<h1 class="entry__title">
					{{ data.title }}
				</h1>


        <ContentDoc class="prose flow" />

				<ul class="entry__meta" role="list">
					<li v-for="tag in data.tags">
						{{ tag }}
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>

<style>
	@import "@style/layout/layout-b.css";
	/* @import "@style/utilities/animation.css"; */
</style>
