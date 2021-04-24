import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { DirectoryComponent } from './directory.component';
import { UsersComponent } from './users/users.component';
import { directoryRoutes } from './directory.routing';

@NgModule({
    declarations: [
        DirectoryComponent,
        UsersComponent
    ],
    imports     : [
        RouterModule.forChild(directoryRoutes),
        SharedModule
    ]
})
export class DirectoryModule
{
}