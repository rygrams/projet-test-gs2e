<template>
  <!-- <div
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
  </div> -->
  <div>
    <ProfilAppBar class="fixed w-full z-50" />
    <div class="p-14 w-full flex justify-center">
      <div class="md:w-2/3  mt-14">
        <div class="flex items-center">
          <div class="avatar placeholder">
            <div
              class="
                bg-neutral-focus
                text-neutral-content
                rounded-full
                w-32
                h-32
              "
            >
              <span class="text-4xl"
                >{{ me.firstName[0].toUpperCase()
                }}{{ me.lastName[0].toUpperCase() }}</span
              >
            </div>
          </div>
          <div class="ml-4">
            <span class="text-3xl"
              >{{ me.firstName.toUpperCase() }}
              {{ me.lastName.toUpperCase() }}</span
            >
            <h2>{{ me.email }}</h2>
          </div>
          <div class="flex-1"></div>
          <div class="float-right">
            <button v-on:click="logout()" class="btn btn-danger text-red">
              Se déconnecter
            </button>
          </div>
        </div>
        <div class="mt-8">
          <div class="tabs">
            <a class="tab tab-bordered tab-active w-1/4">Mon profils</a>
            <a class="tab tab-bordered w-1/4">Mes commandes</a>
            <a class="tab tab-bordered w-1/4">Mes enregistrements</a>
            <a class="tab tab-bordered w-1/4">Contacter le support</a>
          </div>
        </div>
      </div>
    </div>
    <div class="h-64"></div>
    <Footer />
  </div>
</template>

<script>
import ProfilAppBar from "@/components/appbar/ProfilAppBar.vue";
import Footer from "@/components/appbar/Footer.vue";

export default {
  name: "Profile",
  components: {
    ProfilAppBar,
    Footer,
  },
  methods: {
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => this.$router.push({ name: "Home" }));
    },
  },
  created: function () {
    this.$store.dispatch("customerMe");
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