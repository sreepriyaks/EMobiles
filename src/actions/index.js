import * as actionTypes from './actionTypes';
import {
    fetchPhones as fetchPhonesApi,
    fetchPhoneById as fetchPhoneByIdApi,
    searchPhones as searchPhonesApi,
    savePhone as savePhoneApi
} from '../api';

export function fetchPhones() {
    return async function (dispatch) {
        dispatch({ type: actionTypes.FETCH_PHONES_START });

        try {
            fetchPhonesApi().then(phones => {
                dispatch({
                    type: actionTypes.FETCH_PHONES_SUCCESS,
                    payload: phones
                });
            })
        } catch (err) {
            dispatch({
                type: actionTypes.FETCH_PHONES_FAILURE,
                payload: err,
                error: true
            });
        }
    }
}

export function fetchPhoneById(id) {
    return async function (dispatch) {
        dispatch({ type: actionTypes.FETCH_PHONE_BY_ID_START });
        try {
            fetchPhoneByIdApi(id).then(phone => {
                dispatch({
                    type: actionTypes.FETCH_PHONE_BY_ID_SUCCESS,
                    payload: phone
                });
            })

        }
        catch (err) {
            dispatch({
                type: actionTypes.FETCH_PHONE_BY_ID_FAILURE,
                payload: err,
                error: true
            });
        }
    }
}

export function searchPhones(keywords) {
    return async function (dispatch) {
        dispatch({ type: actionTypes.SEARCH_PHONE_START });

        try {
            searchPhonesApi(keywords).then(phones => {
                dispatch({
                    type: actionTypes.SEARCH_PHONE_SUCCESS,
                    payload: phones
                });
            })
        }
        catch (err) {
            dispatch({
                type: actionTypes.SEARCH_PHONE_FAILURE,
                payload: err,
                error: true
            });
        }
    }
}

export function savePhone(data) {
    return async function (dispatch) {
        dispatch({ type: actionTypes.SAVE_NEW_PHONE_START });

        try {
            savePhoneApi(data).then(res => {
                dispatch({
                    type: actionTypes.SAVE_NEW_PHONE_SUCCESS,
                    payload: res
                });
            });
        }
        catch (err) {
            dispatch({
                type: actionTypes.SAVE_NEW_PHONE_FAILURE,
                payload: err,
                error: true
            });
        }
    }
}