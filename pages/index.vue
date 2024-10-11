<script setup lang="ts">
useHead({
  title: "Главная",
});
</script>

<template>
  <div>
    <h1>Главная страница</h1>
    <NuxtLink to="/cart" style="font-size: 20px; text-decoration: underline"
      >Перейти в корзину</NuxtLink
    >
  </div>
</template>
