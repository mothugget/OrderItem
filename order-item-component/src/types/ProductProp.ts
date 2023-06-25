type ProductQuantities={
        sku:string,
        quantity: number
    }

type ProductProp= {
    orderRef: string,
    products: ProductQuantities[]
}

export default ProductProp