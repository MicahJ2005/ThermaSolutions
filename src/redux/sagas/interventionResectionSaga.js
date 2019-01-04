import { takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';


function* interventionResection(action) { 
    console.log(' interventionResection action.payload', action.payload);
    
    try {
        yield call(axios.put, `/interventionResection/${action.payload.userId}`, action.payload);
        // yield put({ type: 'RENDER_ALL_USERS', payload: action.payload.profileUserId } )

    } catch (error) {
        console.log(error);
        alert('Unable to add project');
    }
}


function* interventionSaga() {
  yield takeLatest('POST_INTERVENTION_PAGE', interventionResection);
  
}

export default interventionSaga;