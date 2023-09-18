import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreedCard } from '../shared/breed-card.interface';
import { EMPTY, Observable } from 'rxjs';
import { ResponseDTO } from 'src/app/core/responseDTO.interface';
import { ActivatedRoute } from '@angular/router';
import { BreedsService } from '../shared/breeds.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-sub-breed',
  standalone: true,
  imports: [CommonModule, HttpClientModule,MatButtonModule, MatCardModule],
  providers: [BreedsService],
  templateUrl: './sub-breed.component.html',
  styleUrls: ['./sub-breed.component.scss'],
})
export class SubBreedComponent {
  params: BreedCard;
  subBreedImg: Observable<ResponseDTO<string>> = EMPTY;
  constructor(
    private route: ActivatedRoute,
    private breedsService: BreedsService
  ) {
    this.params = { breed: '' };
    this.route.paramMap.subscribe((params) => {
      const breed = params.get('breed')!;
      const subBreed = params.get('subbreed')!;
      this.params = { breed };
      this.params.subBreed = subBreed;
      this.subBreedImg = this.breedsService.getSubBreedImages(breed, subBreed);
    });
  }
}
