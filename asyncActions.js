const redux = require("redux");
const createStore = redux.createStore;
const thunkMiddleware = require('redux-thunk').default;
const applyMiddleware = redux.applyMiddleware;
const axios = require('axios');

const initialState = {
    loading: false,
    users: [],
    error: ''
}
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCESED = 'FETCH_USERS_SUCCESED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED
    }
}
const fetchUsersSucces = (users) => { // users parametresi eklendi
    return {
        type: FETCH_USERS_SUCCESED,
        payload: users
    }
}
const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESED:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state;  
    }
}

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            const users = response.data.map((user) => user.id)
            dispatch(fetchUsersSucces(users))
        }).catch(error => {
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(()=>{ console.log(store.getState())})
store.dispatch(fetchUsers())
