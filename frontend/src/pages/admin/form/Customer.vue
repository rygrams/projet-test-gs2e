<template>
  <div class="layout hero min-h-screen">
    <div class="md:w-2/6 w-11/12 h-4/6 bg-neutral rounded shadow-md p-4">
      <div class="flex justify-center mt-4">
        <img alt="Vue logo" src="../../../assets/logo.png" width="100px" />
      </div>
      <FormulateForm :values="formValues" class="mt-10" @submit="onSubmit">
        <FormulateInput
          type="text"
          name="firstName"
          placeholder="FirstName"
          validation="^required|firstName"
          input-class="w-full input border-black input-bordered"
        />
        <FormulateInput
          type="text"
          name="lastName"
          placeholder="LastName"
          validation="^required|lastName"
          input-class="w-full input border-black input-bordered"
        />
        <FormulateInput
          type="email"
          name="email"
          placeholder="E-mail"
          validation="^required|email"
          input-class="w-full input border-black input-bordered"
        />
        <FormulateInput
          type="text"
          name="phone"
          validation="^required|phone"
          placeholder="Téléphone"
          input-class="w-full input border-black input-bordered"
          class="mt-6"
        />
        <FormulateInput
          type="text"
          name="addresses"
          placeholder="Address"
          validation="^required|addresses"
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

}
</script>

<style>

</style>