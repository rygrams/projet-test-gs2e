<template>
<div class="p-1 md:w-3/12">
    <div class="card shadow-sm bg-accent text-accent-content ">
    <figure>
      <img :src="'http://localhost:3000/files/' + menu.image" class="object-cover h-56" />
    </figure>
    <div class="card-body">
      <div class="flex justify-between">
        <h2 class="card-title">{{ menu.price }} F</h2>
        <h2 class="">{{ menu.title }}</h2>
      </div>
      <button class="btn btn-secondary">Commander</button>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: "ProductCard",
  props: ["menu"],
};
</script>

<style>
</style>