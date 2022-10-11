import React, {Component} from "react";


class TodoListChoirs extends Component
{





    render()
    {
        const items = this.props.todos.map((elements, id) => {
            return <li key={id}>{elements}</li>
        })

        return (
            <div>
                <ul>
                    <li>
                        {items}

                    </li>
                   <btn> <li onClick={onListItemClick}>THE ITEM</li></btn>
                </ul>
            </div>
        );

    }
}

var onListItemClick = (event) =>
{
    console.log("I Got Click Baited");
}



export default TodoListChoirs;