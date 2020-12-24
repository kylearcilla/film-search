export default (state, action) => {

    // use this for Global State
    // watchlist: [array of watchlist]
    // watched: [array of watched]
    // CRUD on those two
    switch (action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist],  // new, then old
            };
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (movie) => movie.id !== action.payload
                ),
            };
        case "ADD_MOVIE_TO_WATCHED":
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (movie) => movie.id !== action.payload.id
                ),
                watched: [action.payload, ...state.watched],
            };
        case "MOVE_TO_WATCHLIST":
            return {
                ...state,
                watched: state.watched.filter(
                    (movie) => movie.id !== action.payload.id
                ),
                watchlist: [action.payload, ...state.watchlist],
            };
        case "REMOVE_FROM_WATCHED":
            return {
                ...state,
                watched: state.watched.filter((movie) => movie.id !== action.payload),
            };
        default:
            return state;
    }
};