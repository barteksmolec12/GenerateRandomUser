import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person'

// 1) przygotowanie jsona --done
// 2) pobranie go w didMount --done
// 3) przygotowanie State --done
// 4) Dodatkowy komponent z treścia
// 4) w App zmapowac obiekt State

class App extends React.Component
{
  state=
  {
    users:[],
    isLoaded:false,
   
  
  } 

  getUsers = () => //tutaj pobiore api
  {
    console.log("GET_USERS dziala")

    fetch("https://randomuser.me/api/?results=1")
    .then(result => result.json())
    .then(result =>{
      const onePerson = result.results;
      this.setState({users:this.state.users.concat(onePerson)})
      }
    )
  }
  

  
render()   
  {
    const item=this.state.users.map(item => (<Person key={item.login.uuid} title={item.name.title} name={item.name.first} email={item.email} img={item.picture.large}></Person>))
    
    console.log(this.state.users);
    console.log(this.state.isLoaded)
    console.log("RENDER")
    
    
   

    return(
      <div>
      <button onClick={this.getUsers}>POBIERZ 1 OSOBE</button>
   {item.reverse()}
     
      </div>
      
      
    )
}

}
export default App;
