import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() hero: Hero | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
