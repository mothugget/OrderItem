<template>
  <div>
    <h3>Order Reference: {{ order.orderRef }}</h3>
    <AddressContainer :address="order.address"/>
    <ProductList :productList="order.productList" :orderRef="order.orderRef"/>
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
    ProductList
  },
  props: {
    order: {
      required: true,
      type: Object as PropType<OrderItemType>,
    },
  },
});
</script>
