import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(public platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      //initialize ezAR videoOverlay plugin and start back camera      
      var win: any = window;
       if (win.ezar) {
            var ezar: any = win.ezar;
            ezar.initializeVideoOverlay(
                function() {
                 ezar.getBackCamera().start();
                },
                  function(err) {
                alert('unable to init ezar: ' + err);
            });
        } else {
            alert('Unable to detect the ezAR plugin');
        }

    });
  }
}
