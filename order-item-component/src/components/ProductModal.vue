<template>
  <div class="product-modal">
    <h3>Order: {{ orderProducts.orderRef }}</h3>
    <button class="delete-button" @click="closeModal">
      <div class="delete-button-inner"></div>
    </button>
    <div class="order-item-container">
      <li
        class="modal-list"
        v-for="productLine in productsWithQuantities"
        :key="productLine.product.sku"
      >
        <ProductContainer
          :productLine="productLine"
          :orderRef="orderProducts.orderRef"
        />
      </li>
    </div>
    <button class="modal-backdrop-button" @click="closeModal"></button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, inject, computed } from 'vue';
import ProductContainer from './ProductContainer.vue';
import ProductProp from '../types/ProductProp';
import ProductLine from '../types/ProductLine';
import Product from '../types/Product';

export default defineComponent({
  name: 'ProductModal',
  props: {
    orderProducts: {
      required: true,
      type: Object as PropType<ProductProp>,
    },
  },
  components: {
    ProductContainer,
  },
  setup(props, { emit }) {
    const productList = inject<Product[]>('PRODUCT_LIST');

    function closeModal() {
      emit('close');
    }

    const productsWithQuantities = computed(() => {
      return productList?.map((product) => {
        let quantity = 0;
        for (let knownProduct of props.orderProducts.products) {
          if (product.sku === knownProduct.sku)
            quantity = knownProduct.quantity;
        }
        return { quantity: quantity, product: product } as ProductLine;
      });
    });
    return { productsWithQuantities, closeModal };
  },
});
</script>

<style>
.product-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 5;
}

.modal-backdrop-button {
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background: rgba(129, 129, 129, 0.11);
  backdrop-filter: blur(2vw);
}
</style>

<style scoped>
.order-item-container {
  position: relative;
  z-index: 6;
  background: #fafffe;
  padding: 15px 0px;
}

h3 {
  position: relative;
  z-index: 6;
  color: black;
}

.delete-button {
  top: 24px;
  right: 0px;
  z-index: 7;
}

.delete-button-inner {
  clip-path: polygon(
    20% 0%,
    0% 20%,
    30% 50%,
    0% 80%,
    20% 100%,
    50% 70%,
    80% 100%,
    100% 80%,
    70% 50%,
    100% 20%,
    80% 0%,
    50% 30%
  );
}
</style>
