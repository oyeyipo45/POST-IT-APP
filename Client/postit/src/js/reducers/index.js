import SEND_MESSAGE from '../constants/action-types';


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
            name: 'Ruby',
            description: 'Ruby programming language'
        },
        {
            name: 'Java',
            description: 'Java programming language'
        }
    ]
};

const rootReducer = (state = initialMessageState, action) => {
    if (action.type === SEND_MESSAGE) {
        console.log('Message Sent');
        return Object.assign({}, state, {
            messages: state.messages.concat(action.payload)
        });
    };

    return state;
};

export default rootReducer;