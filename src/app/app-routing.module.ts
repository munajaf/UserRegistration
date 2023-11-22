import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { PostingComponent } from './posting/posting.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { TodoComponent } from './todo/todo.component';
const routes: Routes = [
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
  //register page
  { path: 'registration', component: RegistrationComponent },
  //welcome page
  { path: 'welcome', component: WelcomeComponent },
  //todo page
  { path: 'todo', component: TodoComponent },
  //posting page
  { path: 'post', component: PostingComponent },
  { path: 'post/:id', component: PostDetailComponent },
  //notfound page
  { path: '404', component: NotFoundComponent }, 
  { path: '**', redirectTo: '/404' },  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
