import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';

const ToDoItem = ({ text, isCompleted, removeTask, id, completeTask }) => (
  <li className="todo-item">
    <i
      onClick={() => completeTask(id)}
      className={isCompleted ? 'completedMarker' : 'uncompletedMarker'}>✔️</i>
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    <i onClick={() => removeTask(id)} className="removeMarker">
      x
    </i>
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  id: PropTypes.number,
};

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
  id: 0,
};

export default ToDoItem;
