import { Subtask } from "./subtask";

export interface Task{
    id: number;
    name: string;
    description: string;
    project_id: number;
    status_id: number;
    Subtasks: Subtask[];
}