import { Component, ViewChild } from '@angular/core';
import { BryntumGanttComponent, BryntumProjectModelComponent } from '@bryntum/gantt-angular';
import { SupabaseService } from 'src/app/Supabase.services';
import { ganttConfig } from 'src/app/app.config';
import { projectConfig } from 'src/app/app.config.project';

@Component({
    selector: 'app-view2',
    templateUrl: './view2.component.html',
    styleUrls: ['./view2.component.css']
})
export class View2Component {

    constructor(private readonly supabase: SupabaseService) {
        this.getData();
    }

    async getData() {
        var data: any = await this.supabase.getData();
        console.log(data);
        this.tasks = [];
        var count = 0;
        data.data.forEach((element: any) => {
            debugger;
            if (this.tasks.filter(x => x.name == element.Name).length == 0) {
                if (count <= 3) {
                const randomPercentage = Math.floor(Math.random() * 101);
                this.tasks.push({
                    id: element.Internal_ID,
                    name: element.Name,
                    startDate: '2022-01-02',
                    endDate: '2022-01-09',
                    percentDone: randomPercentage,
                    iconCls: "b-fa b-fa-flag",
                    eventColor: this.changeColor(count)
                });
                count++;
                        if (count == 4) {
                            count = 0;
                        }
            }
            //     data.data.forEach(() => {
            //         debugger
            //         if (count <= 3) {
            //             this.tasks.push({
            //                 id: element.Internal_ID,
            //                 name: element.Name,
            //                 startDate: '2022-01-02',
            //                 endDate: '2022-01-09',
            //                 percentDone: randomPercentage,
            //                 iconCls: "b-fa b-fa-flag",
            //                 eventColor: this.changeColor(count)
            //             })
            //             count++;
            //             if (count == 4) {
            //                 count = 0;
            //             }
            //         }
            //     });
             }
        });
    }

    changeColor(count: any) {
        debugger;
        var color = "";
        switch (count) {
            case 0:
                color = 'orange'
                break;
            case 1:
                color = 'blue'
                break;
            case 2:
                color = 'pink';
                break;
            case 3:
                color = 'red';
                break;
            default:
                color = 'green'
                break;
        }
        return color;
    }
    startDate = new Date(2022, 0, 1);

    tasks = [
        {
            id: 1,
            name: 'Write docs',
            startDate: '2022-01-02',
            endDate: '2022-01-09',
            percentDone: 20,
            iconCls: "b-fa b-fa-flag",
            eventColor: '',
            // expanded: true,
            // children: [
            //     { id: 6, name: 'Proof-read docs', startDate: '2022-01-02', endDate: '2022-01-09' },
            //     { id: 3, name: 'Release docs', startDate: '2022-01-09', endDate: '2022-01-10' }
            // ]
        }
    ];

    dependencies = [
        { fromTask: 6, toTask: 3 }
    ];

    ganttConfig = ganttConfig;
    projectConfig = projectConfig;

    @ViewChild('gantt') ganttComponent!: BryntumGanttComponent;
    @ViewChild('project') projectComponent!: BryntumProjectModelComponent;

}

