import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-lib-component',
  template: `<h1>{{title}}</h1>`
})
export class LibraryComponent implements OnInit {

  title: String = 'Library Component Works!';

  constructor() {}

  ngOnInit() {
    // do something
  }

}
