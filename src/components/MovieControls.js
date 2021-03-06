import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"

export const MovieControls = ({ movie, type }) => {

    // the actions are all here, given as context
    const {
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatched,
    }
        = useContext(GlobalContext);

    return (
        <div className="inner-card-controls">
            {type === 'watchlist' && (
                <>
                    <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
                        <i class="fas fa-heart">
                        </i>
                    </button>

                    <button className="ctrl-btn"
                        onClick={() => removeMovieFromWatchlist(movie.id)}
                    >
                        <i className="fa-fw fa fa-times">
                        </i>
                    </button>
                </>
            )}
            {type === 'watched' &&
                (
                    <>
                        <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
                            <i class="fas fa-heart-broken"></i>
                        </button>

                        <button className="ctrl-btn" onClick={() => removeFromWatched(movie.id)}>
                            <i className="fa-fw fa fa-times">
                            </i>
                        </button>

                    </>

                )
            }
        </div>
    )
}
