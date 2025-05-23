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
import {CRUDComponent} from './crud/crud.component';
import {AddUserComponent} from './add-user/add-user.component';
import {ViewUserComponent} from './view-user/view-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {ResourceApiComponent} from './resource-api/resource-api.component';
import {ReusableComponent} from './reusable/reusable.component';
import {ParentComponent} from './parent/parent.component';
import {StorageComponent} from './storage/storage.component';

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
    path: 'crud',
    component: CRUDComponent,
  },
  {
    path: 'adduser',
    component: AddUserComponent,
  },
  {
    path: 'viewuser/:id',
    component: ViewUserComponent,
  },
  {
    path: 'updateuser/:id',
    component: UpdateUserComponent,
  },
  {
    path: 'resourceapi',
    component: ResourceApiComponent,
  },
  {
    path: 'reusable',
    component: ReusableComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'storage',
    component: StorageComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
