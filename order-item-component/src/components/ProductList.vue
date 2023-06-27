<template>
  <div class="product-list">
    <li v-for="productLine in productList" :key="productLine.product.sku">
      <ProductContainer :productLine="productLine" :orderRef="orderRef" />
    </li>
    <button class="add-button" @click="launchProductModal">
      Add product to order
    </button>
    <ProductModalVue
      @close="launchProductModal"
      v-if="showProductModal"
      :orderProducts="orderProducts"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, computed } from 'vue';
import ProductContainer from './ProductContainer.vue';
import ProductModalVue from './ProductModal.vue';
import ProductLine from '../types/ProductLine';
import ProductProp from '../types/ProductProp';

export default defineComponent({
  name: 'ProductList',
  components: {
    ProductContainer,
    ProductModalVue,
  },
  props: {
    productList: {
      required: true,
      type: Object as PropType<ProductLine[]>,
    },
    orderRef: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const orderProducts = computed(() => {
      const productQuantities = [];
      for (let productLine of props.productList) {
        productQuantities.push({
          sku: productLine.product.sku,
          quantity: productLine.quantity,
        });
      }
      const orderProducts: ProductProp = {
        orderRef: props.orderRef,
        products: productQuantities,
      };
      return orderProducts;
    });

    function launchProductModal() {
      showProductModal.value = !showProductModal.value;
    }

    const showProductModal = ref(false);
    return { orderProducts, showProductModal, launchProductModal };
  },
});
</script>

<style>
.product-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.add-button {
  margin-top: 3px;
  margin-bottom: 5px;
}

@media only screen and (min-width: 600px) {
  .product-list {
    margin-top: 13px;
    align-self: flex-start;
  }
}
</style>
