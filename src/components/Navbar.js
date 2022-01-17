import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const lists = {
    textDecoration: 'none',
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '13vw',
    paddingRight: '2rem',
    marginRight: '2rem',
    paddingTop: '0.5rem',
  };

  const navContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100vw',
    height: '10vh',
    paddingTop: '0.8vh',
    paddingLeft: '2vw',
    backgroundColor: 'whitesmoke',
  };

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
    <nav className="navBar" style={navContainer}>
      <h1>BOOKSTORE CMS</h1>
      <ul style={lists}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
