import { Routes } from '@angular/router';
import { MainAntDesignComponent } from './main-ant-design/main-ant-design.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'ant-design',
                providers: [
                ],
                component: MainAntDesignComponent
            }
        ]
    }
];
