import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionManagementService {

  expirationEvent = new BehaviorSubject<boolean>(null);

  private intervalId: any;
  private _remainingSeconds: number;
  private _sessionExpirationEpoch: number;

  get remainingSeconds(): number {
    return this._remainingSeconds;
  }

  set remainingSeconds(value: number) {
    this._remainingSeconds = value;
  }

  get sessionExpirationEpoch(): number {
    return this._sessionExpirationEpoch;
  }

  set sessionExpirationEpoch(value: number) {
    this._sessionExpirationEpoch = value;
    this.resetTimer();
  }

  constructor() {
  }

  private resetTimer(): void {
    clearInterval(this.intervalId);

    this.intervalId = setInterval(() => {
      const now = this.getCurrentTimeSeconds();

      this.remainingSeconds = this.sessionExpirationEpoch - now;
      if (this.remainingSeconds <= 0) {
        clearInterval(this.intervalId);
        this.expirationEvent.next(true);
      }
    }, 1000);
  }

  private getCurrentTimeSeconds(): number {
    return Math.round(new Date().getTime() / 1000);
  }
}
