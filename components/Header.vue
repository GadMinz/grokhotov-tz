<script setup lang="ts">
import { useCartStore } from "@/store/cart";
import { storeToRefs } from "pinia";
import pluralize from "@/functions/pluralize";
import formatPrice from "../functions/formatPrice";

const cartStore = useCartStore();
const { totalQuantity, totalPrice } = storeToRefs(cartStore);
</script>

<template>
  <header class="header">
    <NuxtLink to="/cart" class="header-cart">
      <div class="header-cart-img">
        <img src="/public/img/cart.svg" alt="" />
      </div>
      <div>
        <div class="header-cart-title">Ваша корзина</div>
        <div class="header-cart-quantity">
          {{ totalQuantity }}
          {{ pluralize("товар", "товара", "товаров", totalQuantity) }}
        </div>
        <div class="header-cart-price">
          {{ formatPrice(totalPrice) }}&nbsp;₽
        </div>
      </div>
    </NuxtLink>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  &-cart {
    display: flex;
    align-items: center;
    margin-left: auto;
    &-img {
      margin-right: 10px;
      width: 32px;
      height: 32px;
    }
    &-title {
      font-size: 14px;
    }
    &-quantity {
      font-size: 12px;
      line-height: 1.2;
      color: var(--gray);
    }
    &-price {
      font-size: 12px;
    }
  }
}
</style>
