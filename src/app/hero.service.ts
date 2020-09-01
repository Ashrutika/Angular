import { Injectable} from '@angular/core';
//import { Hero } from './hero';
//import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService,private http: HttpClient,) { }

  // display(){
  //   alert("from hero service");
  // }
  
  //data:any;
  // fetchData(){
  //  return this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
  //     (data) => {
  //       this.data = data;
  //       console.log(data);
  //     }
  //   );
  // }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      
      console.error(error); 

      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }

  private heroesUrl = "http://localhost:3000/hero";
 
  getHeroes(): Observable<any[]> {
    return this.http.get<any[]>(this.heroesUrl).pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<any[]>('getHeroes', []))
    );
    // this.messageService.add('HeroService: fetched heroes');
    // return of(this.data);
  }
  getHero(id: number): Observable<any> {
    const url = `${this.heroesUrl}/${id}`;
  return this.http.get<any>(url).pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<any>(`getHero id=${id}`))
  );
    // const data = this.data.find(hero => hero.id == id)
    // this.messageService.add(`HeroService: fetched hero id=${id} name=${data.name}`);
    // return of(data);
  }
 
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  updateHero(hero: any): Observable<any> {
   
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url,hero,this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id} name=${hero.name}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addHero(hero: any): Observable<any> {
    return this.http.post<any>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: any) => this.log(`added hero id=${newHero.id}`)),
      catchError(this.handleError<any>('addHero'))
    );
  }

  deleteHero(hero: any | number): Observable<any> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
  
    return this.http.delete<any>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<any>('deleteHero'))
    );
  }
}
