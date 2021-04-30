import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./styles.css";


const Student = [
  {
    name: "Homeworks",
    id: 125,
    Finished: false
  },
  {
    name: "Projects",
    id: 126,
    Finished: false
  },
  {
    name: "Study Exams",
    id:127,
    Finished: false
  },
  {
    name:"Work",
    id:128,
    Finished: false
  },
  {
    name:"Exercise",
    id:129,
    Finished: false
    
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state ={
      Student: Student,
      anotherStatProp: ""
    }; 
  }

    toggleItem = id => {
      this.setState({
        Student: this.state.Student.map(item => {
          if (item.id === id) {
            return {
              ...item,
              Finished: !item.Finished
            };
          } else {
            return item;
          }
        })
      });
    };

    AddListitem = itemName => {
      const newitem = {
        name: itemName,
        id: new Date(),
        Finished: false
      };

      this.setState({
        Student: [...this.state.Student, newitem]
      });
    };

  render() {
    return (
      <div dlassName="App"> 
      <div className= "header">
        <h1>Studnets To-do-List</h1>
        <TodoList AddListitem={this.AddListitem}/>
      </div>
        <TodoList
          toggleItem={this.toggleItem}
          Student={this.state.Student}
        />
      </div>
    );
  }
}

export default App;
