<template>
  <button class="button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  emits: ['click']
}
</script> 