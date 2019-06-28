var statusMap = new Map();
statusMap.set('PENDING', 'В ожидании');
statusMap.set('PROCESSING', 'В процессе');
statusMap.set('DONE', 'Завершен');


export const getRepresentaionStatus = (status) => {
    return statusMap.get(status);
};

