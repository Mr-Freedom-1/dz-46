import { legacy_createStore } from 'redux'

const couterReducer = (state = {coffee: 0, sugar: 0, isLoggedIn: false}, action) => {
    if (action.type === 'incrementCoffee'){
        return {
            ...state,
            coffee: state.coffee + 1
        }
    }
    if (action.type === 'decrementCoffee'){
        return {
            ...state,
            coffee: Math.max(state.coffee - 1, 0)
        }
    }
    if (action.type === 'increase'){
        return {
            ...state,
            coffee: Math.max(state.coffee + action.number, 0)
        }
    }
    if (action.type === 'incrementSugar'){
        return {
            ...state,
            sugar: state.sugar + 1
        }
    }
    if (action.type === 'decrementSugar'){
        return {
            ...state,
            sugar: Math.max(state.sugar - 1, 0)
        }
    }
    if (action.type === 'increaseSugar'){
        return {
            ...state,
            sugar: Math.max(state.sugar + action.number, 0)
        }
    }
    if(action.type === 'logIn'){
        return {
            ...state,
            isLoggedIn: true
        }
    }
    if (action.type === 'logOut'){
        return {
          ...state,
          isLoggedIn: false
        }
    }
    if(action.type === 'clearAll'){
        return {
            coffee: 0,
            sugar: 0,
            isLoggedIn: state.isLoggedIn
        }
    }
    return state
}

const savedStateJSON = localStorage.getItem('state');
const initialState = savedStateJSON ? JSON.parse(savedStateJSON) : {coffee: 0, sugar: 0, isLoggedIn: false};
const store = legacy_createStore(couterReducer, initialState);

export default store;

