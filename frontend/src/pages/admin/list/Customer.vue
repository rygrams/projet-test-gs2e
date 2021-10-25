<!--disposition administrateur-->
<template>
  <div class="min-h-screen w-full mt-32">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="flex flex-col items-start justify-center p-6">
      <label
        for="my-drawer-2"
        class="mb-4 btn btn-primary drawer-button lg:hidden"
        >open menu</label
      >
      <div class="hidden text-xs text-center lg:block w-full">
        <div class="flex justify-between">
          <h1 class="text-2xl">Clients</h1>
          <button class="btn float-right">Ajouter</button>
        </div>
        <div class="form-control mt-8">
          <div class="relative">
            <input
              type="text"
              placeholder="Trouvez un client"
              class="w-full pr-16 input input-primary input-bordered"
            />
            <button
              class="absolute top-0 right-0 rounded-l-none btn btn-primary"
            >
              Recherche
            </button>
          </div>
        </div>
        <div class="overflow-x-auto mt-8">
          <table class="table w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénoms</th>
                <th>E-mail</th>
                <th>Téléphone</th>
                <th>Adresse</th>
              </tr>
            </thead>
            <tbody>
              <tr class="" v-for="customer in customers" :key="customer._id">
                <th>{{ customer._id }}</th>
                <td>{{ customer.lastName }}</td>
                <td>{{ customer.firstName }}</td>
                <td>{{ customer.email }}</td>
                <td>{{ customer.phone }}</td>
                <td>{{ (customer.addresses ? customer.addresses[0] : "") }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="btn-group float-right mt-4">
          <button class="btn">Précédant</button>
          <button class="btn">Suivant</button>
        </div>
      </div>
      <div class="text-xs text-center lg:hidden">
        Menu can be toggled on mobile size. <br />Resize the browser to see
        fixed sidebar on desktop size
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Customer",
  mounted: function () {
    this.$store.dispatch("customerList");
  },
  computed: {
    customers() {
      return this.$store.state.customer.customers;
    },
  },
};
</script>

<style>
</style>