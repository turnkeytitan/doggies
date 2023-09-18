import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { ResponseDTO } from 'src/app/core/responseDTO.interface';

@Injectable({
  providedIn: 'platform',
})
export class BreedsService {
  private url = environment.API_URL;
  constructor(private http: HttpClient) {}
  getAll(): Observable<ResponseDTO<Record<string, string[]>>> {
    return this.http.get<ResponseDTO<Record<string, string[]>>>(
      `${this.url}breeds/list/all`,
    );
  }
}
