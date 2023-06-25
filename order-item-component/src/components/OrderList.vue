<template>
  <div>
    <li v-for="order in ORDER_LIST" :key="order.orderRef">
      <button @click="deleteOrder(order)">X</button>
      <OrderItem :order="order" />
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from 'vue';
import OrderItem from './OrderItem.vue';
import OrderItemType from '../types/OrderItemType';
import Product from '../types/Product';

export default defineComponent({
  name: 'OrderList',
  components: {
    OrderItem,
  },
  setup() {
    const PRODUCT_LIST: Product[] = [
      {
        sku: '86ZL82ERVQ',
        title: 'Washer',
        category: 'Industry',
        price: 38.09,
      },
      {
        sku: '9LU38YOJ8A',
        title: 'Piston',
        category: 'Industry',
        price: 81.14,
      },
      {
        sku: 'LJ1AUIWQZ6',
        title: 'Cam',
        category: 'Automotive',
        price: 40.34,
      },
      {
        sku: '6EFD0C00DI',
        title: 'Clamp',
        category: 'Nautical',
        price: 68.62,
      },
      {
        sku: 'ZJY1JYB1A1',
        title: 'Bolt',
        category: 'Automotive',
        price: 73.52,
      },
      {
        sku: 'KDPRURUR2M',
        title: 'Valve',
        category: 'Industry',
        price: 69.95,
      },
      {
        sku: 'EIQ25ZB9UQ',
        title: 'Nut',
        category: 'Automotive',
        price: 75.36,
      },
      {
        sku: 'CMVI6FA5BC',
        title: 'Bearing',
        category: 'Industry',
        price: 38.87,
      },
    ];

    const ORDER_LIST = ref<OrderItemType[]>([
      {
        orderRef: '9Ktym',
        address: {
          name: 'Emma Davis',
          company: 'ABC Company',
          street: '10 Pine Ave',
          city: 'San Francisco',
          postalCode: '60601',
          country: 'UK',
        },
        productList: [
          {
            product: {
              sku: '9LU38YOJ8A',
              title: 'Piston',
              category: 'Industry',
              price: 81.14,
            },
            quantity: 5,
          },
          {
            product: {
              sku: 'EIQ25ZB9UQ',
              title: 'Nut',
              category: 'Automotive',
              price: 75.36,
            },
            quantity: 3,
          },
        ],
      },
      {
        orderRef: 'ui8wi',
        address: {
          name: 'Emma Davis',
          company: 'XYZ Corporation',
          street: '789 Oak St',
          city: 'Chicago',
          postalCode: '90001',
          country: 'UK',
        },
        productList: [
          {
            product: {
              sku: 'EIQ25ZB9UQ',
              title: 'Nut',
              category: 'Automotive',
              price: 75.36,
            },
            quantity: 1,
          },
        ],
      },
      {
        orderRef: 'rrFz4',
        address: {
          name: 'Emma Davis',
          company: 'ABC Company',
          street: '789 Oak St',
          city: 'San Francisco',
          postalCode: '10001',
          country: 'USA',
        },
        productList: [
          {
            product: {
              sku: 'ZJY1JYB1A1',
              title: 'Bolt',
              category: 'Automotive',
              price: 73.52,
            },
            quantity: 4,
          },
          {
            product: {
              sku: 'KDPRURUR2M',
              title: 'Valve',
              category: 'Industry',
              price: 69.95,
            },
            quantity: 3,
          },
        ],
      },
      {
        orderRef: '0U8G0',
        address: {
          name: 'John Doe',
          company: 'XYZ Corporation',
          street: '789 Oak St',
          city: 'Los Angeles',
          postalCode: '60601',
          country: 'USA',
        },
        productList: [
          {
            product: {
              sku: '6EFD0C00DI',
              title: 'Clamp',
              category: 'Nautical',
              price: 68.62,
            },
            quantity: 1,
          },
        ],
      },
      {
        orderRef: 'rjgGG',
        address: {
          name: 'Emma Davis',
          company: 'Smith Enterprises',
          street: '123 Main St',
          city: 'Los Angeles',
          postalCode: '60601',
          country: 'Canada',
        },
        productList: [
          {
            product: {
              sku: '86ZL82ERVQ',
              title: 'Washer',
              category: 'Industry',
              price: 38.09,
            },
            quantity: 4,
          },
        ],
      },
      {
        orderRef: '5u9lZ',
        address: {
          name: 'John Doe',
          company: 'Smith Enterprises',
          street: '789 Oak St',
          city: 'San Francisco',
          postalCode: '10001',
          country: 'UK',
        },
        productList: [
          {
            product: {
              sku: 'ZJY1JYB1A1',
              title: 'Bolt',
              category: 'Automotive',
              price: 73.52,
            },
            quantity: 3,
          },
          {
            product: {
              sku: 'LJ1AUIWQZ6',
              title: 'Cam',
              category: 'Automotive',
              price: 40.34,
            },
            quantity: 1,
          },
          {
            product: {
              sku: '9LU38YOJ8A',
              title: 'Piston',
              category: 'Industry',
              price: 81.14,
            },
            quantity: 2,
          },
        ],
      },
      {
        orderRef: 'i3efS',
        address: {
          name: 'Emma Davis',
          company: 'ABC Company',
          street: '456 Elm St',
          city: 'Chicago',
          postalCode: '94101',
          country: 'UK',
        },
        productList: [
          {
            product: {
              sku: 'KDPRURUR2M',
              title: 'Valve',
              category: 'Industry',
              price: 69.95,
            },
            quantity: 3,
          },
          {
            product: {
              sku: '86ZL82ERVQ',
              title: 'Washer',
              category: 'Industry',
              price: 38.09,
            },
            quantity: 2,
          },
        ],
      },
      {
        orderRef: 'TGiXu',
        address: {
          name: 'Emma Davis',
          company: 'Smith Enterprises',
          street: '789 Oak St',
          city: 'New York',
          postalCode: '90001',
          country: 'USA',
        },
        productList: [
          {
            product: {
              sku: 'ZJY1JYB1A1',
              title: 'Bolt',
              category: 'Automotive',
              price: 73.52,
            },
            quantity: 3,
          },
          {
            product: {
              sku: 'EIQ25ZB9UQ',
              title: 'Nut',
              category: 'Automotive',
              price: 75.36,
            },
            quantity: 3,
          },
        ],
      },
    ]);

    function deleteOrder(order: OrderItemType) {
      const index = ORDER_LIST.value.indexOf(order);
      if (index !== -1) {
        ORDER_LIST.value.splice(index, 1);
      }
    }

    function updateQuantity(orderRef:string, sku:string, quantity:number) {
      const orderIndex = ORDER_LIST.value.findIndex(order => order.orderRef === orderRef)
      const productIndex = ORDER_LIST.value[orderIndex].productList.findIndex(productLine => productLine.product.sku === sku)
      console.log(ORDER_LIST.value[orderIndex].productList[productIndex].product)
    }

    provide('updateQuantity', updateQuantity);

    return { PRODUCT_LIST, ORDER_LIST, deleteOrder };
  },
});
</script>
