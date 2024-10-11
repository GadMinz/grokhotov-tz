<script setup lang="ts">
import { Breadcrumb } from "~/types";

defineProps<{
  breadcrumbs: Breadcrumb[];
}>();
</script>

<template>
  <nav aria-label="breadcrumb">
    <ul class="breadcrumbs">
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <NuxtLink
          v-if="index !== breadcrumbs.length - 1"
          :to="breadcrumb.path"
          class="breadcrumbs-item breadcrumbs-link"
        >
          {{ breadcrumb.name }}
        </NuxtLink>
        <span class="breadcrumbs-item" v-else>{{ breadcrumb.name }}</span>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.breadcrumbs {
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 60px;
  li {
    margin-right: 8px;
    display: flex;
    &::after {
      content: "";
      margin-left: 8px;
      margin-top: 8px;
      width: 5px;
      height: 8px;
      background-position: center;
      background-size: 100%;
      background-repeat: no-repeat;
      background-image: url("data:image/svg+xml,%3Csvg width='5' height='8' viewBox='0 0 5 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.8' d='M0 8V0L5 4L0 8Z' fill='%2333374E'/%3E%3C/svg%3E");
    }
    &:last-child::after {
      content: none;
      display: none;
    }
  }
  &-item {
    font-size: 14px;
    line-height: 1.5;
    color: #797b86;
  }
  &-link {
    color: #33374e;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
