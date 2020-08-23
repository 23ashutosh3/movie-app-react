import React from 'react';
import { addFavourite,removeFromFavourites } from '../actions';

class  MovieCard extends React.Component {

    handleFavourites=()=>
    {
        const {movie} =this.props;
        this.props.dispatch(addFavourite(movie))
    }
    handleFavouritesClick=()=>{

        const {movie} =this.props;
        this.props.dispatch(removeFromFavourites(movie))
    }

    render()
    {
        const { movie, isFavourite} =this.props;
        return (
            <div className="movie-card" >
              <div className="left">
                  <img alt="movie-poster" src={movie.Poster}/>
                  </div>
                  <div className="right">
                      <div className="title">{movie.Title}</div>
                      <div className="Plot">{movie.Plot}</div>
                      <div className="footer">
                      <div className="rating">{movie.imdRating}</div>
                      {
                         isFavourite
                         ?<button className="unfavourite-btn" onClick={this.handleFavouritesClick}>UnFavourite-btn</button>
                         :<button className="favourite-btn" onClick={this.handleFavouritesClick}>Favourite-btn</button>
                          
                      }
                            
                          </div>

                  </div>
              </div>
        
          );
        } 
    }


export default MovieCard;
