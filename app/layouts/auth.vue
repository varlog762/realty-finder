<script setup lang="ts"></script>

<template>
  <main>
    <div class="pseudo-header">
      <NuxtLink to="/">Home</NuxtLink>
    </div>
    <slot></slot>
  </main>
</template>

<style lang="scss" scoped>
.pseudo-header {
  background-color: #2c3e50;
  padding: 1rem 2rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
