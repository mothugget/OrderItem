<template>
  <table>
    <tr>
      <td>Name</td>
      <td>{{ address.name }}</td>
    </tr>
    <tr>
      <td>Company</td>
      <td>{{ address.company }}</td>
    </tr>
    <tr>
      <td>Street</td>
      <td>{{ address.street }}</td>
    </tr>
    <tr>
      <td>City</td>
      <td>{{ address.city }}</td>
    </tr>
    <tr>
      <td>Postal Code</td>
      <td>{{ address.postalCode }}</td>
    </tr>
    <tr>
      <td>Country</td>
      <td>{{ address.country }}</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Address from '../types/Address';

export default defineComponent({
  name: 'AddressContainer',
  props: {
    address: {
      required: true,
      type: Object as PropType<Address>,
    },
  },
});
</script>
