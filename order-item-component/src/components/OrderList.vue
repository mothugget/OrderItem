<template>
  <div>
    <li v-for="order in ORDER_LIST" :key="order.orderRef">
      <button @click="deleteOrder(order)">X</button>
      <OrderItem :order="order" />
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
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
        orderRef: '2aSWr',
        address: {
          name: 'John Doe',
          company: 'ABC Company',
          street: '123 Main St',
          city: 'New York',
          postalCode: '10001',
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
          {
            product: {
              sku: 'LJ1AUIWQZ6',
              title: 'Cam',
              category: 'Automotive',
              price: 40.34,
            },
            quantity: 5,
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
        orderRef: 'beipG',
        address: {
          name: 'Alice Johnson',
          company: '123 Industries',
          street: '789 Oak St',
          city: 'Chicago',
          postalCode: '60601',
          country: 'USA',
        },
        productList: [
          {
            product: {
              sku: 'CMVI6FA5BC',
              title: 'Bearing',
              category: 'Industry',
              price: 38.87,
            },
            quantity: 5,
          },
          {
            product: {
              sku: 'LJ1AUIWQZ6',
              title: 'Cam',
              category: 'Automotive',
              price: 40.34,
            },
            quantity: 3,
          },
          {
            product: {
              sku: 'CMVI6FA5BC',
              title: 'Bearing',
              category: 'Industry',
              price: 38.87,
            },
            quantity: 1,
          },
        ],
      },
      {
        orderRef: 'bZFPS',
        address: {
          name: 'John Doe',
          company: 'ABC Company',
          street: '123 Main St',
          city: 'New York',
          postalCode: '10001',
          country: 'USA',
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
              sku: '9LU38YOJ8A',
              title: 'Piston',
              category: 'Industry',
              price: 81.14,
            },
            quantity: 4,
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

    return { PRODUCT_LIST, ORDER_LIST, deleteOrder };
  },
});
</script>
