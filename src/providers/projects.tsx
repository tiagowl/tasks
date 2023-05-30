import { ReactNode, createContext, useEffect, useState } from "react";
import { Project } from "../@types/project";
import supabase from "../services/supabase";

export interface ProjectsData{
    projects: Project[];
    fetchProjects: () => Promise<void>;
    projectsLoading: boolean;
}

export const projectsContext = createContext<ProjectsData>({
    projects: [],
    async fetchProjects(){},
    projectsLoading: false
})

interface Props{
    children?: ReactNode;
}

export default function ProjectsProvider(props: Props){

    const [projects, setProjects] = useState<Project[]>();
    const [projectsLoading, setLoading] = useState(false);

    const fetchProjects = async() => {
        setLoading(true);
        let { data: Projects, error } = await supabase
        .from('Projects')
        .select(`
            *,
            Tasks (
                id,
                name
            )
        `)
        if(Projects){
            setProjects(Projects as Project[]);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchProjects();
    }, [])

    return(
        <projectsContext.Provider value={{fetchProjects, projectsLoading, projects: projects as Project[]}} >
            {props.children}
        </projectsContext.Provider>
    )
}

