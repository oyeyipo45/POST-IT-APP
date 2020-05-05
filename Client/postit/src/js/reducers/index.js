import {SEND_MESSAGE} from '../constants/action-types';
import {ADD_GROUP} from '../constants/action-types';


const initialMessageState = {
    messages: [
        {
            sender: 'James Maddisson',
            sent_at: '9:20',
            group: 'Ruby',
            text: 'I love the Ruby programming language. It is so elegant and sleek.'
        },
        {
            sender: 'Johny Evans',
            sent_at: '9:23',
            group: 'Ruby',
            text: 'Me too. I love Ruby. Awesome language.'
        },
        {
            sender: 'Ayoze Perez',
            sent_at: '9:25',
            group: 'Ruby',
            text: 'Not really a fan of Ruby. It"s too old. I love the modern Javascript.'
        }
    ],
    groups: [
        {
          id: 1,
          name: "React",
          description: "React class for beginners",
        },
        {
          id: 2,
          name: "Node",
          description: "NodeJS class for beginners",
        },
        {
          id: 3,
          name: "Javascript",
          description: "Javascript class for beginners",
        },
    ]
};

const rootReducer = (state = initialMessageState, action) => {
    if (action.type === SEND_MESSAGE) {
        return Object.assign({}, state, {
            messages: state.messages.concat(action.payload)
        });
    };
    if (action.type === ADD_GROUP) {
        return Object.assign({}, state, {
            groups: state.groups.concat(action.payload)
        });
    };
    return state;
};

export default rootReducer;