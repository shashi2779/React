import React, { Component } from 'react'
import { movies } from './getMovies'

export class Favourites extends Component {
    constructor() {
        super();
        this.state = {
            genres: [],
            currgenre: 'All Genres',
            movies: [],
            currText: '',
            limit: 5,
            currPage: 1
        }
    }

    componentDidMount() {
        let data = JSON.parse(localStorage.getItem('movie-arr') || '[]')

        let genreids = {
            28: "Action",
            12: "Adventure",
            16: "Animation",
            35: "Comedy",
            80: "Crime",
            99: "Documentary",
            18: "Drama",
            10751: "Family",
            14: "Fantasy",
            36: "History",
            27: "Horror",
            10402: "Music",
            9648: "Mystery",
            10749: "Romance",
            878: "Sci-Fi",
            10770: "TV",
            53: "Thriller",
            10752: "War",
            37: "Western",
        };

        let tempArr = []

        data.map((movieObj) => {
            if (!tempArr.includes(genreids[movieObj.genre_ids[0]])) {
                tempArr.push(genreids[movieObj.genre_ids[0]])
            }
        })

        tempArr.unshift('All Genres')

        this.setState({
            movies: [...data],
            genres: [...tempArr]
        })

    }

    handleGenereChange = (genre) => {
        this.setState({
            currgenre: genre
        })

    }

    sortPopularityDesc = () => {
        let temp = this.state.movies

        temp.sort(function (objA, objB) {
            return objB.popularity - objA.popularity
        })

        this.setState({
            movies: [...temp]
        })

    }

    sortPopularityInc = () => {
        let temp = this.state.movies

        temp.sort(function (objA, objB) {
            return objA.popularity - objB.popularity
        })

        this.setState({
            movies: [...temp]
        })

    }


    sortRatingInc = () => {
        let temp = this.state.movies

        temp.sort(function (objA, objB) {
            return objA.vote_average - objB.vote_average
        })

        this.setState({
            movies: [...temp]
        })

    }

    sortRatingDesc = () => {
        let temp = this.state.movies

        temp.sort(function (objA, objB) {
            return objB.vote_average - objA.vote_average
        })

        this.setState({
            movies: [...temp]
        })

    }


    handlePageChange = (page) => {
        this.setState({
            currPage: page
        })
    }

    handleDelete = (id) => {
        let newarr = [];
        newarr = this.state.movies.filter((movieObj) => movieObj.id != id)
        this.setState({
            movies: [...newarr]
        })
        localStorage.setItem('movie-arr', JSON.stringify(newarr))
    }

    render() {


        // let moviesArr = movies.results
        // console.log(moviesArr)
        let genreids = {
            28: "Action",
            12: "Adventure",
            16: "Animation",
            35: "Comedy",
            80: "Crime",
            99: "Documentary",
            18: "Drama",
            10751: "Family",
            14: "Fantasy",
            36: "History",
            27: "Horror",
            10402: "Music",
            9648: "Mystery",
            10749: "Romance",
            878: "Sci-Fi",
            10770: "TV",
            53: "Thriller",
            10752: "War",
            37: "Western",
        };

        let filterArr = []

        if (this.state.currText === '') {
            filterArr = this.state.movies
        }

        else {
            filterArr = this.state.movies.filter((movieObj) => {
                let title = movieObj.original_title.toLowerCase();
                return title.includes(this.state.currText.toLowerCase().trim())
            })
        }


        if (this.state.currgenre !== 'All Genres') {
            filterArr = this.state.movies.filter((movieObj) => genreids[movieObj.genre_ids[0]] == this.state.currgenre)
        }


        let pages = Math.ceil(filterArr.length / this.state.limit);
        let pagesarr = [];
        for (let i = 1; i <= pages; i++) {
            pagesarr.push(i);
        }
        let si = (this.state.currPage - 1) * this.state.limit;
        let ei = si + this.state.limit;
        filterArr = filterArr.slice(si, ei);


        return (

            <div className="main">
                <div className="row">
                    <div class="col-lg-3 col-sm-12">
                        <ul class="list-group genre-selector" onClick={this.handleList}>
                            {
                                this.state.genres.map((genre) => (

                                    this.state.currgenre == genre ?
                                        <li style={{ background: '#3f51b5', color: 'white', fontWeight: 'bold' }} class="list-group-item">{genre}</li> :
                                        <li style={{ color: '#3f51b5' }} class="list-group-item" onClick={() => this.handleGenereChange(genre)}>{genre}</li>
                                ))
                            }



                        </ul>
                    </div>
                    <div className="col-lg-9 col-sm-12 favourites-table">
                        <div className='row'>
                            <input
                                placeholder="Search"
                                type="text"
                                className="input-group-text col"
                                value={this.state.currText} onChange={(e) => this.setState({ currText: e.target.value })}

                            />
                            <input type={'number'} placeholder="row count" className='input-group-text col' value={this.state.limit} onChange={(e) => this.setState({ limit: e.target.value })} />
                        </div>

                        <div className='row'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th scope="col">Title</th>
                                        <th scope="col"><div className='table-genre'>Genre</div></th>
                                        <th scope="col" ><div className='table-popularity'><i class="fa-solid fa-sort-up" onClick={this.sortPopularityDesc}></i>Popularity<i class="fa-solid fa-sort-down" onClick={this.sortPopularityInc}></i></div></th>
                                        <th scope="col"><div className='table-rating'><i class="fa-solid fa-sort-up" onClick={this.sortRatingDesc}></i>Ratings<i class="fa-solid fa-sort-down" onClick={this.sortRatingInc}></i></div></th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filterArr.map((movieObj) => (
                                            <tr>
                                                <td><img style={{ width: '6rem' }} src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}></img></td>
                                                <th scope="row">{movieObj.title}</th>
                                                <td><div className='td-genre'>{genreids[movieObj.genre_ids[0]]}</div></td>
                                                <td><div className='td-popularity'>{movieObj.popularity}</div></td>
                                                <td><div className='td-rating'>{movieObj.vote_average}</div></td>
                                                <td><button type="button" class="btn btn-danger" onClick={() => this.handleDelete(movieObj.id)}>Delete</button></td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                {
                                    pagesarr.map((page) => (
                                        <li class="page-item"><a class="page-link" onClick={() => this.handlePageChange(page)}>{page}</a></li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        )
    }
}

export default Favourites