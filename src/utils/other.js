export const createWrapperReducer = (reducerFunction, reducerName) => (state, action) => {
    const { app } = action;
    const isInitializationCall = state === undefined;

    if (app !== reducerName && !isInitializationCall) {
        return state;
    }

    return reducerFunction(state, action);
};
