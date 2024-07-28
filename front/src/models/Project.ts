export interface Project {
    id: number;
    name: string;
    description: string;
    status: ProjectStatus;
    ownerId: number;
    createdAt: Date;
}

export interface ProjectCreate {
    name: string;
    description: string;
    status: ProjectStatus;
    readme: string
}

export enum ProjectStatus {
    NEW,
    ONGOING,
    COMPLETED,
    WON
}