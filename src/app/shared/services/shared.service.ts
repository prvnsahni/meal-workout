import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  previousRoute;

  constructor(private router: Router) { }
  getPreviousRoute(): any{
    this.router.events
      // .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({urlAfterRedirects}: NavigationEnd) => {
        return console.log(this.previousRoute = [...this.previousRoute, urlAfterRedirects]);
      });
  }
}
