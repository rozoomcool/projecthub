import { Project, ProjectCreate } from "../models/Project";
import $api from "./constatns";

export default class ProjectService {
    static async getProjects(): Promise<Project[] | null> {
        try {
            const response = await $api.get<Project[]>('/projects');
            if(response.status == 200) {
                return response.data;
            } else {
                return null;
            }
        } catch(e) {
            console.log(e);
            throw Error(e instanceof Error ? e.message : "");
        }
    }

    static async addProject(project: ProjectCreate): Promise<Project | null> {
        try {
            const response = await $api.post<Project>("/projects", project);
            if (response.status == 200) {
                return response.data;
            } else {
                return null;
            }
        } catch (e) {
            console.log(e);
            throw Error(e instanceof Error ? e.message : "Error Post Project");
        }
    }
}