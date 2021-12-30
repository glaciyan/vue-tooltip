<script setup lang="ts"></script>

<template>
  <div class="flex flex-col">
    <p>Some stuff<br />here and there</p>
    <button
      v-tooltip:bottom="'My Button'"
      ref="button"
      aria-describedby="tooltip"
      class=""
    >
      Send Message
    </button>
  </div>
  <button v-tooltip="'The Other Button'">My Other Button</button>
  <button v-tooltip:left="'The Other Button'">My Other Button</button>
  <button class="block" v-tooltip:left="'The Other Button'">My Other Button</button>
  <p v-for="num in 300">Filler Content</p>
</template>

<style scoped>
button {
  @apply px-3 py-2 bg-sky-400 text-white rounded hover:bg-sky-500 active:bg-sky-600 transition-colors shadow m-2;
}
</style>
