import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/Categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className="navBar">
      <h1 className="header">BOOKSTORE CMS</h1>
      <ul className="links">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="holder">
        <FaUserCircle className="user" />
      </div>
    </nav>
  );
};

export default Navbar;
