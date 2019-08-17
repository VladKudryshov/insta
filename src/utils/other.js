export const createWrapperReducer = (reducerFunction, reducerName) => (state, action) => {
    const { app } = action;
    const isInitializationCall = state === undefined;

    if (app !== reducerName && !isInitializationCall) {
        return state;
    }

    return reducerFunction(state, action);
};

export const getFormatedPrice = (price) => {
    return price.toFixed(2)
}

export const getPriceWithDiscount = (obj) => {
    return (obj.price / 100 * (100 - obj.discount)).toFixed(2)
}


export const getResponse = response => response.data;
