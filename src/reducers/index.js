import {combineReducers} from 'redux';
import MemberReducer from './reducer-members';
import ActiveMemberReducer from './reducer-active-member';

const allReducers = combineReducers({
    members: MemberReducer,
    activeMember: ActiveMemberReducer
});


export default allReducers;