import { useEffect } from "react";

import "./App.css";
import Todo from "./component/Todo";

function App() {
    useEffect(() => {
        let canceled = false;
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => {
                if (!canceled) {
                    setTodos(data.slice(0, 10));
                }
            })
            .catch((err) => {
                console.error(err);
            });

        return () => (canceled = true);
    }, []);

    return (
      <div className='App'>
        <Todo />
      </div>
    );
}

export default App;
