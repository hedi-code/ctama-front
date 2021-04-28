import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { TokenStorageServiceService } from 'src/app/services/token-storage-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor(private tokenStorageService: TokenStorageServiceService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn$ = this.tokenStorageService.isLoggedIn;
  }

  quit() {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl("");
  }

}
