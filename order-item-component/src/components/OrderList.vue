<template>
  <div id="order-list">
    <form>
      <input
        id="search-input"
        placeholder="Search by Order Ref"
        type="text"
        v-model="search"
        maxlength="5"
      />
    </form>
    <li class="order-list-elements" v-for="order in displayedOrders" :key="order.orderRef">
      <OrderItem class="order-item" :order="order" />
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
    orderRef: 'Wh5R0',
    address: {
      name: 'John Doe',
      company: 'ABC Company',
      street: '123 Main Street',
      city: 'Example City',
      postalCode: '12345',
      country: 'Country'
    },
    productList: [
      {
        product: {
          sku: 'LJ1AUIWQZ6',
          title: 'Cam',
          category: 'Automotive',
          price: 40.34
        },
        quantity: 1
      },
      {
        product: {
          sku: '86ZL82ERVQ',
          title: 'Washer',
          category: 'Industry',
          price: 38.09
        },
        quantity: 1
      }
    ]
  },
  {
    orderRef: 'vA3Gw',
    address: {
      name: 'John Doe',
      company: 'ABC Company',
      street: '123 Main Street',
      city: 'Example City',
      postalCode: '12345',
      country: 'Country'
    },
    productList: [
      {
        product: {
          sku: 'LJ1AUIWQZ6',
          title: 'Cam',
          category: 'Automotive',
          price: 40.34
        },
        quantity: 4
      },
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
          sku: 'LJ1AUIWQZ6',
          title: 'Cam',
          category: 'Automotive',
          price: 40.34
        },
        quantity: 2
      }
    ]
  },
  {
    orderRef: 'G4Zx2',
    address: {
      name: 'John Doe',
      company: 'ABC Company',
      street: '123 Main Street',
      city: 'Example City',
      postalCode: '12345',
      country: 'Country'
    },
    productList: [
      {
        product: {
          sku: 'KDPRURUR2M',
          title: 'Valve',
          category: 'Industry',
          price: 69.95
        },
        quantity: 5
      }
    ]
  },
  {
    orderRef: 'tBMMb',
    address: {
      name: 'John Doe',
      company: 'ABC Company',
      street: '123 Main Street',
      city: 'Example City',
      postalCode: '12345',
      country: 'Country'
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
          sku: 'CMVI6FA5BC',
          title: 'Bearing',
          category: 'Industry',
          price: 38.87
        },
        quantity: 4
      },
      {
        product: {
          sku: 'ZJY1JYB1A1',
          title: 'Bolt',
          category: 'Automotive',
          price: 73.52
        },
        quantity: 3
      }
    ]
  },
  {
    orderRef: '51mTk',
    address: {
      name: 'John Doe',
      company: 'ABC Company',
      street: '123 Main Street',
      city: 'Example City',
      postalCode: '12345',
      country: 'Country'
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
      },
      {
        product: {
          sku: '86ZL82ERVQ',
          title: 'Washer',
          category: 'Industry',
          price: 38.09
        },
        quantity: 4
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
#order-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#search-input {
  border: 1px solid #199f7b;
  border-radius: 4px;
  font-size: 16px;
  text-align: center;
  padding: 2px;
}

#search-input::placeholder {
  color: #199f7b;
}

.order-list-elements{
  position: relative;
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
</style>
