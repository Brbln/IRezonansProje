const redux = require("redux");
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'


function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

function restockedCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}
function restockedIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIcecreams: 20
// }
const initialCakeState = {
    numOfCakes: 10
}
const initilIceCreamState = {
    numOfIceCreams: 20
}

// (previousState,action) =>newState

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state;
    }
}
const iceCreamReducer = (state = initilIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1,
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log("update state", store.getState()))

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockedCake(3))
const actions = bindActionCreators({ orderCake, restockedCake, orderIceCream, restockedIceCream }, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockedCake(3)
actions.orderIceCream()
actions.orderIceCream()
actions.restockedIceCream(2)

unsubscribe()