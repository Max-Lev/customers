import { SharedService } from './shared/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private sharedService: SharedService) {

  };

  ngOnInit(): void {
    // this.sharedService.set_LocalStorage_Data();
    // setTimeout(() => {
    //   this.sharedService.is_CustomerStorage('Nicky')//(this.sharedService.getLS);
    // }, 1000);
  };

}
