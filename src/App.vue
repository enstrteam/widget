<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <div class="main">
      <header>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/cart">Cart</RouterLink>
          <RouterLink to="/settings">Settings</RouterLink>
        </nav>
      </header>
    
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.main {
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

header nav {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

header nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s;
}

header nav a:hover {
  color: #007bff;
}

header nav a.router-link-active {
  color: #007bff;
  border-bottom: 2px solid #007bff;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
