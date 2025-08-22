<template>
  <div class="container">
    <Heading tag="h2">Vue Testing Demo</Heading>
    <Heading tag="h1">Welcome to our simple Vue app!</Heading>
    
    <p>This is a simple page with buttons, headings, and links for testing npm packages.</p>
    
    <Heading tag="h3">Interactive Elements</Heading>
    <div>
      <Button @click="incrementCounter">
        Click me! (Clicked {{ counter }} times)
      </Button>
      <Button @click="showAlert">
        Show Alert
      </Button>
    </div>
    
    <Heading tag="h3">Useful Links</Heading>
    <div>
      <Link href="https://vuejs.org">Vue Documentation</Link>
      <Link href="https://testing-library.com">Testing Library</Link>
      <Link href="https://vitest.dev">Vitest Testing Framework</Link>
    </div>
    
    <Heading tag="h3">About</Heading>
    <p>This app is designed to test npm packages with Vue components. It includes:</p>
    <ul>
      <li>Button components with click handlers</li>
      <li>Heading components with different levels</li>
      <li>Link components with external URLs</li>
      <li>State management with Composition API</li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
import Button from './components/Button.vue'
import Heading from './components/Heading.vue'
import Link from './components/Link.vue'

export default {
  name: 'App',
  components: {
    Button,
    Heading,
    Link
  },
  setup() {
    const counter = ref(0)
    
    const incrementCounter = () => {
      counter.value++
    }
    
    const showAlert = () => {
      alert('Hello from Vue!')
    }
    
    return {
      counter,
      incrementCounter,
      showAlert
    }
  }
}
</script> 