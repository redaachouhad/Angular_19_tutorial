import { Routes } from '@angular/router';
import {UserComponent} from './user/user.component';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {
  StructuralDirectiveNgifVsIfComponent
} from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if.component';
import {
  AttributeDirectivesComponentComponent
} from './attribute-directives-component/attribute-directives-component.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BuildInPipesComponent} from './build-in-pipes/build-in-pipes.component';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form.component';
import {ReactiveFormsComponent} from './reactive-forms/reactive-forms.component';
import {ProfileComponent} from './profile/profile.component';

export const routes: Routes = [
  // routes by default
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'structural-directive',
    component: StructuralDirectiveNgifVsIfComponent,
  },
  {
    path: 'attribute-directive',
    component: AttributeDirectivesComponentComponent,
  },
  {
    path: 'build-in-pipes',
    component: BuildInPipesComponent,
  },
  {
    path: 'tdf',
    component: TemplateDrivenFormComponent,
  },
  {
    path: 'reactive-forms',
    component: ReactiveFormsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
