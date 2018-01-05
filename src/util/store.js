import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import reducer from './reducer.js'

export default createStore(reducer, applyMiddleware(promise, thunk))
