import {Component} from '@angular/core';
import {MyServiceService} from "./Service/my-service.service";

@Component({
  selector: 'server-sent-event-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _myService:MyServiceService) {
  }
  ngOnInit(){
    this._myService.getServerSentEvent('https://jsonplaceholder.typicode.com/todos').subscribe((data: any) => console.log(data))
  }
}
