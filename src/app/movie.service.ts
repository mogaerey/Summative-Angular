import { Injectable } from '@angular/core';

export class Movie{
title: string;
description: string;
imageUrl: string;
selectedItem = null;


constructor(title: string, description: string, imageUrl: string) {
  this.title = title;
  this.description = description;
  this.imageUrl = imageUrl;
}
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[] = [
    new Movie("Coming To America", "Prince Akeem (Eddie Murphy) is the prince of a wealthy African country and wants for nothing, except a wife who will love him in spite of his title. To escape an arranged marriage, Akeem flees to America accompanied by his persnickety sidekick, Semmi (Arsenio Hall), to find his queen. Disguised as a foreign student working in fast food, he romances Lisa (Shari Headley), but struggles with revealing his true identity to her and his marital intentions to his king father (James Earl Jones).", "http://www.galluplibrary.com/calendar/coming-to-america-poster-artwork-eddie-murphy-arsenio-hall-john-amos.jpg "), 
    new Movie("Pulp Fiction", "Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames) ; his actress wife, Mia (Uma Thurman) ; struggling boxer Butch Coolidge (Bruce Willis) ; master fixer Winston Wolfe (Harvey Keitel) and a nervous pair of armed robbers, Pumpkin (Tim Roth) and Honey Bunny (Amanda Plummer).", "https://imgc.allpostersimages.com/img/print/u-g-F5UYZ30.jpg?w=550&h=550&p=0"),
    new Movie("Goodfellas", "A young man grows up in the mob and works very hard to advance himself through the ranks. He enjoys his life of money and luxury, but is oblivious to the horror that he causes. A drug addiction and a few mistakes ultimately unravel his climb to the top. Based on the book Wiseguy by Nicholas Pileggi.", "https://d994l96tlvogv.cloudfront.net/uploads/film/poster/goodfellas-poster-500x740.jpg"),
    new Movie("The Usual Suspects", "The greatest trick the devil ever pulled was convincing the world he didn't exist, says con man Kint (Kevin Spacey), drawing a comparison to the most enigmatic criminal of all time, Keyser Soze. Kint attempts to convince the feds that the mythic crime lord not only exists, but is also responsible for drawing Kint and his four partners into a multi-million dollar heist that ended with an explosion in San Pedro Harbor - leaving few survivors.", "https://d1w8cc2yygc27j.cloudfront.net/-2803287200740246609/5806671174776619406.jpg "),
    new Movie("Casino", "In early-1970s Las Vegas, low-level mobster Sam Ace Rothstein (Robert De Niro) gets tapped by his bosses to head the Tangiers Casino. At first, he's a great success in the job, but over the years, problems with his loose-cannon enforcer Nicky Santoro (Joe Pesci), his ex-hustler wife Ginger (Sharon Stone), her con-artist ex Lester Diamond (James Woods) and a handful of corrupt politicians put Sam in ever-increasing danger. Martin Scorsese directs this adaptation of Nicholas Pileggi's book.", "http://crimespreemag.com/blog/wp-content/uploads/2015/10/casino.jpg")
  ];

  constructor() { }

  addMovie(title: string, description: string, imageUrl: string) {
    const newMovie = new Movie(title, description, imageUrl);
    this.movies.push(newMovie);
  }

  deleteMovie(i: number) {
    this.movies.splice(i, 1);
  }

  getMovies(): Movie[] {
    return this.movies;
  }




}