<script setup>
	const links = [
		{
			name: "Ocean",
			link: "/",
		},
		{
			name: "Savanna",
			link: "/savanna",
		},
		{
			name: "Rainforest",
			link: "/rainforest",
		},
	]
</script>


<template>
	<nav class="primary-nav">
		<ul class="primary-nav__list" role="list">
		<li class="primary-nav__item" v-for="(n, i) in links" :key="`navLink-${i}`">
				<NuxtLink :to="n.link" class="primary-nav__link">
					{{ n.name }}
				</NuxtLink>
		</li>
	</ul>
	</nav>
</template>


<style lang="postcss" scoped>

nav {
	width: min(20rem, 100%);
}
nav ul {

	display: flex;
	flex-wrap: wrap;
}

nav ul > li {
	flex: 1 0 max-content;
}

a {
	padding-inline: var(--space-2xs);
	color: var(--bg-color);
	filter: contrast(.375);
	text-align: center;
	width: 100%;
	display: block;

		&:hover, &:focus-visible {
			filter: contrast(.15);
		}
}

a[aria-current="page"] {
	font-weight: var(--font-weight-bold);
	filter: contrast(.15);
	text-decoration: none;
	cursor: default;
	text-decoration: underline;
	text-decoration-thickness: .125em;
	text-underline-offset: .2em;
}
</style>