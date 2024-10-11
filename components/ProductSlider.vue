<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import type { Product } from "~/types";
import ProductItem from "~/components/ProductItem.vue";
import { Navigation, Pagination } from "swiper/modules";

defineProps<{
  products: Product[];
}>();
</script>
<template>
  <div class="product-slider-control">
    <div class="product-slider-button-prev">
      <svg
        width="10"
        height="20"
        viewBox="0 0 10 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 19L1 10L9 0.999999"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="product-slider-pagination"></div>
    <div class="product-slider-button-next">
      <svg
        width="10"
        height="20"
        viewBox="0 0 10 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L9 10L1 19"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
  <swiper
    :slides-per-view="1"
    :space-between="20"
    :navigation="{
      prevEl: '.product-slider-button-prev',
      nextEl: '.product-slider-button-next',
    }"
    :pagination="{
      el: '.product-slider-pagination',
      type: 'fraction',
    }"
    :breakpoints="{
      568: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    }"
    :modules="[Navigation, Pagination]"
    class="product-slider"
  >
    <swiper-slide v-for="product in products" :key="product.id">
      <ProductItem :product="product" />
    </swiper-slide>
  </swiper>
</template>

<style scoped lang="scss">
.product-slider {
  margin-bottom: 96px;
  .swiper-slide {
    height: unset;
  }
  &-control {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 60px;
    align-items: center;
    margin-top: -35px;
  }
  &-pagination {
    width: fit-content;
    margin: 0 15px 0 20px;
    font-size: 18px;
    color: var(--gray);
  }
  &-button {
    &-prev,
    &-next {
      width: 50px;
      height: 50px;
      min-width: 50px;
      border-radius: 50%;
      background-color: #90a2b5;
      cursor: pointer;
      transition: 200ms;
      &:hover {
        opacity: 0.9;
      }
    }
    &-prev {
      padding: 15px 21px 15px 19px;
    }
    &-next {
      padding: 15px 19px 15px 21px;
    }
  }
  @media (max-width: 768px) {
    &-control {
      margin-top: 15px;
      margin-bottom: 15px;
      justify-content: center;
    }
  }
}
</style>

<style lang="scss">
.product-slider-pagination .swiper-pagination-current {
  font-size: 24px;
  color: #212121;
  font-weight: 500;
}
</style>
