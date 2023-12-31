import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BreedCard } from '../shared/breed-card.interface';
import { EMPTY, Observable } from 'rxjs';
import { ResponseDTO } from 'src/app/core/responseDTO.interface';
import { BreedsService } from '../shared/breeds.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-breed',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
  ],
  providers: [BreedsService],
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss'],
})
export class BreedComponent {
  params: BreedCard;
  breedImages: Observable<ResponseDTO<string[]>> = EMPTY;
  breedSubs: Observable<ResponseDTO<string[]>> = EMPTY;
  constructor(
    private route: ActivatedRoute,
    private breedsService: BreedsService
  ) {
    this.params = { breed: '' };
    this.route.paramMap.subscribe((params) => {
      const breed = params.get('breed')!;
      this.params = { breed };
      this.breedImages = this.breedsService.getBreedImages(breed);
      this.breedSubs = this.breedsService.getSubBreeds(breed);
    });
  }
}
