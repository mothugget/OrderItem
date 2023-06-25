   import Address from './Address'
   import Product from './Product'
   
   type OrderItemType = {
      orderRef: string;
      address: Address;
      productList: Product[];
    };

    export default OrderItemType