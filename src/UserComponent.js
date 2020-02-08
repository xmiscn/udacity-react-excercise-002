import React, {Component} from 'react';

class UserComponent extends Component {
   render(){
      const {users, usersWhoLikedMovie} = this.props;

      if(!usersWhoLikedMovie||usersWhoLikedMovie.lenght === 0){
         return(<p>Nobody seems to like it enough.</p>);
      }

      const listofItems = usersWhoLikedMovie.map(id =>(
         <li key={id}><p>{users[id].name}</p></li>
      ));

   return(<ul>{listofItems}</ul>);
   }
}
export default UserComponent;