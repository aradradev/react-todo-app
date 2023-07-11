import { useState } from 'react';
import styles from '../styles/TodoItem.module.css';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(true);
  };
  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdateDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button onClick={handleEditing}>
          <AiFillEdit style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
        <button onClick={() => delTodo(itemProp.id)}>
          <FaTrash style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
        {itemProp.title}
      </div>
      <input
        type="text"
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        value={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};
export default TodoItem;
