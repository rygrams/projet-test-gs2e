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
    <div class="flex-1 px-2 mx-2" v-if="me">
      <span class="text-lg font-bold"> {{me.email}} </span>
    </div>
    <div class="flex-none">
      <button v-on:click="logout()" class="btn btn-ghost text-red">Se déconnecter</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminAppBar",
  methods: {
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => this.$router.push({ name: "Home" }));
    },
  },
  created: function() {
     this.$store
        .dispatch("customerMe")
  },
  computed: {  
    me() {
      return this.$store.state.customer.customer;
    },
  },
};
</script>

<style>
</style>