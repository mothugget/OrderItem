   import Address from './Address'
   import ProductLine from './ProductLine'
   
   type OrderItemType = {
      orderRef: string;
      address: Address;
      productList: ProductLine[];
    };

    export default OrderItemType