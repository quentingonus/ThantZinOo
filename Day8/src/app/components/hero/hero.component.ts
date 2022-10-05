import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero'
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroes: Hero[] = [];
  newHero: string = "";
  selectedHero?: Hero;
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroComponent: Hero Selected: id=${hero.id}`);
  }
  addNewHero(): void {
    if (this.newHero) {
      if (this.newHero.length > 5) {
        const newHeroId = this.heroes[this.heroes.length - 1].id + 1;
        this.heroes.push({
          id: newHeroId,
          name: this.newHero
        })
        this.messageService.add(`HeroComponent: New Hero Added: id=${newHeroId}, name=${this.newHero}`)
        this.newHero = ""
      } else {
        this.messageService.add(`HeroComponent: Hero Adding Error: Hero Name should be at least 5 characters, isn't it?`)
      }
    }
    else {
      this.messageService.add(`HeroComponent: Hero Adding Error: Hero Name not provided`)
    }
  }

}
