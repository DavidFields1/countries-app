import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <div class="alert alert-danger mt-3">No coincidence was found</div>
  `,
})
export class AlertComponent {
  @Input() error: boolean = false;
}
