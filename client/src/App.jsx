import { Route, Routes } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import NotFoundPage from "./pages/notFoundPage";
import Navbar from "./components/Navbar";
import { TaskContextProvider } from "./context/TaskContext";
import { Toaster } from "sonner"
function App() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="container mx-auto py-4 px-10">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </TaskContextProvider>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
