import { all } from 'redux-saga/effects';
import sampleSaga from './sample.saga';
import displaySaga from './displaySaga'

export default function* rootSaga() {
  yield all([sampleSaga(), displaySaga()]);

}


