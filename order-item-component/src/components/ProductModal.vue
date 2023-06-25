<template>
<div>
    {{ orderProducts }}
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ProductProp from '../types/ProductProp'

export default defineComponent({
    name: 'ProductModal',
    props: {
        orderProducts:{
            required: true,
            type: Object as PropType<ProductProp>
        }
    }

})
</script>
