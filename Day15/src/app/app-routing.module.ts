import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseComponent } from './components/expense/expense.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ExpenseGuard } from './guard/expense.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: ExpenseComponent, canActivate: [ExpenseGuard] },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
