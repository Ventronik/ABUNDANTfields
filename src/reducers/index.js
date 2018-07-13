import { combineReducers } from 'redux';

import tansactions from './transactions';
import parcels from './parcels';

const rootReducer = combineReducers({
  transactions,
  parcels
});

export default rootReducer;
