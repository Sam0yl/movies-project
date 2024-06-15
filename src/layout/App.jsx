import { Component } from "react"
import Movies from "./Movies"
import Preloader from "./Preloader"
import Search from "./Search"

class App extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=33602c1b&s=Matrix') // The Api key should be moved to environment variables
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
  }

  searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=33602c1b&s=${str}`) // The Api key should be moved to environment variables
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
  }

  render() {
    const {movies} = this.state

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {
          movies.length ? (
            <Movies movies={movies} />
          ) : <Preloader />
        }
      </main>
    )
  }
}

// function App() {

//   return (
//     <main className="container content">
//         <Movies />
//     </main>
//   )
// }

export default App
