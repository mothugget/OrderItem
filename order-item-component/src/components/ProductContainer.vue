<template>
  <div>
    {{ productLine.product.title }} {{ productLine.product.sku }} 
    <form >
      <label>Quantity</label>
      <input type="number" required v-model="quantity" />
    </form>

  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent, PropType } from 'vue';
import ProductLine from '../types/ProductLine';
import OrderItemType from '../types/OrderItemType';

export default defineComponent({
  name: 'ProductContainer',
  props: {
    productLine: {
      required: true,
      type: Object as PropType<ProductLine>,
    },
        order: {
      required: true,
      type: Object as PropType<OrderItemType>,
    }
  },
  setup(props) {
    const showForm = ref(false);


    let quantity = computed(() => props.productLine.quantity);

    return { quantity, showForm };
  },
});
</script>
