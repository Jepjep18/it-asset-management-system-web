import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardPcs } from 'app/models/Card';
import { environment } from 'environments/environment';
@Injectable({
    providedIn: 'root',
})
export class CardService {
    // private url = 'https://localhost:7233';
    private url = environment.apiUrl;  // Use environment configuration

    constructor(private http: HttpClient) {}

    public getCardData(): Observable<CardPcs[]> {
        return this.http.get<CardPcs[]>(`${this.url}/Card`);
    }

    public getCardDataId(id: string): Observable<CardPcs[]> {
        return this.http.get<CardPcs[]>(`${this.url}/Card/${id}`);
    }

    public CreateCardData(data: any): Observable<any> {
        return this.http.post(`${this.url}/Card`, data);
    }
}
