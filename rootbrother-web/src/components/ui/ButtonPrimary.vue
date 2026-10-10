<template>
  <component
    :is="componentTag"
    :to="to"
    :href="href"
    class="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-white bg-rb-emerald hover:bg-rb-emerald-hover hover:shadow-lg hover:shadow-rb-emerald/20 transition-all duration-300 active:scale-95"
  >
    {{ text }}
    <slot></slot>
  </component>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  href: {
    type: String,
    default: null
  },
  to: {
    type: [String, Object],
    default: null
  },
  tag: {
    type: String,
    default: null
  }
});

const componentTag = computed(() => {
  if (props.tag) return props.tag;
  if (props.to) return 'router-link';
  if (props.href) return 'a';
  return 'button';
});
</script>
