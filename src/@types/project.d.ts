import {Task} from "./task";

export interface Project{
    id: number;
    name: string;
    Tasks: Task[];
}