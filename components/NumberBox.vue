<script setup lang="ts">
export interface Props {
	headline: any
}

defineProps<Props>()
</script>

<template>
	<div class="number-box">
		<div class="number-box__wrapper">
			<div class="number-box__eyeline">No.</div>
			<div class="number-box__headline">{{ headline }}</div>
		</div>
	</div>
</template>


<style scoped>
.number-box {
	position: relative;
	width: min(35vw, 10rem);
  display: grid;
	place-content: center;
  aspect-ratio: 1/1;
  background: white;
	color: var(--bg-color);
  font-family: var(--font-family-heading);
	padding: var(--space-sm);
}


.number-box__wrapper {
	display: grid;
	align-items: baseline;
	grid-template-columns: auto auto;
}


.number-box__eyeline {
	grid-column: 1;
  writing-mode: vertical-lr;
  transform: scale(-1);
  font-size: var(--font-size-md);
	position: relative;
  margin-left: -2ch;
	font-weight: var(--font-weight-bold);

}

.number-box__headline {
	grid-column: 2;
  font-weight: var(--font-weight-bold);
  line-height: .75;
	overflow: visible;
  font-size: clamp(var(--font-size-6xl), calc(7vw + 1rem), 6.25rem);

}
</style>