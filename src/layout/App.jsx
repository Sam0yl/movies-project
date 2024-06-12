import { Component } from "react"
import Movies from "./Movies"

class App extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=33602c1b&s=matrix')
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
  }

  render() {
    const {movies} = this.state

    return (
      <main className="container content">
        {
          movies.length ? (
            <Movies movies={movies} />
          ) : <h5>Loading...</h5>
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
