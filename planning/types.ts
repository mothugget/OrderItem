type Address = {
    name: string,
    company: string,
    street: string,
    city: string,
    postalCode: string,
    country: string,
}

type Product = {
    sku: string,
    title: string,
    category: string,
    price: number
}

type OrderItem = {
    orderRef: string,
    adress: Address,
    productList: Product[]
}