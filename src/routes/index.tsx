import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Main from "../layouts/Main"
import Dashboard from "../pages/Dashboard"
import Project from "../pages/Project";
import TaskPage from "../pages/Task";

function Routers(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Dashboard/>} />
                    <Route path="project/:id" element={<Project/>} />
                    <Route path="task/:id/:taskId" element={<TaskPage/>} />
                </Route>
            </Routes>
        </Router>
    )
}

export default Routers;