import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Day 8 by Thant Zin Oo';
  constructor(private messageService: MessageService) { }
  ngOnInit(): void {
    this.messageService.add("Application starts...")
  }
}
