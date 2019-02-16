import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Import Reducers
import authReducer from './reducers/auth';
import supportReducer from './reducers/support';

const rootReducer = combineReducers({
    auth: authReducer,
    support: supportReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;