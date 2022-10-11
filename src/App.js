import './App.css';
import {Component} from "react";
import TodoListChoirs from "./Learning/TodoListChoirs";







// let TodoListChoirs = (props) => (
//     <ul>
//         <li>{props.todos[0]}</li>
//         <li>{props.todos[1]}</li>
//         <li>{props.todos[2]}</li>
//     </ul>
// )



class App extends Component {
    state = {
        todos: ['Learn React', 'Crush Recast.ly', 'Maybe sleep', "Party"]}

    // }
    //  const myList= ["oranges", "apples", "grapes","peaches"];
    //  const itemsListMap = myList.map((element, id) => {
    //      return <li key={id}>{element}</li>
    //  })
    render() {


        return (
            <div>
                <h2>My Todo List</h2>
                <TodoList/>
                <TodoListChoirs todos={this.state.todos}></TodoListChoirs>
                {/*<ul>*/}
                {/*    {itemsListMap}*/}

                {/*</ul>*/}

            </div>
        )
    }
}



export default App;

class TodoList extends Component {
    render() {
        return (
            <div>
                <ul>
                       <Grapes/>
                       <Oranges/>
                </ul>
            </div>
        )
    }
}

class Grapes extends Component{
    render() {
        return (
            <div>
                <li>
                Grapes
                </li>
            </div>
        );
    }
}

class Oranges extends Component{
    render() {
        return (
            <div>
                <li>
                Oranges
                </li>
            </div>
        );
    }
}
// Put class here Below
//Logic  the class name is TodoList



// <li>Grapes</li>
// <li>Oranges</li>