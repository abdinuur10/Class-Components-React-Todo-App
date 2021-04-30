import React from "react";
import Todo from "./Todo";

const TodoForm = props => {
    return (
        <div className="Studnets To-do-List">
            {props.Student.map(item => {
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            })}
            
        </div>
    );
};

export default TodoForm;