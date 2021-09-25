import {LIST_GAME,ADD_GAME,ADD_WISHLIST,IS_ERROR,IS_LOADING, DETAIL_GAME} from "./actionType"
const initialState = {
    games:[],
    game:{},
    wishlists: [],
    isLoading: false,
    isError: null
}

export default function reducer(state = initialState, action) {
    switch (action.type){
        case LIST_GAME:
            const listGame = {
                ...state, games:action.payload
            }
            return listGame
        case DETAIL_GAME:
            const detailGame = {
                ...state, game:action.payload
            }
            return detailGame
        case ADD_GAME:
            const newGame = {
                ...state, games:state.games.concat(action.payload)
            }
            return newGame
        case ADD_WISHLIST:
            const newWishlist = {
                ...state, wishlists:state.wishlists.concat(action.payload)
            }
            return newWishlist
        case IS_LOADING:
            const newLoading = {
                ...state, isLoading:action.payload
            }
            return newLoading
        case IS_ERROR:
            const newError = {
                ...state, isError:action.payload
            }
            return newError
        default:
            console.log("not action");
    }
    return state
}