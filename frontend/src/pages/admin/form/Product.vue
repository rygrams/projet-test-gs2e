<template>
  <div class="w-full flex justify-center">
    <div class="md:w-1/2 w-11/12 h-4/6 rounded p-4">
      <h1 class="text-center text-2xl text-black">Ajouter un menu</h1>

      <FormulateForm :values="formValues" class="mt-12" @submit="onSubmit">
        <FormulateInput
          type="image"
          name="image"
          placeholder="Image"
          validation="^required|mime:image/jpeg,image/png,image/gif"
          input-class="w-full input"
          :uploader="uploadFile"
        />
        <FormulateInput
          type="select"
          name="restaurant"
          validation="^required"
          placeholder="Restaurant"
          :options="restaurants.map(x=>({label : x.title, value : x._id}))"
          input-class="w-full select select-bordered"
          class="mt-6"
        />

        <FormulateInput
          type="text"
          name="title"
          validation="^required|min:2,length"
          placeholder="Nom "
          input-class="w-full input input-bordered"
          class="mt-6"
        />
        <FormulateInput
          type="text"
          name="description"
          placeholder="Description"
          validation="^required|min:2,length"
          input-class="w-full input input-bordered"
          class="mt-6"
        />
        <FormulateInput
          type="number"
          name="price"
          placeholder="Prix"
          validation="^required"
          input-class="w-full input input-bordered"
          class="mt-6"
        />

        <div class="flex justify-end mt-8">
          <FormulateInput
            type="button"
            @click="$router.go(-1)"
            label="Précédant"
            class="btn mr-2"
          />
          <FormulateInput type="submit" label="Créer" class="btn btn-primary" />
        </div>
      </FormulateForm>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuForm",
  mounted() {
    this.$store.dispatch("restaurantList");
  },
  data() {
    return {
      file: null,
      formValues: {
        image: "",
        title: "",
        description: "",
        restaurant : "",
        price: "",
      },
    };
  },
  methods: {
    uploadFile(file) {
      this.file = file;
    },
    async onSubmit(data) {
      const formData = new FormData();
      formData.append("image", this.file);
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("restaurant", data.restaurant);
      formData.append("price", data.price);

      this.$store
        .dispatch("menuCreate", formData)
        .then(() => this.$router.go(-1));
    },
  },
  computed: {
    restaurants() {
      return this.$store.state.restaurant.restaurants;
    },
  },
};
</script>

<style>
li.formulate-input-error {
  color: red;
  font-size: 13px;
  margin-top: 5px;
}
</style>