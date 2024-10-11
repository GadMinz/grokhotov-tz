<script setup lang="ts">
import { Breadcrumb, type Product } from "~/types";
import CartComponent from "~/components/CartComponent.vue";

const breadcrumbs: Breadcrumb[] = [
  { name: "Главная", path: "/" },
  { name: "Корзина", path: "/cart" },
];
const products: Product[] = [
  {
    id: 1,
    name: "BXC",
    price: 6848,
    maxPrice: 56584,
    photo: "/img/products/2.png",
    article: "G2H1065",
    description: "Вытяжное устройство для механической системы вентиляции",
    link: "#",
  },
  {
    id: 2,
    name: "G2H",
    price: 6848,
    maxPrice: 56584,
    photo: "/img/products/1.png",
    article: "G2H1065",
    description:
      "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
    link: "#",
  },
  {
    id: 3,
    name: "GHN",
    price: 6848,
    maxPrice: 56584,
    photo: "/img/products/3.png",
    article: "G2H1065",
    description: "Вытяжное устройство с датчиком присутствия",
    link: "#",
  },
  {
    id: 4,
    name: "TDA",
    price: 6848,
    maxPrice: 56584,
    photo: "/img/products/4.png",
    article: "G2H1065",
    description: "Вытяжное устройство с датчиком присутствия",
    link: "#",
  },
  {
    id: 5,
    name: "BXC",
    price: 6848,
    maxPrice: 56584,
    photo: "/img/products/2.png",
    article: "G2H1065",
    description: "Вытяжное устройство для механической системы вентиляции",
    link: "#",
  },
  {
    id: 6,
    name: "G2H",
    price: 6848,
    maxPrice: 56584,
    photo: "/img/products/1.png",
    article: "G2H1065",
    description:
      "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
    link: "#",
  },
  {
    id: 7,
    name: "GHN",
    price: 6848,
    maxPrice: 56584,
    photo: "/img/products/3.png",
    article: "G2H1065",
    description: "Вытяжное устройство с датчиком присутствия",
    link: "#",
  },
  {
    id: 8,
    name: "TDA",
    price: 6848,
    maxPrice: 56584,
    photo: "/img/products/4.png",
    article: "G2H1065",
    description: "Вытяжное устройство с датчиком присутствия",
    link: "#",
  },
];
useHead({
  title: "Корзина",
});
</script>
<template>
  <div class="cart-page">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <CartComponent />
    <h2>Просмотренные товары</h2>
    <ProductSlider :products="products" />
  </div>
</template>
