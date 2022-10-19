import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CardList from './components/card-list/card-list.component';
import Searchbox from './components/search-box/search-box.component';



class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
    console.log("constructor")
  }

  componentDidMount() {
    console.log("componentDidMount")
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      },
        () => {
          console.log(this.state);
        }));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField: searchField };
    });
  }

  render() {
    console.log("Render");
    //destructuring makes our variables shorter so we dont have to reference this component everytime.
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    //returns a new array based off of original state array we get from API. We do not want to modify original array since we cannot get back
    //anything unless we refresh the app/componentDidMount function.
    //This way, as we change the searchField, we are constantly getting a new array without altering the original one to display.
    //For instance, filteredMonsters essentially is a copy of the original array. when we set the state for searchfield, it will 
    //return a new array with the filters *only* for filteredMonsters. that is why when we delete some characters from searchField, 
    //we will see the array filter base off of the current search Field.
    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField));

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <Searchbox className={'search-box'} placeholder={'Search Monsters'} onChangeHandler={onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}

export default App;


/**original to learn how states work with shallow copy concept.
 * 
 import { Component } from 'react';
 import logo from './logo.svg';
 import './App.css';
 
 class App extends Component {
   constructor() {
     super();
 
     this.state = {
       name: { firstname: 'Jimmy', lastname: 'Lin' },
       company: 'ZTM',
     }
   }
 
 
   render() {
     return (
       <div className="App">
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <p>
             Hi {this.state.name.firstname} {this.state.name.lastname}, welcome to {this.state.company}
           </p>
           <button onClick={() => {
             this.setState(() => {
               return {
                 name: { firstname: 'Jammy', lastname: 'Lee' }
               }
             }, () => {
               console.log(this.state);
             });
           }}>Change Name</button>
         </header>
       </div >
     );
   }
 
 }
 
 export default App;
 
 */