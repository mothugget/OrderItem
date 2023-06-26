<template>
  <div>
    <li v-for="productLine in productList" :key="productLine.product.sku">
      <ProductContainer :productLine="productLine"  :orderRef="orderRef" />
    </li>
<button @click="launchProductModal">+</button>
    <ProductModalVue v-if="showProductModal" :orderProducts="orderProducts"/>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref, PropType, computed } from 'vue';
import ProductContainer from './ProductContainer.vue';
import ProductModalVue from './ProductModal.vue';
import ProductLine from '../types/ProductLine';
import ProductProp from '../types/ProductProp'


export default defineComponent({
  name: 'ProductList',
  components: {
    ProductContainer,
    ProductModalVue
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
  setup(props){
    const orderProducts = computed(()=>{
      const productQuantities = []
      for(let productLine of props.productList ){
        productQuantities.push({
          sku:productLine.product.sku,
          quantity:productLine.quantity
        })
      }
      const orderProducts:ProductProp = {
        orderRef:props.orderRef,
        products: productQuantities
      }
      return orderProducts
    })

    function launchProductModal(){
      showProductModal.value=!showProductModal.value
    }

    const showProductModal = ref(false);
    return {orderProducts, showProductModal, launchProductModal}
  }
});
</script>
