interface ButtonProps{
  title: string;
}

function Button(props:ButtonProps){
  return(
    <button>
      {props.title}
    </button>
  ) 
}


function App() {
  return (
    <div>
      <Button title="titulo 1" />
      <Button title="titulo 2" />
      <Button title="titulo 3" />
      <Button title="titulo 4" />    
    </div>
  )
}

export default App
