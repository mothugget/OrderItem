/* eslint-disable */

<template>
  <div>hello</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    type Address = {
      name: string;
      company: string;
      street: string;
      city: string;
      postalCode: string;
      country: string;
    };

    type Product = {
      sku: string;
      title: string;
      category: string;
      price: number;
    };

    type OrderItem = {
      orderRef: string;
      address: Address;
      productList: Product[];
    };

    const ORDER_LIST = ref<OrderItem[]>([
      {
        orderRef: "GNV0F",
        address: {
          name: "Michael Johnson",
          company: "123 Industries",
          street: "789 Oak Avenue",
          city: "Sydney",
          postalCode: "2000",
          country: "Australia",
        },
        productList: [
          {
            sku: "EIQ25ZB9UQ",
            title: "Nut",
            category: "Automotive",
            price: 75.36,
          },
        ],
      },
      {
        orderRef: "6BFQ0",
        address: {
          name: "Jane Smith",
          company: "XYZ Corp",
          street: "456 Elm Street",
          city: "London",
          postalCode: "SW1A 1AA",
          country: "United Kingdom",
        },
        productList: [
          {
            sku: "KDPRURUR2M",
            title: "Valve",
            category: "Industry",
            price: 69.95,
          },
          {
            sku: "LJ1AUIWQZ6",
            title: "Cam",
            category: "Automotive",
            price: 40.34,
          },
          {
            sku: "86ZL82ERVQ",
            title: "Washer",
            category: "Industry",
            price: 38.09,
          },
        ],
      },
      {
        orderRef: "SCFK0",
        address: {
          name: "John Doe",
          company: "ABC Company",
          street: "123 Main Street",
          city: "New York",
          postalCode: "10001",
          country: "United States",
        },
        productList: [
          {
            sku: "9LU38YOJ8A",
            title: "Piston",
            category: "Industry",
            price: 81.14,
          },
        ],
      },
    ]);

    console.log("hello");
  },
});
</script>
