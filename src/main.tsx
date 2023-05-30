import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import Routers from './routes/index'
import TasksProvider from './providers/tasks'
import ProjectsProvider from './providers/projects'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <ProjectsProvider>  
        <TasksProvider>
          <Routers/>
        </TasksProvider>
      </ProjectsProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
