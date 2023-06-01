import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-shell>
    <ng-template #customTemplate>
      <p>template</p>
    </ng-template>
  </app-shell>`,
  styles: [],
})
export class AppComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        console.warn('done');
      }, 2000);
    }
  }
}
