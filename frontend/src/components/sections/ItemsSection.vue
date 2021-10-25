<template>
  <div class="p-8">
    <div class="flex justify-center">
      <div class="tabs tabs-boxed">
        <a
          class="tab"
          @click="tabSelected(0)"
          v-bind:class="{ 'tab-active': tabIndex == 0 }"
          >Menus</a
        >
        <a
          class="tab"
          @click="tabSelected(1)"
          v-bind:class="{ 'tab-active': tabIndex == 1 }"
          >Restaurants</a
        >
      </div>
    </div>
    <div class="flex flex-wrap mt-6" v-if="tabIndex == 0">
      <ProductCard v-for="menu in menus" :menu="menu" :key="menu._id" />
    </div>
    <div class="flex flex-wrap mt-6" v-if="tabIndex == 1">
      <RestaurantCard
        v-for="restaurant in restaurants"
        :restaurant="restaurant"
        :key="restaurant._id"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/restaurant/ProductCard.vue";
import RestaurantCard from "@/components/restaurant/RestaurantCard.vue";

export default {
  name: "ItemsSection",

  methods: {
    tabSelected(index) {
      this.tabIndex = index;
      if (index == 1) this.$store.dispatch("restaurantList");
      else this.$store.dispatch("menuList");
    },
  },
  mounted() {
    this.$store.dispatch("restaurantList");
  },
  data() {
    return {
      tabIndex: 1,
    };
  },
  components: {
    ProductCard,
    RestaurantCard,
  },
  computed: {
    restaurants() {
      return this.$store.state.restaurant.restaurants;
    },
    menus() {
      return this.$store.state.product.menus;
    },
  },
};
</script>
