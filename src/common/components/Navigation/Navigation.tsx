import { NavLink } from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => {
  return (
    <>
    <nav id="navigation">
      <div className="block">
      <ul>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Form upon submit
        </NavLink>
        <NavLink
          to='upon-field-change'
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Form upon field change
        </NavLink>
      </ul>
      </div>
    </nav>
    </>
  );
};
