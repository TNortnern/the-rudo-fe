import { combineReducers } from 'redux';
import wrestlerReducer from './wrestlerReducer';
import testReducer from './testReducer';

const allReducers = combineReducers({
    wrestlers: wrestlerReducer,
    test: testReducer,
})

export default allReducers;