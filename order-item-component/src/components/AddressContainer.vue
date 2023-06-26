<template>
  <table class="adress-container">
    <tr>
      <td class="table-label">Name</td>
      <td>{{ address.name }}</td>
    </tr>
    <tr>
      <td class="table-label">Company</td>
      <td>{{ address.company }}</td>
    </tr>
    <tr>
      <td class="table-label">Street</td>
      <td>{{ address.street }}</td>
    </tr>
    <tr>
      <td class="table-label">City</td>
      <td>{{ address.city }}</td>
    </tr>
    <tr>
      <td class="table-label">Postal Code</td>
      <td>{{ address.postalCode }}</td>
    </tr>
    <tr>
      <td class="table-label">Country</td>
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

<style>
.adress-container {
  border-bottom: 2px solid;
  border-color: #ff7658;
  width:100%;
  border-radius: 0px 0px 10px 10px;
  padding: 3px;
}

tr {
  line-height: 14px;
}

.table-label {
  text-align: right;
  color: #199f7b;
  font-weight: 600;
}
</style>
