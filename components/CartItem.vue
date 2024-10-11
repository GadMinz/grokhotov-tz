<script setup lang="ts">
import type { ProductCart } from "~/types";
import formatPrice from "~/functions/formatPrice";

defineProps<{
  item: ProductCart;
  decrementQuantity: (id: number) => void;
  incrementQuantity: (id: number) => void;
  removeItem: (id: number) => void;
}>();
</script>

<template>
  <div class="cart-item">
    <div class="cart-item-img">
      <img :src="item.photo" alt="" />
    </div>
    <div class="cart-item-content">
      <div class="cart-item-name">{{ item.name }}</div>
      <div class="cart-item-desc">{{ item.description }}</div>
      <div class="cart-item-article">Артикул: {{ item.article }}</div>
    </div>
    <div class="cart-item-count-wrapper">
      <div class="cart-item-count">
        <button @click="decrementQuantity(item.id)" class="minus">
          <svg
            width="10"
            height="2"
            viewBox="0 0 10 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1L1 1"
              stroke="#33374E"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <span class="count">{{ item.quantity }}</span>
        <button @click="incrementQuantity(item.id)" class="plus">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1V9"
              stroke="#33374E"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 5L1 5"
              stroke="#33374E"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="cart-item-price" v-if="item.quantity > 1">
          {{ formatPrice(item.price) }}&nbsp;₽/шт.
        </div>
      </div>
    </div>
    <div class="cart-item-total">
      {{ formatPrice(item.price * item.quantity) }}&nbsp;₽
    </div>
    <button @click="removeItem(item.id)" class="cart-item-delete"></button>
  </div>
</template>

<style scoped lang="scss">
.cart-item {
  display: flex;
  padding: 25px 50px 20px 15px;
  align-items: center;
  position: relative;
  &-img {
    width: 100px;
    min-width: 100px;
    height: 100px;
    margin-right: 30px;
  }
  &-content {
    margin-right: 80px;
  }
  &-name {
    font-weight: 600;
    margin-bottom: 6px;
    line-height: 1.45;
  }
  &-desc {
    font-size: 12px;
    margin-bottom: 7px;
    line-height: 1.45;
  }
  &-article {
    color: var(--gray);
    font-size: 14px;
    line-height: 1.5;
  }
  &-count {
    display: flex;
    gap: 2px;
    position: relative;
    &-wrapper {
      margin-right: 80px;
    }
    & > .count,
    & > .plus,
    & > .minus {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px 4px 5px 4px;
      background-color: var(--blue-light);
      min-width: 33px;
    }
    & > .minus {
      border-radius: 4px 0 0 4px;
    }
    & > .plus {
      border-radius: 0 4px 4px 0;
    }
  }
  &-price {
    font-size: 12px;
    font-family: "Roboto", sans-serif;
    text-align: center;
    position: absolute;
    top: 100%;
    padding-top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }
  &-total {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 500;
  }
  &-delete {
    content: "";
    position: absolute;
    top: 27px;
    right: 6px;
    width: 12px;
    min-width: 12px;
    height: 12px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L13 13' stroke='%231F2432' stroke-width='1.5'/%3E%3Cpath d='M1 13L13 1' stroke='%231F2432' stroke-width='1.5'/%3E%3C/svg%3E%0A");
  }
  @media (max-width: 1200px) {
    &-count {
      &-wrapper {
        margin-left: auto;
      }
    }
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 15px;
    &-img {
      margin: 0;
    }
    &-content {
      margin: 0;
      width: 100%;
    }
    &-count-wrapper {
      margin: 0;
    }
    &-total {
      margin-left: auto;
    }
  }
}
</style>
