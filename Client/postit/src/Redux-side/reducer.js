import {combineReducers} from 'redux';
import { groups } from '../data/group';
// import { messages } from '../data/messages';


//this is a reducer for adding adding group to the group in the data base

// const addgroupReducer = (groupState = groups, action) => {
//   if (action.type === 'ADD_GROUP') {
//     return [{...groupState, id: ++action.payload.id, description: action.payload.description } ]
//   }
//   return groupState
// }



export default combineReducers({
  groups: groups,
});