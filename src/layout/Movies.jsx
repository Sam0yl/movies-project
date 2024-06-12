import Movie from "./Movie"

export default function Movies(props) {
    const {movies} = props

    return (
        <div className="movies">
            {movies.map(
                movie => (<Movie key={movie.imdbID} {...movie} />)
            )}
            {/* <ul>
                {movies.map(
                    (movie) => (
                        <li key={movie.imdbID}>
                            <Movie {...movie} />
                        </li>
                    )
                )}
            </ul> */}
        </div>
    )
}