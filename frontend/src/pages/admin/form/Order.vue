<template>
  <div class="layout hero min-h-screen">
    <div class="md:w-2/6 w-11/12 h-4/6 bg-neutral rounded shadow-md p-4">
      <div class="flex justify-center mt-4">
        <img alt="Vue logo" src="../../assets/logo.png" width="100px" />
      </div>
      <FormulateForm :values="formValues" class="mt-10" @submit="onSubmit">
        <FormulateInput
          type="number"
          name="total"
          placeholder="Total"
          validation="^required|total"
          input-class="w-full input border-black input-bordered"
        />
        <FormulateInput
          type="file"
          name="items"
          placeholder="Items"
          validation="^required|items"
          input-class="w-full input border-black input-bordered"
        />
        <FormulateInput
          type="text"
          name="address"
          placeholder="Addresse"
          validation="^required|address"
          input-class="w-full input border-black input-bordered"
        />
        <FormulateInput
          type="text"
          name="status"
          placeholder="Status"
          validation="^required|status"
          input-class="w-full input border-black input-bordered"
        />
        <div class="flex justify-end mt-8">
          <FormulateInput type="submit" label="Se connecter" class="btn" />
        </div>
      </FormulateForm>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderForm",
  data() {
    return {
      formValues: {
        total: "",
        items: [],
        address: "",
        status: "",
        deleted: false,
      },
    };
  },
  methods: {
    async onSubmit(data) {
      console.log(data);

      dispatch("login", data)
        .then(() => this.$router.push({ name: "home" }));
    },
  },
};
</script>

<style>
.layout {
  background-image: url("../../assets/background.jpg");
}
li.formulate-input-error {
  color: red;
  font-size: 13px;
  margin-top: 5px;
}
</style>