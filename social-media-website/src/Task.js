export const Task = (props) => {
    return (
        <div style={{color: (props.isCompleted) ? 'green' : 'black'}}>
            <h1>{props.name}</h1>
            <button onClick={() => props.updateTask(props.id)}>Complete</button>
            <button onClick={() => props.deleteTask(props.id)}> x </button>
        </div>
    );
};