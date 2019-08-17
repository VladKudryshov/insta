const statusMap = new Map();
statusMap.set('PENDING', 'В ожидании');
statusMap.set('PROCESSING', 'В процессе');
statusMap.set('DONE', 'Завершен');


export const getRepresentationStatus = (status) => {
    return statusMap.get(status);
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