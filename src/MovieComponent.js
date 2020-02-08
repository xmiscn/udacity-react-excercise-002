import React, {Component} from 'react';
import UserComponent from './UserComponent';

class MovieComponent extends Component {
   render(){
      const{users, usersWhoLikedMovie, movieInfo}=this.props;

      return (
         <li key={movieInfo.id}>
            <h2>{movieInfo.name}</h2>
            <h3>liked by:</h3>
            <UserComponent usersWhoLikedMovie={usersWhoLikedMovie} users={users}/>
         </li>
      );
   }
}

export default MovieComponent;