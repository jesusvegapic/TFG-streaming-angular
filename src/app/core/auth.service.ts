import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, of, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

import {environment} from '@env';
import {User} from '@core/user.model';
import {HttpService} from '@core/http.service';
import {Role} from '@core/role.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static END_POINT = environment.REST_USER + '/users/token';
  private user: User;
  password: string = undefined;
  private onLogin$ = new Subject<User>();

  constructor(private httpService: HttpService, private router: Router) {
  }

  login(email: string, password: string): Observable<User> {
    return this.httpService.authBasic(email, password)
      .post(AuthService.END_POINT)
      .pipe(
        map(jsonToken => {
          const jwtHelper = new JwtHelperService();
          this.user = jsonToken; // {token:jwt} => user.token = jwt
          this.user.email = jwtHelper.decodeToken(jsonToken.token).user;  // secret key is not necessary
          this.user.name = jwtHelper.decodeToken(jsonToken.token).name;
          this.user.role = jwtHelper.decodeToken(jsonToken.token).role;

          this.password = password;
          this.onLogin$.next(this.user);
          return this.user;
        })
      );
  }

  onLogin(): Observable<User> {
    return this.onLogin$.asObservable();
  }

  logout(): void {
    this.user = undefined;
    this.router.navigate(['']).then();
  }

  isAuthenticated(): boolean {
    return this.user != null && !(new JwtHelperService().isTokenExpired(this.user.token));
  }

  hasRoles(roles: Role[]): boolean {
    return this.isAuthenticated() && roles.includes(this.user.role);
  }

  isAdmin(): boolean {
    return this.hasRoles([Role.ADMIN]);
  }

  untilMod(): boolean {
    return this.hasRoles([Role.ADMIN, Role.MOD]);
  }

  isCustomer(): boolean {
    return this.hasRoles([Role.CLIENT]);
  }

  getEmail(): string {
    return this.user ? this.user.email : undefined;
  }

  getName(): string {
    return this.user ? this.user.name : '???';
  }

  getToken(): string {
    return this.user ? this.user.token : undefined;
  }

  getRole(): Role{
    return this.user  ? this.user.role : undefined;
  }

  getPassword(): string{
    return this.user ? this.password : undefined;
  }

  setEmail(email: string): void {
    this.user.email = email;
  }

  setUser(user: User): void{
    this.user = user;
  }

}