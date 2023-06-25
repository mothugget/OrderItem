<template>
  <div>
    {{ productLine.product.title }} {{ productLine.product.sku }} 
    <form @submit.prevent="submitQuantity">
      <label>Quantity</label>
      <input type="number" required min="0" :value="quantity" />
      <button type="submit">Edit</button>
    </form>
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

    const {updateQuantity} = inject('updateQuantity')

    function submitQuantity(e){
      updateQuantity(props.orderRef, props.productLine.product.sku, e.target[0].value)
    }
    return { quantity, showForm, submitQuantity};
  },
});
</script>
