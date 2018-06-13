import phones from './mockPhones';
import { extractFormData } from '../helpers';

export async function fetchPhones() {
    return new Promise((resolve, reject) => {
        resolve(phones);
    });
}

export async function fetchPhoneById(id) {
    return new Promise((resolve, reject) => {
        const phone = phones.find(phone => phone.id === id);
        resolve(phone);
    });
}

export async function searchPhones(keywords) {
    return new Promise((resolve, reject) => {
        if (keywords) {
            keywords = keywords.toLowerCase();

            const phonesList = phones.filter(phone => phone.name.toLowerCase().indexOf(keywords) !== -1)
            resolve(phonesList);
        }

        resolve(phones);
    });
}

export async function savePhone(data) {
    return new Promise((resolve, reject) => {
        extractFormData(data)
        .then(result => {
            result.id = (phones.length + 1).toString();
            phones.push(result);
            return resolve(phones);
        });
    });
}