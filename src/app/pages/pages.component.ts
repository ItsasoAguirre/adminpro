import { Component, OnInit } from '@angular/core';

// declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // deprecated
    // $(document).ready(() => {
    //   const trees: any = $('[data-widget="tree"]');
    //   trees.tree();
    // });

    // $(document).on('ready', () => {
    //   const trees: any = $('[data-widget="tree"]');
    //   trees.tree();
    // });

    // init_plugins();
  }

}
