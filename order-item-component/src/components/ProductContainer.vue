<template>
  <div class="product-container">
    <div class="product-id-info">
      <h4>{{ productLine.product.title }}</h4>
      <span class="article-number">{{ productLine.product.sku }} </span>
    </div>
    <!-- Typescript does not like the type voodoo I had to perform to extract the input value from the submit event.
    It throws this error cause it cant figure out that at runtime the submit event will have the properties/types I cast to it.
    The code works, so here it stays. -->
    <form class="quantity-form" @submit.prevent="submitQuantity">
      <label>Quantity</label>
      <div class="quantity">
        <input
          class="quantity-input"
          type="number"
          required
          min="0"
          :value="quantity"
        />

        <button :disabled="showPopUp" type="submit">
          Save
          <div v-if="showPopUp" class="saved-popup">Saved</div>
        </button>
      </div>
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
    },
  },
  setup(props) {
    const showForm = ref(false);

    let quantity = computed(() => props.productLine.quantity);

    const { updateQuantity } = inject('updateQuantity') as {
      updateQuantity: (orderRef: string, sku: string, quantity: number) => void;
    };

    const showPopUp = ref(false);

    function submitQuantity(
      event: Event & { target: HTMLFormElement & { 0: HTMLInputElement } }
    ) {
      updateQuantity(
        props.orderRef,
        props.productLine.product.sku,
        parseInt(event.target[0].value)
      );
      showPopUp.value = true;
      setTimeout(() => {
        showPopUp.value = false;
      }, 1100);
    }

    return { quantity, showForm, submitQuantity, showPopUp };
  },
});
</script>

<style>
h4 {
  font-size: 16px;
  margin: 0px;
  color: #067f5e;
}
.article-number {
  font-size: 12px;
  color: #04694e;
}
.product-container {
  width: 220px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #87f0d4;
  margin: 3px 20px;
  padding: 3px;
  border-radius: 4px;
  box-shadow: 2px 2px 3px rgb(175, 175, 175);
}

.quantity {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.quantity-form label {
  position: relative;
  left: 6px;
}
.quantity-form {
  display: flex;
  flex-direction: column;
}

.quantity-input {
  border-style: hidden;
  border-radius: 10px;
  width: 50px;
  height: 20px;
  box-shadow: 0px 0px 4px inset #949292;
  text-align: center;
  margin: 0px 5px;
}

@keyframes popup {
  from {
    top: 1px;
    color: #067f5e;
  }
}

.saved-popup {
  position: absolute;
  font-weight: 600;
  top: -20px;
  color: #067f5f00;
  animation-name: popup;
  animation-duration: 1s;
}

@media only screen and (min-width: 600px) {
  .product-container {
    margin: 3px 20px 3px 10px;
  }
}
</style>
