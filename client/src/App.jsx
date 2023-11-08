import { Route, Routes } from "react-router-dom"
import TasksPage from "./pages/TasksPage"
import TaskForm from "./pages/TaskForm"
import NotFoundPage from "./pages/notFoundPage"
import Navbar from "./components/Navbar"
import { TaskContextProvider } from "./context/TaskContext"
function App() {

  return (
    <TaskContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="/edit/:id" element={<TaskForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </TaskContextProvider>
  )
}

export default App
