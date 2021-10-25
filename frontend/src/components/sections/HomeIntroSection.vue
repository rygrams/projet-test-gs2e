<template>
  <div class="hero layout hero-size">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="text-center hero-content text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Mon Resto</h1>
        <p class="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>

        <div class="form-control">
          <div class="relative">
            <input
              type="text"
              placeholder="Trouvez vos repas"
              class="w-full pr-16 input input-primary input-bordered"
            />
            <button
              class="absolute top-0 right-0 rounded-l-none btn btn-primary"
            >
              Recherche
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeIntroSection",
};
</script>

<style scoped>
.layout {
  background-image: url("../../assets/background.jpg");
}
.hero-size {
  min-height: calc(100vh / 1.2);
}
</style>