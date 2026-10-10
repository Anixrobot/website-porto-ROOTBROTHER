<template>
  <component
    :is="componentTag"
    :to="to"
    :href="href"
    class="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold border transition-all duration-300 active:scale-95"
    :class="[
      variant === 'dark' 
        ? 'border-white/20 text-white hover:bg-white/10 hover:border-white/40' 
        : 'border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
    ]"
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
  },
  variant: {
    type: String,
    default: 'dark',
    validator: (value) => ['dark', 'light'].includes(value)
  }
});

const componentTag = computed(() => {
  if (props.tag) return props.tag;
  if (props.to) return 'router-link';
  if (props.href) return 'a';
  return 'button';
});
</script>
