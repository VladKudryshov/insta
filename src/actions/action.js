export const addProductToBasket = (id, quantity) => ({
    type: 'ADD_PRODUCT_TO_BASKET',
    id: id,
    quantity: quantity
})

export const changeQuantityProductInBasket = (id, quantity) => ({
    type: 'CHANGE_QUANTITY_PRODUCT_IN_BASKET',
    id: id,
    quantity: quantity
})

