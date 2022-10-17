import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

type JSONValue =
  | string
  | number
  | boolean
  | JSONObject;

interface JSONObject {
  [x: string]: JSONValue;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private authService: AuthService) { }

  title = 'Day15';

}
