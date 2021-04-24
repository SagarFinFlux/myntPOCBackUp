import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  showFiller = false;
  drawerIconVal = 'feather:arrow-right-circle';
  constructor() { }

  ngOnInit(): void {
  }

  menuToggle(drawer) {
    drawer.toggle();
    if(drawer._opened) {
      this.drawerIconVal = 'feather:arrow-left-circle';
    } else {
      this.drawerIconVal = 'feather:arrow-right-circle';
    }
  }

}
