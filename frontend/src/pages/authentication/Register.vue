<template>
  <div class="layout hero min-h-screen">
    <div class="md:w-1/2 w-11/12 bg-gray-50 rounded-box shadow-md p-4">
      <div class="flex justify-center mt-4">
        <img alt="Vue logo" src="../../assets/logo.png" width="75px" />
      </div>
      <h2 class="text-center text-2xl mt-5">Créer un nouvau compte</h2>
      <FormulateForm
        :values="formValues"
        class="mt-5 w-full"
        @submit="onSubmit"
      >
        <!-- Formulaire nom et prénoms -->
        <div class="md:flex justify-center w-full mt-8">
          <FormulateInput
            type="text"
            name="firstName"
            placeholder="Prénoms"
            validation="^required|min:2,length"
            class="flex-1 m-1"
            input-class="w-full input border-black input-bordered"
          />
          <FormulateInput
            type="text"
            name="lastName"
            validation="^required|min:2,length"
            placeholder="Nom"
            class="flex-1 m-1"
            input-class="w-full input border-black input-bordered"
          />
        </div>
        <!-- Formulaire tel et address -->
        <div class="md:flex justify-center w-full mt-2">
          <FormulateInput
            type="text"
            name="phone"
            placeholder="Téléphone"
            validation="^required|min:8,length"
            class="flex-1 m-1"
            input-class="w-full input border-black input-bordered"
          />
          <FormulateInput
            type="text"
            name="address"
            validation="^required|min:2,length"
            placeholder="Adresse"
            class="flex-1 m-1"
            input-class="w-full input border-black input-bordered"
          />
        </div>
        <FormulateInput
          type="email"
          name="email"
          validation="^required|email"
          placeholder="E-mail"
          class="flex-1 m-1 mt-2"
          input-class="w-full input border-black input-bordered"
        />
        <div class="md:flex justify-center w-full mt-2">
          <FormulateInput
            type="password"
            name="password"
            placeholder="Mot de passe"
            validation="^required|min:5,length"
            class="flex-1 m-1"
            input-class="w-full input border-black input-bordered"
          />
          <FormulateInput
            type="password"
            name="confirmPassword"
            validation="^required|min:5,length"
            placeholder="Confirmer mot de passe"
            class="flex-1 m-1"
            input-class="w-full input border-black input-bordered"
          />
        </div>
        <div class="flex justify-end mt-4">
          <FormulateInput
            v-on:click="login()"
            type="button"
            label="Se connecter"
            class="btn mr-2"
          />
          <FormulateInput
            type="submit"
            label="Créer un compte"
            class="btn btn-primary"
          />
        </div>
        <!-- Informer l'utilisateur en cas d'erreur -->
        <div class="alert alert-error mt-2" v-if="error">
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
            <label
              >Impossible de créer un compte, votre adresse existe déjà!</label
            >
          </div>
        </div>
      </FormulateForm>
    </div>
  </div>
</template>

<script>
//import { mapGetters } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      formValues: {
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    async onSubmit(data) {
      //soumettre le
      this.$store
        .dispatch("signup", data)
        .then(() => this.$router.push({ name: "Home" }));
    },
    //aller à la page de connexion
    login() {
      this.$router.push({ name: "Login" });
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