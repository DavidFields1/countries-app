import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RoutingModule } from '../app.routing.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, RoutingModule],
  exports: [SidebarComponent],
})
export class SharedModule {}
