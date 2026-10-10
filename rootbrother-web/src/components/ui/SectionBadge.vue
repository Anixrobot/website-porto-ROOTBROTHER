<template>
  <div 
    class="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
    :class="[
      variant === 'dark' 
        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
        : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
    ]"
  >
    <span v-if="icon" class="mr-1.5">{{ icon }}</span>
    {{ text }}
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'dark',
    validator: (value) => ['dark', 'light'].includes(value)
  },
  icon: {
    type: String,
    default: ''
  }
});
</script>
