import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { MovieService, Movie } from '../movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  movies: Movie[] = [];
  displayList: boolean = true;
  title: string;
  newMovieText: string = "";
  movieIdsBeingEdited = {};
  movieBeingDisplayed: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }
  onToggleDisplay() {
    this.displayList = !this.displayList;
  }

  onDeleteMovie(i: number) {
    this.movieService.deleteMovie(i);
    this.getMovies();
  }

  onCreateNewMovie(title: string, description: string, imageUrl: string) {
    this.movieService.addMovie(title, description, imageUrl);
    this.newMovieText = "";
    this.getMovies();
  }

  onStartEditMovie(i: number) {
    this.movieIdsBeingEdited[i] = true;
  }

  onSaveEditMovie(i: number) {
    this.movieIdsBeingEdited[i] = false;
  }

  getMovies() {
    setTimeout(() => {
      this.movies = this.movieService.getMovies();
    }, 0);
  }

  onViewMovieDetails(movie: Movie) {
    this.movieBeingDisplayed = movie;
  }
}
