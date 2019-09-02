const statusMap = new Map();
statusMap.set('PENDING', {
    representation: 'В ожидании',
    step: 1
});
statusMap.set('PROCESSING', {
    representation: 'В работе',
    step: 2
});
statusMap.set('CANCELED', {
    representation: 'Отменен',
    step: 0
});
statusMap.set('DELIVERY', {
    representation: 'Доставка',
    step: 3
});
statusMap.set('DONE', {
    representation: 'Готов',
    step: 4
});


export const getRepresentationStatus = (status) => {
    if (status) {
        let newVar = statusMap.get(status);
        const {representation} = newVar;
        return representation;
    }
    return status;
};

export const getStepStatus = (status) => {
    if (status) {
        let newVar = statusMap.get(status);
        const {step} = newVar;
        return step;
    }
    return status;
};


const categoryMapping = new Map();
categoryMapping.set('', 'Все');
categoryMapping.set('Vegetable', 'Овощи');
categoryMapping.set('Greens', 'Зелень');
categoryMapping.set('Fruits', 'Фрукты');
categoryMapping.set('Berries', 'Ягоды');
categoryMapping.set('Seedlings', 'Рассада');


export const getRepresentationCategory = (status) => {
    return categoryMapping.get(status);
};