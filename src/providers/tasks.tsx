import { ReactNode, createContext, useEffect, useState } from "react";
import { TaskData } from "../@types/task";
import supabase from "../services/supabase";

export interface TasksData{
    tasksLoading: boolean;
    tasks: TaskData[] | TaskData;
    fetchTasks: ()=> Promise<void>;
    fetchTask: (id: number) =>Promise<void>;
}

export const tasksContext = createContext<TasksData>({
    tasksLoading: false,
    tasks: [],
    async fetchTasks(){},
    async fetchTask(id) {},
});

interface Props{
    children?: ReactNode;
}

export default function TasksProvider(props:Props){

    const [tasks, setTasks] = useState<TaskData[] | TaskData>();
    const [tasksLoading, setLoading] = useState(false);

    const fetchTasks = async() => {
        setLoading(true);
        let { data, error } = await supabase
        .from('Tasks')
        .select(`
        *,
        Projects (
            id
        ),
        Subtasks(
            id
        )
        `)
        if(data){
            setTasks(data as unknown as TaskData[])
            setLoading(false);
        }
    }

    const fetchTask = async(id: number) => {
        setLoading(true);
        let { data: Tasks, error } = await supabase
        .from('Tasks')
        .select(`
        *,
        Subtasks(
            id
        )
        `)
        .eq('id', `${id}`)
        if(Tasks){
            setTasks(Tasks[0] as TaskData)
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchTasks();
    }, [])

    return(
        <tasksContext.Provider value={{fetchTasks, tasks: tasks as TaskData[] | TaskData, tasksLoading, fetchTask}} >
            {props.children}
        </tasksContext.Provider>
    )
}

