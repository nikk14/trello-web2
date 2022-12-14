import Task from "components/Task/Task";
import React from "react";
import './Column.scss';

function Column() {
    return (
        <div className='column'>
            <header>BrainStrorm</header>
            <ul className="task-list">
            < Task />
              <li className="task-item">Add what you'd like to work on below</li>
              <li className="task-item">Add what you'd like to work on below</li>
              <li className="task-item">Add what you'd like to work on below</li>
              <li className="task-item">Add what you'd like to work on below</li>
            </ul>
            <footer>Add another card</footer>
          </div>
    )
}

export default Column;