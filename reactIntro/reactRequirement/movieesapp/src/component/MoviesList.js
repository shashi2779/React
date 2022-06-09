import React, { Component } from 'react'
import { movies } from './getMovies'
import axios from 'axios'

export class MoviesList extends Component {
    constructor(){
        super();
        this.state={
            hover:'',
            parr:[1],
            movies:[],
            currentPage:1,
            favourites:[]
        }
    }

    async componentDidMount(){
        let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=561724aca29f339fd6c67777836dee74&language=en-US&page=${this.state.currentPage}`)
        let moviesData = res.data
        console.log(moviesData)
        {
            this.setState({
                movies:[...moviesData.results]
            })
        }
    }

    changeMoviesData = async ()=>{
        let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=561724aca29f339fd6c67777836dee74&language=en-US&page=${this.state.currentPage}`)
        let moviesData = res.data
        console.log(moviesData)
        {
            this.setState({
                movies:[...moviesData.results]
            })
        }
    }

    handleNext=()=>{
       let tempParr = []
       for(let i=1;i<=this.state.parr.length+1;i++){
           tempParr.push(i)
           console.log(tempParr)
       }
       this.setState({
           parr:[...tempParr],
           currentPage:this.state.currentPage+1
       },this.changeMoviesData)
    }


    handlePrev = ()=>{
        if(this.state.currentPage !=1){
            this.setState({
                currentPage:this.state.currentPage-1
            },this.changeMoviesData)
        }
    }

    handlePageClick = (value) =>{
         if(value != this.state.currentPage){ // 3 page prr h 3 ko hi click krr rhe toh nhi hoga kam // alag value ho alag page prr ho tab uss value wale page prr ja sakte h
             this.setState({
                 currentPage:value
             },this.changeMoviesData)
         }
    }

    handleFavourites = (movieObj)=>{
        let oldData = JSON.parse(localStorage.getItem('movie-arr') || '[]')
         if(this.state.favourites.includes(movieObj.id)){
               oldData=oldData.filter((movie)=>movie.id != movieObj.id)
         }else{
             oldData.push(movieObj)
         }
        localStorage.setItem('movie-arr',JSON.stringify(oldData))
        this.handleFavouriteState()
    }

    handleFavouriteState=()=>{
        let oldData = JSON.parse(localStorage.getItem('movie-arr') || '[]')
         let tempData = oldData.map((movie)=>movie.id)

         this.setState({
             favourites:[...tempData]
         })
    }
    
    
    render() {
        // let movieArr = movies.results
        return (
            <>
                <div>
                    <h1 className='text-center' style={{ color: '#9370db' }}><strong>Trending</strong></h1>
                </div>
                <div className='moviesDev'>
                    {
                        this.state.movies.map((movieObj) => (
                           
                           <div className="card movie-card" onMouseEnter={()=>this.setState({hover:movieObj.id})} onMouseLeave={()=>this.setState({hover:''})}>
                                <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top movie-img" alt="..." />
                                <h5 className="card-title movie-title">{movieObj.title}</h5>
                                {/* <p className="card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                <div className='btn-wrapper' style={{ display: 'flex', justifyContent: 'center' }}>
                                    {
                                        this.state.hover == movieObj.id &&  <a className="btn btn-primary movie-btn" onClick={()=>this.handleFavourites(movieObj)}> 
                                        {
                                            this.state.favourites.includes(movieObj.id)?'Remove from Favourites':' Add to Favourites'
                                        }
                                       
                                        </a>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div> 
                <div style={{display:'flex',justifyContent:'center', marginTop:'1rem'}}>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" onClick={this.handlePrev}>Previous</a></li>
                            {
                                this.state.parr.map((value)=>(
                                  <li className="page-item"><a className="page-link" onClick={()=>this.handlePageClick(value)}>{value}</a></li>
                                ))
                            }
                            
                            <li className="page-item"><a className="page-link" onClick={this.handleNext}>Next</a></li>
                        </ul>
                    </nav>
                </div>

            </>
        )
    }
}

export default MoviesList