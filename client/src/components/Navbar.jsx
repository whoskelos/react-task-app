import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <header>
            <h1>React MySQL</h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/new">Nueva tarea</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}
