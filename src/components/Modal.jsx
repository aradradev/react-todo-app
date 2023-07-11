import { useState, useRef } from 'react';
import useOnclickOutside from '../useOnclickOutside';
const Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  const ref = useRef();
  useOnclickOutside(ref, openModal, () => setOpenModal(false));

  return (
    <div className="modal">
      <button onClick={() => setOpenModal(true)}>Modal</button>
      {openModal && (
        <div ref={ref} className="modalContent">
          <span onClick={() => setOpenModal(false)}>X</span>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            doloribus inventore soluta libero harum autem laboriosam. Quasi
            necessitatibus, ex, repellendus commodi alias est possimus tempora
            numquam quae nemo quam labore!
          </div>
        </div>
      )}
    </div>
  );
};
export default Modal;
