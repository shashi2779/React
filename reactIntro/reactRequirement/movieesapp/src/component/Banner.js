import React, { Component } from 'react'
import { movies } from './getMovies'
// import { movies } from './getMovies'



export class Banner extends Component {
  
  
  render() {
    let movieArr = movies.results[Math.floor(Math.random()*10)]
    
     return (
      <>
      {
        movieArr=='' ?
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        :
        <div className="card banner-card" >
          <img src={`https://image.tmdb.org/t/p/original${movieArr.backdrop_path}`} className="card-img-top banner-img" alt="..." />
          <h5 className="card-title banner-title">{movieArr.title}</h5>
          <p className="card-text banner-text">{movieArr.overview}</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}

        </div>
      }
      </>
    )
  }
}

export default Banner