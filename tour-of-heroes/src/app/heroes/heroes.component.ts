import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-heroes", // the component's CSS element selector
  templateUrl: "./heroes.component.html", // the location of the component's template file
  styleUrls: ["./heroes.component.css"] // the location of the component's private CSS styles
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  // inject the service in the constructor by specifying a constructor parameter with the dependency type
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  // make async call using subscribe
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
}
