<template>
  <div class="order-item">
    <h3>Order Reference: {{ order.orderRef }}</h3>
    <div class="order-item-container">
      <AddressContainer :address="order.address" />
      <ProductList
        :productList="order.productList"
        :orderRef="order.orderRef"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import AddressContainer from './AddressContainer.vue';
import ProductList from './ProductList.vue';
import OrderItemType from '../types/OrderItemType';

export default defineComponent({
  name: 'OrderItem',
  components: {
    AddressContainer,
    ProductList,
  },
  props: {
    order: {
      required: true,
      type: Object as PropType<OrderItemType>,
    },
  },
});
</script>

<style>
.order-item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  border-style: solid;
  border-radius: 10px;
  border-width: 3px;
  border-color: #ff7658;
  padding: 0px;
  overflow: hidden;
}
</style>
