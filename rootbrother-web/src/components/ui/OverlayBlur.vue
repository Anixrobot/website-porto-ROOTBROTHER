<script setup>
defineProps({
  color: {
    type: String,
    default: 'bg-[#4EDEA3]'
  },
  opacity: {
    type: String,
    default: 'opacity-25'
  },
  blur: {
    type: String,
    default: 'blur-[100px] md:blur-[130px]'
  }
})
</script>

<template>
  <div
    :class="[
      'pointer-events-none absolute rounded-full select-none transform-gpu -z-10',
      color,
      opacity,
      blur
    ]"
    aria-hidden="true"
  ></div>
</template>

