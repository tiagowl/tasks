import { Project } from "./project";
import { Status } from "./status";
import { Subtask } from "./subtask";

export interface TaskData{
    id: number;
    name: string;
    description: string;
    project_id: number;
    status_id: number;
    Subtasks: Subtask[];
    Projects: Project;
    Status: Status;
}