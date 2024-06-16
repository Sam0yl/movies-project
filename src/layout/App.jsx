import { Component } from 'react';
import Movies from './Movies';
import Preloader from './Preloader';
import Search from './Search';

class App extends Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=33602c1b&s=Matrix') // The Api key should be moved to environment variables
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    }

    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true });
        let url = `http://www.omdbapi.com/?apikey=33602c1b&s=${str}`;
        if (type !== 'all') {
            url = `http://www.omdbapi.com/?apikey=33602c1b&s=${str}&type=${type}`;
        }

        fetch(url) // The Api key should be moved to environment variables
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    };

    render() {
        const { movies, loading } = this.state;

        return (
            <main className='container content'>
                <Search searchMovies={this.searchMovies} />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        );
    }
}

// function App() {

//   return (
//     <main className="container content">
//         <Movies />
//     </main>
//   )
// }

export default App;
