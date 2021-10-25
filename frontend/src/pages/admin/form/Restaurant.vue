<template>
  <div class="w-full flex justify-center">
    <div class="md:w-1/2 w-11/12 h-4/6 rounded p-4">
      <h1 class="text-center text-2xl text-black">Ajouter un restaurant</h1>
      <FormulateForm :values="formValues" @submit="onSubmit" class="mt-12">
        <FormulateInput
          type="image"
          name="image"
          placeholder="Image"
          validation="^required|mime:image/jpeg,image/png,image/gif"
          input-class="w-full input"
          :uploader="uploadFile"
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
          type="text"
          name="owner"
          placeholder="Responsable"
          validation="^required|min:2,length"
          input-class="w-full input input-bordered"
          class="mt-6"
        />
        <FormulateInput
          type="text"
          name="phone"
          placeholder="Téléphone"
          validation="^required|min:8,length"
          input-class="w-full input  input-bordered"
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
  name: "RestaurantForm",
  data() {
    return {
      file: null,
      formValues: {
        image: "",
        title: "",
        description: "",
        owner: "",
        phone: "",
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
      formData.append("owner", data.owner);
      formData.append("phone", data.phone);

      this.$store
        .dispatch("restaurantCreate", formData)
        .then(() => this.$router.go(-1));
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