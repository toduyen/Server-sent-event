import {Injectable, NgZone} from '@angular/core';
import {SseServiceService} from "./sse-service.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private _zone:NgZone , private _sseService: SseServiceService) { }

  getServerSentEvent(url:string){
    return Observable.create((observer: { next: (arg0: MessageEvent) => void; error: (arg0: Event) => void; }) => {
      const eventSource = this._sseService.getEventSource(url);
      eventSource.onmessage = event => {
        this._zone.run(() => {
          observer.next(event);
        });
      };
      eventSource.onerror = error => {
        this._zone.run(() => {
          observer.error(error);
        });
      };
    });
  }
}
