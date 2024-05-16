import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Aquí puedes agregar lógica para agregar el encabezado de autenticación a las solicitudes HTTP
    // Por ejemplo, puedes agregar un encabezado con un token de autenticación
    const authToken = '51278da22401faa2ceed489b55b6a2b3';
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return next.handle(authRequest);
  }
}
