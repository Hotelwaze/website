import axios from 'axios'

const getContent = (type, args) => axios.get(`${getApiUrl()}/${type}` + queryStringFromObject(args));

const queryStringFromObject = (object) => {
    const qry = [];
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const key in object) {
        const item = object[key];
        if (Array.isArray(item)) {
            item.forEach(value => {
                qry.push(`${key  }[]=${  value}`);
            });
        } else {
            qry.push(`${key  }=${  item}`);
        }
    }
    if (qry.length === 0) {
        return '';
    }
    return `?${  qry.join('&')}`;
}

const getApiUrl = () => process.env.apiUrl;

const httpService = {
    getContent
}

export default httpService;