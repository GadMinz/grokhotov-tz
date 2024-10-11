<script setup lang="ts">
import type { Product } from "@/types";
import formatPrice from "@/functions/formatPrice";
import { convertRubToEur } from "@/functions/convertPrice";

defineProps<{
  product: Product;
}>();
</script>

<template>
  <div class="product">
    <div class="product-photo">
      <img :src="product.photo" alt="product.name" />
    </div>
    <div class="product-name">{{ product.name }}</div>
    <div class="product-desc">{{ product.description }}</div>
    <div class="product-price">
      {{ formatPrice(product.price) }}&nbsp;₽
      <template v-if="product.maxPrice">
        – {{ formatPrice(product.maxPrice) }}&nbsp;₽
      </template>
    </div>
    <div class="product-price-euro">
      {{ convertRubToEur(product.price) }}&nbsp;€
      <template v-if="product.maxPrice">
        – {{ convertRubToEur(product.maxPrice) }}&nbsp;€
      </template>
    </div>
    <a class="btn fill" :href="product.link">Подробнее</a>
  </div>
</template>

<style scoped lang="scss">
.product {
  padding: 25px;
  background-color: var(--blue-light);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
  &-photo {
    margin-bottom: 5px;
    max-height: 245px;
    img {
      max-height: 100%;
      display: block;
      margin: 0 auto;
    }
  }
  &-name {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 10px;
  }
  &-desc {
    font-size: 14px;
    margin-bottom: 40px;
  }
  &-price {
    font-family: "Roboto", sans-serif;
    margin-top: auto;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 3px;
    &-euro {
      color: var(--gray);
    }
  }
  .btn {
    margin-top: 20px;
  }
}
</style>
