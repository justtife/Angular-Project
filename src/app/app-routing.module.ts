import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { CallsComponent } from './pages/calls/calls.component';
import { StatusComponent } from './pages/status/status.component';

const routes: Routes = [
  {
    path: 'chats',
    component: ChatComponent,
  },
  { path: 'calls', component: CallsComponent },
  { path: 'status', component: StatusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
