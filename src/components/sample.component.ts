import { Component } from '@angular/core';

@Component({
  selector: 'sample',
  template: `
    <h1>{{title}}</h1>
  `,
  styles: [`
    h1 { color: red }
  `]
})
export class SampleComponent {
  title = 'sample componenent works!';
}
