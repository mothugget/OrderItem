<template>
  <div>
    {{ productLine.product.title }} {{ productLine.product.sku }} 
    <!-- Typescript does not like the type voodoo I had to perform to extract the input value from the submit event.
    It throws this error cause it cant figure out that at runtime the event will have the types I cast to it.
    The code works, so here it stays. -->
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

     
    const {updateQuantity} = inject('updateQuantity') as {updateQuantity:(orderRef: string, sku: string, quantity: number)=>void}
  
    function submitQuantity(event:Event & {target:HTMLFormElement & {0:HTMLInputElement}} ){
     updateQuantity(props.orderRef, props.productLine.product.sku, parseInt(event.target[0].value))
    }
    return { quantity, showForm, submitQuantity};
  },
});
</script>
