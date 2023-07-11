import useOnclickOutside from '../useOnclickOutside';
import { useState, useRef } from 'react';
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  useOnclickOutside(ref, dropdown, () => setDropdown(false));
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Abdout</li>
        <li ref={ref}>
          <button onClick={() => setDropdown(!dropdown)}>
            Service <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
