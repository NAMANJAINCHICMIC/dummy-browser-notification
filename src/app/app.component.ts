import { Component, OnInit } from '@angular/core';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { environment } from 'src/environments/enviroment';
import { PushNotificationService } from './push-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'af-notification';
    message:any = null;
    constructor(private _notificationService: PushNotificationService) {}
    ngOnInit(): void {
      this.requestPermission();
      this._notificationService.requestPermission();
      this.listen();
  
    }
    requestPermission() {
      const messaging = getMessaging();
      console.log(messaging)
      getToken(messaging, 
       { vapidKey: environment.firebase.vapidKey}).then(
         (currentToken) => {
           if (currentToken) {
             console.log("Hurraaa!!! we got the token.....");
             console.log(currentToken);
const subscription = {"notification": {
  "title": "First Notification", 
  "body": "Hello from Jishnu!!"
 },
 "to" : currentToken
}
//              fetch("https://fcm.googleapis.com/fcm/send",{
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'key=server-key'
//   },
//   body: JSON.stringify(subscription)
// })
           } else {
             console.log('No registration token available. Request permission to generate one.');
           }
       }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
      });
    }
    listen() {
    
      const messaging = getMessaging();
      onMessage(messaging, (payload) => {
        console.log('Message received. ', payload);
        this.message=payload;
        const data = [{
          'title': payload.notification?.title,
          'alertContent': payload.notification?.body
        }]
        // this._notificationService.generateNotification(data);
        let options = {
          body: payload.notification?.body,
          // icon: "http://www.martijnmuijs.nl/wp-content/uploads/2009/07/home-icon.jpg"
      };
      // let notify = self.create(item.title, options).subscribe();
      let _notify = new Notification(this.message.notification?.title, options);
      });
    }
  }