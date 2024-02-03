import { useState } from 'react'
import Input from './components/Input'
import List from './components/List'


function App() {

  const [taskList, setTaskList] = useState([])
  
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='border border-gray-400 rounded-md py-4 my-4 w-96 bg-white shadow-md'>
        <h1 className='text-center text-2xl font-bold mb-4'>To Do List</h1>
        <div className='flex flex-col items-center justify-center'>
          <Input taskList={taskList} setTastList={setTaskList} />
          <div className='rounded-md p-2 my-4'>
            {taskList.map((task, index) => (
              <List key={index} task={task} setTaskList={setTaskList} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
