
export interface TaskI {
    id: number,
    title: string,
    category: CategoryI,
    completed: boolean,
}

export type CategoryI = 'Work' | 'Personal' | 'Shop' | 'Pets'| 'Self Care';


