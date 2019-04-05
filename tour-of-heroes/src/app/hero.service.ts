import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable, of, ObservableInput } from "rxjs"; // simulate getting data from the server with the RxJS of()
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  // the singleton MessageService will be injected into this private messageService property when creates the HeroService
  constructor(private messageService: MessageService) {}

  // this emits a single value, the array of mock heroes
  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add("HeroService: fetched hero id=${id}");
    return of(HEROES.find(hero => hero.id === id));
  }
}
