import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreedsService } from '../shared/breeds.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subscription, map } from 'rxjs';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-breed-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [BreedsService],
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.scss'],
})
export class BreedListComponent implements OnDestroy {
  filter: FormControl = new FormControl('');
  $breedList: Subscription;
  breedList: string[];
  breedListFiltered: Observable<string[]>;
  constructor(private breedsService: BreedsService) {
    this.breedList = [];
    this.$breedList = this.breedsService.getAll().subscribe((res) => {
      this.breedList = Object.keys(res.message);
      this.filter.setValue('');
    });
    this.breedListFiltered = this.filter.valueChanges.pipe(
      map((value) => {
        return this.breedList.filter((name) => {
          return name.includes(value);
        });
      }),
    );
  }
  ngOnDestroy(): void {
    this.$breedList.unsubscribe();
  }
}
