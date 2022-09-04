import MovieCard from './MovieCard'

const Movies = ({movies, displayMessage}) => {
    return (
        <div>
            {
                movies?.length > 0 ? (
                    <div className="container">
                        {
                            movies.map((movie) => (
                                <li key={movie.imdbID}>
                                    <MovieCard movie={movie} />
                                </li>
                            ))
                        }
                    </div>
                ) : (
                    <div className="empty">
                        <h2>{displayMessage}</h2>
                    </div>
                )
            }
        </div>
    )
}

export default Movies;