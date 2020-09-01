import { Component,OnInit} from '@angular/core';
import { HeroService} from'./hero.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  constructor(private heroService: HeroService) { }
  title = 'My first app';
  subtitle = "From root to binding component";
  data;

  hello(e){
    alert('listening mouse event from binding component ');
    console.log(e);
  }
  
//ngOnInit(){
  //this.heroService.display();
  //this.fetchData();
  // of(1, 2, 3, 4).pipe(
  //   tap(el => console.log(el)),
  //   map(n => n + 10),
  //   tap(el => console.log(el)),
  // ).subscribe(result => console.log("Result: "+ result)); 
//}
// fetchData(){
//   this.heroService.fetchData().subscribe(
//     (data) => {
//       this.data = data;
//       console.log(data);
//     }
//   );
// }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  