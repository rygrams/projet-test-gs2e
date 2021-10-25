<template>
  <div
    class="
      navbar
      fixed
      z-50
      w-full
      mb-2
      shadow-lg
      bg-neutral
      text-neutral-content
    "
  >
    <div class="px-2 mx-2 navbar-start">
      <img alt="Vue logo" src="../../assets/logo.png" width="40px" />
      <span class="text-xl font-bold ml-2">MON PROFIL</span>
    </div>
    <div class="flex-none navbar-end">
      <button v-on:click="back()" class="btn btn-ghost text-red">
        Revenir au menu
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminAppBar",
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>