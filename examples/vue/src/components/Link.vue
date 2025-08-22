<template>
  <a :href="href" class="link" target="_blank" rel="noopener noreferrer">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'Link',
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script> 