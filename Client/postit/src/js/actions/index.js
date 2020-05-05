import { SEND_MESSAGE } from '../constants/action-types';
import { ADD_GROUP } from '../constants/action-types';

// export function sendMessage(payload) {
//     return { type: SEND_MESSAGE, payload }
// };

export function sendMessage(payload) {
    return { type: SEND_MESSAGE, payload }
};
export function addGroup(payload) {
    return { type: ADD_GROUP, payload }
};
