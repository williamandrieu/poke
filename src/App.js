import React, { Component } from 'react';
import logo from './logo.svg';
import TopBar from './components/TopBar';
import Accueil from './components/Accueil';
import Card from './components/Card';
import MiniCard from './components/MiniCard';
import './App.css';
import firebase from './firebase.js';

class App extends Component {

  constructor(props) {
        super(props);
        this.changePage = this.changePage.bind(this);
        this.state = { name: '',page: 'Accueil', bdd: []};

    }

    changePage(page){
      console.log("oui");
      this.setState({page: page});
    }

  componentDidMount() {
    var bdd = [];
    firebase.database().ref('/pokemon').once('value').then((snapshot) =>{
      bdd = snapshot.val();
      this.setState({ bdd: bdd });
      });
  }
  render() {
    const {page} = this.state;
    switch(page){
      case "Accueil":
      return (
      <div className="App">
        <TopBar changePage={this.changePage}/>
        <div id="page">
        <Accueil/>
         </div>
      </div>
    );
      break;
      case "All":
      return (
      <div className="App">
        <TopBar changePage={this.changePage}/>
        <div id="page">
        {
          this.state.bdd.map(function(item, i){
            console.log(item);
            if(item.pokedex_number < 722){
              return <Card 
              name={item.name}
              nameJP={item.japanese_name}
              pokedexId={item.pokedex_number} 
              type={item.type} 
              sexe={item.percentage_male} 
              type1={item.type1} 
              type2={item.type2} 
              classification={item.classfication}
              hp={item.hp}
              speed={item.speed}
              defense={item.defense}
              sp_attack={item.sp_attack}
              sp_defense={item.sp_defense}
              attack={item.attack}
              eggs={item.base_egg_steps}
              generation={item.generation}
              weight={item.weight_kg}
              />
            }
          })
        }
         </div>
      </div>
    );
      break;

    }
    
  }
}

export default App;
