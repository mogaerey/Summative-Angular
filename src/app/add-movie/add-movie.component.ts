import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  movieForm = this.fb.group({
    title: [''],
    description: [''],
    imageUrl: ['']
  })
  valuesChangesSub: any
  constructor(private movieService: MovieService, private fb: FormBuilder) { 
    console.log(this.movieForm);
  }


  ngOnInit() {
    this.valuesChangesSub = this.movieForm.valueChanges.subscribe(
      (res: any) => {
        console.log(this.movieForm)
        console.log(res)
      },
      err => {
        console.log(`Error: ${err}`)
      },
      () => {
        console.log('Done')
      }
    );
  }
  ngOnDestroy() {
    if (this.valuesChangesSub) {
      this.valuesChangesSub.unsubscribe();
    }
  }

  onSubmit() {
    const title = this.movieForm.value.title;
    const description = this.movieForm.value.description;
    const imageUrl = this.movieForm.value.imageUrl;

    this.movieService.addMovie(title, description, imageUrl);
    this.onResetForm();
  }
  onResetForm() {
    this.movieForm.reset;
  }
}
