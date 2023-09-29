import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private apiUrl = 'https://api-cv-service-luiscocotleuv.cloud.okteto.net/'; 

  constructor(private http: HttpClient) { }

  getSkills(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/skills`)
      .pipe(
        map((response: any) => response.skills)
      );
  }
}