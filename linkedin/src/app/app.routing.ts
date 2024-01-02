import { Routes ,RouterModule } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { AppComponent } from "./app.component";

const appRoutes : Routes= [
    { 
        path : 'add',component:DetailComponent
    },
    { 
        path: ':medium',component:AppComponent
    },
    { 
        path:'', redirectTo:'all',pathMatch:'full'
    },
];

  

export const routing =RouterModule.forRoot(appRoutes);