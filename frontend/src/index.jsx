import React from 'react'
import ReacDOM from 'react-dom'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './main/reducers'

import Routes from './main/routes'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

const devTools =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// const store = createStore(reducers)
// const store = createStore(reducers, devTools)
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)

ReacDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
    , document.getElementById('app')
)