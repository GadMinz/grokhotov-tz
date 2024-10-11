import type { ProductCart } from "~/types";

interface CheckoutBody {
  items: ProductCart[];
  installation: boolean;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<CheckoutBody>(event); // Читаем и типизируем тело запроса

  // Здесь можно обработать заказ, сохранить его в базе данных и т.д.
  console.log("Заказ:", body.items, "Установка:", body.installation);

  return { success: true, order: body };
});
