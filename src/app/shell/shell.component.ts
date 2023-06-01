import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `<ng-container
    *ngIf="customTemplate"
    [ngTemplateOutlet]="customTemplate"
  ></ng-container>`,
  styles: [],
})
export class ShellComponent {
  @ContentChild('customTemplate', { static: true })
  customTemplate: TemplateRef<any> | null = null;
}
