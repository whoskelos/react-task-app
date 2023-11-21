import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-sky-900 text-white w-full py-4">
      <header className="flex justify-between items-center w-full max-w-[80%] mx-auto">
        <h1 className="text-xl md:text-3xl font-bold tracking-wide"><Link to="/">Mis Tareas</Link></h1>
        <nav>
          <ul className="flex gap-x-4 [&>li]:text-md md:[&>li]:text-xl [&>li]:font-medium">
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
