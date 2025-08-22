<template>
  <component :is="tag" class="heading">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    tag: {
      type: String,
      default: 'h1'
    }
  }
}
</script> 