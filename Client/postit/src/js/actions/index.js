import SEND_MESSAGE from '../constants/action-types';

export function sendMessage(payload) {
    return { type: SEND_MESSAGE, payload }
};