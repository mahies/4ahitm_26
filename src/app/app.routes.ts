import { Routes } from '@angular/router';
import {PageHomeComponent} from './pages/page-home/page-home.component';

//MINNI please don't touch!
import {MinnieHomeComponent} from './pages/pages-demo/minnie/minnie-home/minnie-home.component';
import {MinnieSubpage1Component} from './pages/pages-demo/minnie/minnie-subpage1/minnie_subpage1.component';
import {MinnieSubpage2Component} from './pages/pages-demo/minnie/minnie-subpage2/minnie_subpage2.component';
//MINNI END

export const routes: Routes = [
  { path: '', // default rout
    component: PageHomeComponent },
  { path: 'home',
    component: PageHomeComponent },
  //MINNIE
  { path: 'minnie-home',
    component: MinnieHomeComponent },
  { path: 'minnie-subpage1',
    component: MinnieSubpage1Component },
  { path: 'minnie-subpage2',
    component: MinnieSubpage2Component },
  //MINNI END
];
