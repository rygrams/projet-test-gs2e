<!--disposition administrateur-->
<template>
  <div class="min-h-screen">
    <admin-app-bar />
    <div class="shadow bg-base-200 drawer drawer-mobile h-full min-h-screen">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="flex flex-col items-start justify-center drawer-content p-6">
        <router-view />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul
          class="
            menu
            p-4
            mt-16
            overflow-y-auto
            w-80
            bg-base-100
            text-base-content
          "
        >
        <li>
            <router-link to="/admin/dashboard">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/admin/clients">Clients</router-link>
          </li>
          <li class="mt-3">
            <router-link to="/admin/restaurants">Restaurant</router-link>
          </li>
          <li class="mt-3">
            <router-link to="/admin/menus">Menus</router-link>
          </li>
          <li class="mt-3">
            <a>Livreurs</a>
          </li>
          <li class="mt-3">
            <a>Commandes</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import AdminAppBar from "../../components/appbar/AdminAppBar.vue";

export default {
  name: "Admin",
  created: function () {},
  components: {
    AdminAppBar,
  },
  computed: {},
};
</script>

<style>
</style>