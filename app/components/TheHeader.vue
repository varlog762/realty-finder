<script setup lang="ts"></script>

<template>
  <header>
    <h1>RealtyFinder</h1>
    <nav>
      <NuxtLink to="/">Dashboard</NuxtLink>
      <NuxtLink to="/login">Login</NuxtLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;

  h1 {
    margin: 0;
    font-size: 1.5rem;
  }

  nav {
    a {
      color: white;
      margin-left: 1rem;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
