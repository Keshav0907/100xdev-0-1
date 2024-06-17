import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo.jsx'
import { Todos } from './components/Todos.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
    {/* Hi there */}
    <CreateTodo></CreateTodo>
    <Todos todos = {
      [
        {
          title: 'Learn JavaScript',
          description: 'Study JavaScript fundamentals and advanced topics.',
          completed: false
        },
        {
          title: 'Build a Todo App',
          description: 'Create a web application to manage todos.',
          completed: true
        },
        {
          title: 'Learn React',
          description: 'Master React library for building user interfaces.',
          completed: false
        }
      ]
      
      
    }></Todos>
    </div>
  )
}

export default App
