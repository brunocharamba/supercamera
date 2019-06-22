import { call, put } from 'redux-saga/effects'

import api from '../../services/api'

import { Creators as ExampleActions } from '../ducks/example'

export function * showExamples (action) {
  try {
    const { data } = yield call(api.get, `/example`)

    yield put(ExampleActions.showSuccess(data))
  } catch (e) {
    console.tron.log('error', e)
    yield put(ExampleActions.showFailure())
  }
}

export function * addExamples (action) {
  try {
    const { data } = yield call(api.get, `/example`)

    yield put(ExampleActions.showSuccess(data))
  } catch (e) {
    console.tron.log('error', e)
    yield put(ExampleActions.showFailure())
  }
}
