import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        const person = {
          firstName: "Some",
          lastName: "User"
        };
        const helloWorld = `Hello, ${person.firstName} ${person.lastName}`;
        return (
            <div className="App">
                <h2>{helloWorld}</h2>
            </div>
        );
    }
}

export default App;
