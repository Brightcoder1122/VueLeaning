<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-brand">Ega Learning</router-link>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/login" class="nav-link text-light">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link text-light">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBarComponent"
}
</script>

<style scoped>

</style>