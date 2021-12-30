<script setup lang="ts"></script>

<template>
  <div class="flex flex-col">
    <p>asdfasdfa<br />sdfasdfasdf</p>
    <button
      v-tooltip:bottom="'My Button'"
      ref="button"
      aria-describedby="tooltip"
      class="
        px-3
        py-2
        bg-sky-400
        text-white
        rounded
        hover:bg-sky-500
        active:bg-sky-600
        transition-colors
        shadow
        m-2
      "
    >
      Send Message
    </button>
  </div>
  <button v-tooltip="'The Other Button'">My Other Button</button>
  <!-- <p v-for="num in 300">num</p> -->
</template>
