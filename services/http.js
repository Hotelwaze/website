import axios from 'axios'

const getContents = (type, args) => axios.get(`${getApiUrl()}/${type}` + queryStringFromObject(args));
const getContent = (type, args) => axios.get(`${getApiUrl()}/${type}` + queryStringFromObject(args));

const sendEmail = (type, args) => axios.post(`${getApiUrl()}/mail/${type}`, args);

const checkPasswordResetLink = (args) => axios.get(`${getProdApiUrl()}/auth/password-reset-link-check` + queryStringFromObject(args));
const resetPassword = (args) => axios.post(`${getProdApiUrl()}/auth/password-reset`, args);

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

const getProdApiUrl = () => process.env.apiUrlProd;

const httpService = {
    getContent,
    getContents,
    sendEmail,
    checkPasswordResetLink,
    resetPassword
}

export default httpService;