import { useState } from 'react'
import PropTypes from 'prop-types';

function Input({ taskList, setTastList } ) {

    const [input, setInput] = useState('')

    const handleAddTask = (e) => {
        e.preventDefault()
        setInput('')
        setTastList([...taskList, input])
    }

  return (
      <>
          <form >
              <input className='border rounded-lg px-2 py-1 text-lg' type="text" placeholder='add a task' value={input} onChange={(e) => setInput(e.target.value)} />
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-3 rounded' onClick={handleAddTask}>Add</button>
          </form>
      </>
  )
}

Input.propTypes = {
    taskList: PropTypes.array,
    setTastList: PropTypes.func
}

export default Input
