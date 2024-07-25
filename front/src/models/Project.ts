export interface Project {
    id: number;
    name: string;
    description: string;
    status: ProjectStatus;
    ownerId: number;
    createdAt: Date;
}

export enum ProjectStatus {
    NEW,
    ONGOING,
    COMPLETED,
    WON
}