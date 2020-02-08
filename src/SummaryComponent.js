import React, {Component} from 'react';
import MovieComponent from './MovieComponent'


class SummaryComponent extends Component{
   render(){
      const{usersByMovie, movies, users} = this.props;

      const movieComponent = Object.keys(movies).map(id => (
         <MovieComponent 
            key={id} 
            users={users} 
            usersWhoLikedMovie={usersByMovie[id]} 
            movieInfo={movies[id]}/>
      ));

   return <ul>{movieComponent}</ul>;
   }
}

export default SummaryComponent;