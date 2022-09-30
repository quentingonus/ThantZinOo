import { OnInit, Component } from '@angular/core';
import { DebugService } from './services/debug.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string = 'Expense Manager';
  constructor(private debugService : DebugService) {} ngOnInit() { 
    this.debugService.info("Angular Application starts");
 }
}
