import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../constants/mock-hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  public heroes$ = new Subject<Hero[]>();
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: Hero Array Fetched');
    return heroes;
  }
  constructor(private messageService: MessageService) { }
}
