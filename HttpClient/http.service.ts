import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/toPromise';
import { Response } from '@angular/http';
import { HttpParams } from '@angular/common/http';

declare var _: any

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {
    }

    getHeaders(): any {
        return new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    }
    getHeadersForHtml(): any {
        return new HttpHeaders().set('Accept', 'text/plain')
    }

    get(url: string): Promise<any> {
        let params = new HttpParams().set('noCache', new Date().getTime().toString());
        var options;
        options = { headers: this.getHeaders(), params: params };
        return this.http.get(url, options).toPromise();
    }

    post(url: string, requestBody: any, ...params: { [key: string]: any }[]): Promise<any> {

        let options = _(params).reduce((memo, value) => _(memo).extend(value), {});
        if (options.headers)
            _(options.headers).extend(this.getHeaders());
        else options.headers = this.getHeaders();
        return this.http.post(url, requestBody, options).toPromise();

    }

    put(url: string, requestBody: Object): Promise<any> {

        let options = { headers: this.getHeaders() };

        return this.http.put(url, requestBody, options).toPromise();
    }

    delete(url: string, requestBody: Object): Promise<any> {
        var options = { headers: this.getHeaders() };

        return this.http.post(url, requestBody, options).map((response) => {
            return response;
        }).toPromise();
    }

    getContactHTML(url: string): Promise<any> {
        let params = new HttpParams().set('noCache', new Date().getTime().toString());
        return this.http.get(url, { headers: this.getHeadersForHtml(), responseType: 'text', params: params }).toPromise();
    }

    postWithoutMapping(url: string, requestBody: Object): Promise<any> {
        var options = { headers: this.getHeaders() };

        return this.http.post(url, requestBody, options).toPromise();
    }
}
