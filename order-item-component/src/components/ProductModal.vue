<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ProductProp from '../types/ProductProp'

export default defineComponent({
    name: ProductModal,
    props: {
        OrderProducts:{
            required: true;
            type: Object as PropType<ProductProp>
        }
    }
    setup() {
        
    },
})
</script>
