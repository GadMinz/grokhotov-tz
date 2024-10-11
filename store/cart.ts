import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { ProductCart } from "~/types";

export const useCartStore = defineStore("cart", () => {
  const items = ref<ProductCart[]>([
    {
      id: 1,
      name: "Вытяжное устройство G2H",
      price: 12644,
      quantity: 4,
      article: "G2H1065",
      description:
        "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
      link: "#",
      photo: "/img/products/1.png",
    },
    {
      id: 2,
      name: "Вытяжное устройство BXC",
      price: 12644,
      quantity: 8,
      article: "G2H1065",
      description:
        "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
      link: "#",
      photo: "/img/products/2.png",
    },
    {
      id: 3,
      name: "Вытяжное устройство GHN",
      price: 12644,
      quantity: 1,
      article: "G2H1065",
      description:
        "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
      link: "#",
      photo: "/img/products/3.png",
    },
  ]);

  const installation = ref(false);

  const totalQuantity = computed(() =>
    items.value.reduce((acc, item) => acc + item.quantity, 0),
  );

  const totalPrice = computed(() =>
    items.value.reduce((acc, item) => acc + item.price * item.quantity, 0),
  );

  // Actions
  function incrementQuantity(id: number) {
    const item = items.value.find((item: ProductCart) => item.id === id);
    if (item) item.quantity++;
  }

  function decrementQuantity(id: number) {
    const item = items.value.find((item: ProductCart) => item.id === id);
    if (item && item.quantity > 1) item.quantity--;
  }

  function removeItem(id: number) {
    items.value = items.value.filter((item: ProductCart) => item.id !== id);
  }

  function clearCart() {
    items.value.length = 0;
  }
  return {
    items,
    installation,
    totalQuantity,
    totalPrice,
    incrementQuantity,
    decrementQuantity,
    removeItem,
    clearCart,
  };
});
