import { Component } from 'react';
import Movies from './Movies';
import Preloader from './Preloader';
import Search from './Search';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

class App extends Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=Matrix`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    }

    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true });
        let url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}`;
        if (type !== 'all') {
            url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&type=${type}`;
        }

        fetch(url)
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
