const React = require('react');
// use const Link = require('react-router-dom').Link; if you only want to render an anchor tag
const NavLink = require('react-router-dom').NavLink; // use if you want to render an anchor tag and change style based on the route youre on

function Nav() {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/battle'>
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/popular'>
          Popular
        </NavLink>
      </li>            
    </ul>
  )
}

module.exports = Nav;