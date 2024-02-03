import { useState } from 'react';
import PropTypes from 'prop-types';

function List({ task, setTaskList }) {
  const [isFinished, setIsFinished] = useState(false);

  const handleDelete = () => {
    setTaskList((currentTasks) => currentTasks.filter(t => t !== task));
  }

  const handleFinish = () => {
    setIsFinished(!isFinished);
  }

  const textStyle = {
    textDecoration: isFinished ? 'line-through' : 'none',
    color: isFinished ? 'gray' : 'black',
  };

  return (
    <div className="border border-gray-400 px-2 py-1 rounded-md m-4 flex items-center justify-between w-64 bg-gray-100">
      <p className='cursor-pointer' onClick={handleFinish} style={textStyle}>{task}</p>
      <button onClick={handleDelete} className="px-4 py-1 rounded-md ml-4 bg-red-500 text-white hover:bg-red-600">Delete</button>
    </div>
  );
}

List.propTypes = {
  task: PropTypes.string.isRequired,
  setTaskList: PropTypes.func.isRequired,
};

export default List;
