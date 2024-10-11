<script setup lang="ts">
import { useCartStore } from "~/store/cart";
import { storeToRefs } from "pinia";
import type { ProductCart } from "~/types";
import pluralize from "../functions/pluralize";
import formatPrice from "../functions/formatPrice";

const cartStore = useCartStore();

const { decrementQuantity, incrementQuantity, removeItem, clearCart } =
  cartStore;

const { items, installation, totalQuantity, totalPrice } =
  storeToRefs(cartStore);

//Оформление заказа
const checkout = async (): Promise<void> => {
  try {
    const response = await $fetch("/api/checkout", {
      method: "POST",
      body: {
        items: items.value,
        installation: installation.value,
      },
    });
    console.log(response);
  } catch (error) {
    console.error("Ошибка при оформлении заказа:", error);
  }
};
</script>

<template>
  <div v-if="totalQuantity > 0" class="cart">
    <div class="cart-content">
      <div class="cart-top">
        <h1>Ваша корзина</h1>
        <div class="cart-top-quantity">
          {{ totalQuantity }}
          {{ pluralize("товар", "товара", "товаров", totalQuantity) }}
        </div>
        <button class="cart-top-clear" @click="clearCart">
          Очистить корзину
        </button>
      </div>
      <div class="cart-list">
        <CartItem
          v-for="item in items as ProductCart[]"
          :key="item.id"
          :item="item"
          :decrement-quantity="decrementQuantity"
          :increment-quantity="incrementQuantity"
          :remove-item="removeItem"
        />
        <label class="cart-install">
          <input type="checkbox" v-model="installation" />
          <span class="cart-install-check"></span>
          <span class="cart-install-icon">
            <img src="/public/img/install-icon.svg" alt="" />
          </span>
          <span class="cart-install-content">
            <span class="cart-install-title"> Установка </span>
            <span class="cart-install-desc">
              Отметьте, если Вам необходима консультация профессионала по
              монтажу выбранных товаров.
            </span>
          </span>
        </label>
      </div>
    </div>
    <div class="cart-result">
      <div class="cart-result-title">Итого</div>
      <div class="cart-result-list">
        <div class="cart-result-item">
          <div class="cart-result-item-left">Сумма заказа</div>
          <div class="cart-result-item-right">
            {{ formatPrice(totalPrice) }}&nbsp;₽
          </div>
        </div>
        <div class="cart-result-item">
          <div class="cart-result-item-left">Количество</div>
          <div class="cart-result-item-right">{{ totalQuantity }} шт</div>
        </div>
        <div class="cart-result-item">
          <div class="cart-result-item-left">Установка</div>
          <div class="cart-result-item-right">
            {{ installation ? "Да" : "Нет" }}
          </div>
        </div>
      </div>
      <div class="cart-result-total">
        <div class="cart-result-total-title">Стоимость товаров</div>
        <div class="cart-result-total-price">
          {{ formatPrice(totalPrice) }}&nbsp;₽
        </div>
      </div>
      <button class="btn fill" @click="checkout">Оформить заказ</button>
      <button class="btn">Купить в 1 клик</button>
    </div>
  </div>
  <div v-else class="cart">
    <h1>Ваша корзина пуста</h1>
  </div>
</template>

<style scoped lang="scss">
.cart {
  display: flex;
  gap: 55px;
  margin-bottom: 95px;
  &-content {
    flex: 1;
  }
  &-result {
    width: 425px;
    margin-top: 88px;
    padding: 35px 30px;
    background-color: var(--blue-light);
    height: fit-content;
    border-radius: 5px;
    &-title {
      font-size: 24px;
      line-height: 1.2;
      margin-bottom: 30px;
      font-weight: 600;
    }
    &-list {
      padding-bottom: 28px;
      border-bottom: 1px solid #aeb0b6;
      margin-bottom: 10px;
    }
    &-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 17px;
      &:last-child {
        margin-bottom: 0;
      }
      &-left {
        font-weight: 600;
      }
      &-right {
        font-family: "Roboto", sans-serif;
        line-height: 1;
      }
    }
    &-total {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 32px;
      &-title {
        font-size: 18px;
        font-weight: 600;
      }
      &-price {
        font-family: "Roboto", sans-serif;
        font-size: 26px;
        font-weight: 700;
        line-height: 1.3;
      }
    }
    .btn {
      font-size: 18px;
      margin-bottom: 12px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &-top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 35px;
    &-quantity {
      font-size: 18px;
      line-height: 1.45;
      color: var(--gray);
      margin-left: 22px;
    }
    &-clear {
      font-size: 14px;
      line-height: 1.5;
      text-decoration: underline;
      color: var(--gray);
      margin-left: 22px;
      text-underline-offset: 3px;
      margin-bottom: 4px;
    }
  }
  &-install {
    padding: 26px 25px;
    border-radius: 5px;
    background-color: #f6f8fa;
    display: flex;
    gap: 20px;
    align-items: center;
    cursor: pointer;
    &:before {
    }
    input[type="checkbox"] {
      display: none;
      &:checked + .cart-install-check:before {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        border-radius: 1px;
        width: 14px;
        height: 14px;
        background-color: var(--blue);
      }
    }
    &-check {
      width: 20px;
      min-width: 20px;
      height: 20px;
      border-radius: 2px;
      border: 1px solid #797b86;
      background-color: #fff;
      box-shadow: 2px 2px 1px 0 #00000014 inset;
      position: relative;
    }
    &-icon {
      width: 50px;
      min-width: 50px;
      height: 50px;
      padding: 10px;
      border-radius: 4px;
      background-color: #fff;
    }
    &-title {
      font-weight: 600;
      margin-bottom: 2px;
      display: block;
    }
    &-desc {
      font-size: 14px;
      line-height: 1.5;
      color: var(--gray);
      display: block;
    }
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 30px;
    &-result {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
    }
  }
  @media (max-width: 768px) {
    &-top {
      flex-wrap: wrap;
      h1 {
        width: 100%;
      }
      &-quantity {
        margin: 0;
      }
      &-clear {
        margin: 0;
      }
    }
  }
}
</style>
