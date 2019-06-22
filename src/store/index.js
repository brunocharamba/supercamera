import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './ducks'
import sagas from './sagas'

const middlewares = []
const sagaMiddleware = createSagaMiddleware()
const tronMiddleware = console.tron.createEnhancer

middlewares.push(sagaMiddleware)
let Store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    tronMiddleware()
  )
)

sagaMiddleware.run(sagas)

export default Store
