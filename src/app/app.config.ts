import { GanttConfig } from '@bryntum/gantt';

export const ganttConfig: Partial<GanttConfig> = {
    columns : [
        { type : 'name', width : 160 }
    ],
    startDate : new Date(2022, 0, 1),
    endDate   : new Date(2022, 0, 10)
};