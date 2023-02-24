<script setup lang="ts">

export interface Props {
	title?: string;
	description: string;
	image?: string;
	path?: any;
}

defineProps<Props>()

</script>

<template>
  <section>
{{ title }}
  </section>
</template>

