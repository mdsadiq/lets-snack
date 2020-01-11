import React, { Component } from  'react'

export default class GreetingsClass extends Component{
  state ={
    username: 'sadiq'
  }

  render() {
    return (
      <div>
          Greetings from {this.state.username}
      </div>
    )
  }
}

// state = {
//   usernames: [
//     'student 1', 'student 2','student 3','student 4'
//   ]
// }
// render(){
//   const  { usernames } = this.state
//   return(
//     <div style={{ textAlign: "center", fontSize: 23 }}>
//       {
//         usernames.map(username => <h5>{username}</h5>)
//       }
//     </div>
//   )
// }