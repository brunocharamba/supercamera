import { all, takeLatest } from 'redux-saga/effects'

// Types
import { Types as ExampleTypes } from '../ducks/example'
// import { Types as Example2Types } from '../ducks/example2'

// Sagas
import { showExamples, addExamples } from './example'

export default function * rootSaga () {
  yield all([
    // Example
    takeLatest(ExampleTypes.SHOW_EXAMPLE_REQUEST, showExamples),
    takeLatest(ExampleTypes.SHOW_EXAMPLE_REQUEST, addExamples)
  ])
}
