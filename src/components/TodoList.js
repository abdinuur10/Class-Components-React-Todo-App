// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          itemText: "",
          statePropThatReliesOnProps: props.something
        };
      }
    
      handleChanges = event => {
        this.setState({
          itemText: event.target.value
        });
      };

      handleSubmit = event => {
        event.preventDefault();
        this.props.addItem(this.state.itemText);
        this.setState({
          itemText: ""
        });
      };
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="itemText"
              value={this.state.itemText}
              onChange={this.handleChanges}
            />
            <button>Add Todo</button>
          </form>
        );
      }
    }
    
    export default TodoList;