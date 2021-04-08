import { Routes, RouterModule } from '@angular/router';

import { MovementComponent } from './movement';

const routes: Routes = [
    { path: '', component: MovementComponent },
   

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);