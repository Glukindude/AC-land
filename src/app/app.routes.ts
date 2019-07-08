import {Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {AgriManagementPageComponent} from "./components/agri-management-page/agri-management-page.component";
import {AgriScoutingPageComponent} from "./components/agri-scouting-page/agri-scouting-page.component";
import {LandManagementPageComponent} from "./components/land-management-page/land-management-page.component";

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      name: 'home'
    },
    pathMatch: 'full'
  },
  {
    path: 'AgriManagement',
    component: AgriManagementPageComponent,
    data: {
      name: 'AgriManagement'
    }
  },
  {
    path: 'AgriScouting',
    component: AgriScoutingPageComponent,
    data: {
      name: 'AgriScouting'
    }
  },
  {
    path: 'LandManagement',
    component: LandManagementPageComponent,
    data: {
      name: 'LandManagement'
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
