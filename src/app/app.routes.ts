import { Routes } from '@angular/router';
import { CrudStudentComponent } from './crud-student/crud-student.component';
import { ListStudentComponent } from './list-student/list-student.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/crud-students', 
        pathMatch: 'full' 
    }, 
    {
        path: 'crud-students',
        component: CrudStudentComponent
    },
    {
        path: 'students',
        component: ListStudentComponent
    },
];
