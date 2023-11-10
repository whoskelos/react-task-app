import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-sky-900 text-white px-10 py-2">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">Mis Tareas</h1>
        <nav>
          <ul className="flex gap-2 [&>li]:text-lg [&>li]:font-medium">
            <li className="hover:text-gray-400 transition-colors">
              <Link to="/">Inicio</Link>
            </li>
            <li className="hover:text-gray-400 transition-colors">
              <Link to="/new">Nueva tarea</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
