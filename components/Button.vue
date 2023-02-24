<script setup lang="ts">

// interface Props {
// 	className?: string
// 	href?: string
//   externalTarget?: boolean
// }
// const { className = 'button', href, externalTarget } = defineProps<Props>()



export interface Props {
	theme?: 'primary' | 'secondary'
	href?: string
  externalTarget?: boolean
}

defineProps<Props>()


// withDefaults(defineProps<Props>(), {
//   theme: 'primary',

// })

</script>

<template>
  <div>
    <!-- <a
      v-if="href && externalTarget"
      :href="href"
      :class="className"
      target="_blank"
      rel="noopener"
      ><slot
    /></a>

    <a v-else-if="href" :href="href" :class="className"><slot /></a> -->
    <button :class="'btn-' + theme"><slot /></button>
  </div>
</template>




