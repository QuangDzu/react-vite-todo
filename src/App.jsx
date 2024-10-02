import "./App.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import "./components/todo/todo.css";

function App() {
  const data = {
    name: "QuangDzu",
    age: 22,
    data: {},
  };

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew />
        <TodoData name={data.name} />
      </div>
    </>
  );
}

export default App;
