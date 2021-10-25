<template>
  <div class="p-1 md:w-3/12">
    <div class="card shadow-sm bg-accent text-accent-content">
      <figure>
        <img
          :src="'http://localhost:3000/files/' + restaurant.image"
          class="object-cover h-56"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ restaurant.title }}</h2>
        <p>{{ restaurant.description }}</p>
        <button class="btn btn-secondary mt-5">Visiter</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RestaurantCard",
  props: ["restaurant"],
};
</script>

<style>
</style>