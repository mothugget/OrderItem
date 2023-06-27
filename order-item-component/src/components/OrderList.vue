<template>
  <div class="order-list">
    <form class="search-form">
      <input
        class="search-input"
        placeholder="Search by Order Ref"
        type="text"
        v-model="search"
        maxlength="5"
      />
    </form>
    <li class="order-list-elements" v-for="order in displayedOrders" :key="order.orderRef">
      <OrderItem :order="order" />
      <button class="delete-button" @click="deleteOrder(order)">
        <div class="delete-button-inner"></div>
      </button>
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide, computed } from 'vue';
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
    orderRef: 'MR1Zq',
    address: {
      name: 'John Doe',
      company: 'ABC Company',
      street: '123 Main Street',
      city: 'City1',
      postalCode: '12345',
      country: 'Country1'
    },
    productList: [
      {
        product: {
          sku: 'ZJY1JYB1A1',
          title: 'Bolt',
          category: 'Automotive',
          price: 73.52
        },
        quantity: 1
      }
    ]
  },
  {
    orderRef: 'wt3l5',
    address: {
      name: 'Jane Smith',
      company: 'XYZ Corporation',
      street: '456 Elm Street',
      city: 'City2',
      postalCode: '67890',
      country: 'Country2'
    },
    productList: [
      {
        product: {
          sku: 'ZJY1JYB1A1',
          title: 'Bolt',
          category: 'Automotive',
          price: 73.52
        },
        quantity: 5
      },
      {
        product: {
          sku: '86ZL82ERVQ',
          title: 'Washer',
          category: 'Industry',
          price: 38.09
        },
        quantity: 2
      }
    ]
  },
  {
    orderRef: 'gpn2n',
    address: {
      name: 'John Doe',
      company: 'ABC Company',
      street: '123 Main Street',
      city: 'City1',
      postalCode: '12345',
      country: 'Country1'
    },
    productList: [
      {
        product: {
          sku: 'ZJY1JYB1A1',
          title: 'Bolt',
          category: 'Automotive',
          price: 73.52
        },
        quantity: 2
      },
      {
        product: {
          sku: '9LU38YOJ8A',
          title: 'Piston',
          category: 'Industry',
          price: 81.14
        },
        quantity: 3
      }
    ]
  },
  {
    orderRef: 'i94Dp',
    address: {
      name: 'Jane Smith',
      company: 'XYZ Corporation',
      street: '456 Elm Street',
      city: 'City2',
      postalCode: '67890',
      country: 'Country2'
    },
    productList: [
      {
        product: {
          sku: 'EIQ25ZB9UQ',
          title: 'Nut',
          category: 'Automotive',
          price: 75.36
        },
        quantity: 2
      },
      {
        product: {
          sku: '6EFD0C00DI',
          title: 'Clamp',
          category: 'Nautical',
          price: 68.62
        },
        quantity: 3
      },
      {
        product: {
          sku: 'CMVI6FA5BC',
          title: 'Bearing',
          category: 'Industry',
          price: 38.87
        },
        quantity: 2
      }
    ]
  },
  {
    orderRef: 'IsLCq',
    address: {
      name: 'John Doe',
      company: 'ABC Company',
      street: '123 Main Street',
      city: 'City1',
      postalCode: '12345',
      country: 'Country1'
    },
    productList: [
      {
        product: {
          sku: 'CMVI6FA5BC',
          title: 'Bearing',
          category: 'Industry',
          price: 38.87
        },
        quantity: 3
      }
    ]
  }
]);

    function deleteOrder(order: OrderItemType) {
      const index = ORDER_LIST.value.indexOf(order);
      if (index !== -1) {
        ORDER_LIST.value.splice(index, 1);
      }
    }

    function updateQuantity(orderRef: string, sku: string, quantity: number) {
      const orderIndex = ORDER_LIST.value.findIndex(
        (order) => order.orderRef === orderRef
      );

      let productIndex = ORDER_LIST.value[orderIndex].productList.findIndex(
        (productLine) => productLine.product.sku === sku
      );
      // Add product line to order if it isn't already there
      if (productIndex === -1 && quantity > 0) {
        const productToAdd = PRODUCT_LIST.find(
          (product) => product.sku === sku
        );
        productToAdd &&
          ORDER_LIST.value[orderIndex].productList.unshift({
            quantity: quantity,
            product: productToAdd,
          });
        productIndex = 0;
      } else if (productIndex !== -1) {
        //if quantity 0 then remove the productLine from the order
        if (quantity < 1) {
          ORDER_LIST.value[orderIndex].productList.splice(productIndex, 1);
          //otherwise just update the product line quantity
        } else {
          ORDER_LIST.value[orderIndex].productList[productIndex].quantity =
            quantity;
        }
      }
    }

    const search = ref('');

    provide('updateQuantity', { updateQuantity });
    provide('PRODUCT_LIST', PRODUCT_LIST);

    const displayedOrders = computed(() => {
      const result: OrderItemType[] = [];
      ORDER_LIST.value.forEach((order) => {
        if (order.orderRef.toLowerCase().includes(search.value.toLowerCase())) {
          result.push(order);
        }
      });
      return result;
    });

    return { ORDER_LIST, deleteOrder, displayedOrders, search };
  },
});
</script>

<style>
.order-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-input {
  border: 1px solid #199f7b;
  border-radius: 4px;
  font-size: 16px;
  text-align: center;
  padding: 4px 3px;
}

#search-input::placeholder {
  color: #199f7b;
}

.order-list-elements{
  position: relative;
  margin-bottom: 15px;
}

.delete-button {
  position: absolute;
  top: 24px;
  right:0px;
  z-index: 2;
  width: 20px;
  height: 20px;
  background: #ff7658;
  border-style: hidden;
  border-radius: 50%;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
}

.delete-button-inner {
  flex-shrink: 0;
  height: 14px;
  width: 14px;
  background: white;
  clip-path: polygon(
    20% 0%,
    0% 20%,
    30% 50%,
    0% 80%,
    20% 100%,
    50% 70%,
    80% 100%,
    100% 80%,
    70% 50%,
    100% 20%,
    80% 0%,
    50% 30%
  );
}

@media only screen and (min-width: 600px) {
  .search-form{
    align-self: flex-end;
  }
}
</style>
