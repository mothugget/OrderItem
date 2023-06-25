<template>
  <div>
    {{ productLine.product.title }} {{ productLine.product.sku }}
    <form v-if="showForm">
      <label>Quantity</label>
      <input type="number" required v-model="quantity" />
    </form>
    <span v-else>
       Quantity {{productLine.quantity}} <button @click="toggleForm">edit</button>
    </span>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent, PropType } from 'vue';
import ProductLine from '../types/ProductLine';
import ProductListVue from './ProductList.vue';

export default defineComponent({
  name: 'ProductContainer',
  props: {
    productLine: {
      required: true,
      type: Object as PropType<ProductLine>,
    },
  },
  setup(props) {
    const showForm = ref(false);

    function toggleForm() {
      showForm.value = !showForm.value;
    }
    let quantity = computed(() => props.productLine.quantity);

    return { quantity, showForm, toggleForm };
  },
});
</script>
