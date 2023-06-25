<template>
  <div>
    {{ productLine.product.title }} {{ productLine.product.sku }} 
    <form @submit.prevent="updateQuantity(orderRef,productLine.product.sku, productLine.quantity)">
      <label>Quantity</label>
      <input type="number" required :value="quantity" />
    </form>
    <button @click="updateQuantity(orderRef,productLine.product.sku, productLine.quantity)">Click me</button>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent, PropType, inject } from 'vue';
import ProductLine from '../types/ProductLine';

export default defineComponent({
  name: 'ProductContainer',
  props: {
    productLine: {
      required: true,
      type: Object as PropType<ProductLine>,
    },
        orderRef: {
      required: true,
      type: String,
    }
  },
  setup(props) {
    const showForm = ref(false);
    let quantity = computed(() => props.productLine.quantity);
    const updateQuantity = inject('updateQuantity')
    return { quantity, showForm, updateQuantity};
  },
});
</script>
