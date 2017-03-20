import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-lib-component',
  styleUrls: ['./library.component.scss'],
  templateUrl: './library.component.html'
})
export class LibraryComponent implements OnInit {

  title: String = 'Library Component Works!';

  constructor() {}

  ngOnInit() {
    // do something
  }

}
