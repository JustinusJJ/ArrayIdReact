import { Link, Outlet } from 'react-router-dom'

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <p>
        This is the about page, to see our team,
        click below:
      </p>
      <ul>
        <li>
          <Link to="/about/team">
            Team
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
