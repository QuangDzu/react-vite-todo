const TodoData = (props) => {
  const { name, age } = props;

  return (
    <div className="todo-data">
      <div>My name is {name}</div>
      <div>{age}</div>
    </div>
  );
};

export default TodoData;
