<template>
  <div class="navbar mb-2 text-neutral-content">
    <!-- partie gauche de la bar de navigation Icon et le nom du site -->
    <div class="px-2 mx-2 navbar-start">
      <img alt="Vue logo" src="../../assets/logo.png" width="40px" />
      <span class="text-xl font-bold ml-2">MON RESTO</span>
    </div>
    <div class="hidden px-2 mx-2 navbar-center lg:flex">
    
    </div>
    <div class="navbar-end">
        <div class="flex items-stretch">
        <a class="btn btn-ghost btn-sm rounded-btn"> Restaurants </a>
        <a class="btn btn-ghost btn-sm rounded-btn"> Menus </a>
        <a class="btn btn-ghost btn-sm rounded-btn"> Qui sommes nous ? </a>
      </div>
      <button v-on:click="go()" class="btn bt-sm btn-primary">
        Accéder à mon compte
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  methods: {
    go() {
      this.$router.push({ name: "Admin" });
    },
  },
};
</script>

<style>
</style>