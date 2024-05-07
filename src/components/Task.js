import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const Task = () => {
  return (
    <div className="task">
      <p>
        <b>1.</b>
        Task 1
      </p>
      <div className="task-icons">
        <FaCheckDouble color="green" />
        <FaEdit color="purple" />
        <FaTrash color="redgit sta" />
      </div>
    </div>
  );
};

export default Task;
