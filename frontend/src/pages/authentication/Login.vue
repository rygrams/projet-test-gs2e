<template>
  <div class="layout hero min-h-screen">
    <div class="md:w-2/6 w-11/12 bg-gray-50 rounded-box shadow-md p-4">
      <div class="flex justify-center mt-4">
        <img alt="Vue logo" src="../../assets/logo.png" width="100px" />
      </div>
      <h2 class="text-center text-2xl mt-5">Entrez vos identifiants</h2>
      <FormulateForm :values="formValues" class="mt-5" @submit="onSubmit">
        <FormulateInput
          type="email"
          name="email"
          placeholder="E-mail"
          validation="^required|email"
          input-class="w-full input border-black input-bordered"
        />
        <FormulateInput
          type="password"
          name="password"
          validation="^required|min:5,length"
          placeholder="Mot de passe"
          input-class="w-full input border-black input-bordered"
          class="mt-6"
        />
        <div class="flex justify-end mt-4">
          <FormulateInput
            v-on:click="register()"
            type="button"
            label="Créer un compte"
            class="btn mr-2"
          />
          <FormulateInput
            type="submit"
            label="Se connecter"
            class="btn btn-primary"
          />
        </div>
        <div class="alert alert-error mt-4" v-if="error">
          <div class="flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-6 h-6 mx-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              ></path>
            </svg>
            <label>Adresse ou mot de passe incorrect</label>
          </div>
        </div>
      </FormulateForm>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      formValues: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit(data) {
      this.$store
        .dispatch("login", data)
        .then(() => this.$router.push({ name: "Admin" }));
    },
    register() {
      this.$router.push({ name: "Register" });
    },
  },
  computed: {
    error() {
      return this.$store.state.auth.error;
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