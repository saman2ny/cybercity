import { Injectable } from '@angular/core';
import { FabricService } from '../fabric/fabric.service';
import { Observable } from 'rxjs';
import { ContactMessage } from '../../models/contact-message/contact-message';

const SERVICE_NAME = 'application-resources';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private fabricService: FabricService) {
  }

  sendMessage(messageBody: ContactMessage): Observable<any> {
    return this.fabricService.invokeOperation<any>(SERVICE_NAME, 'post_contact_email', messageBody);
  }
}
