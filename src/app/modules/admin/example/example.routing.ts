import { Route } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { DirectoryComponent } from '../directory/directory.component';

export const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    }
];
