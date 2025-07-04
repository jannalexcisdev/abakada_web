import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeaderComponent } from '../header/header.component';
import { UserService } from '../services/user/user.service';
import { UserModel } from '../models/user.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

@Component({
  selector: 'app-loan-encoding',
  standalone: true,
  imports: [NavigationComponent, HeaderComponent, ReactiveFormsModule,],
  templateUrl: './loan-encoding.component.html',
  styleUrl: './loan-encoding.component.css'
})
export class LoanEncodingComponent implements OnInit {
  debtorIdControl = new FormControl('');
  debtorName = '';
  debtorEmail = '';

  coborrowerIdControl = new FormControl('');
  coborrowerName = '';
  coborrowerEmail = '';

  guarantorIdControl = new FormControl('');
  guarantorName = '';
  guarantorEmail = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.debtorIdControl.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((id) => {
          if (!id) return EMPTY;
          return this.userService.getUser(+id).pipe(
            catchError(() => of(null))
          );
        })
      )
      .subscribe({
        next: (user: UserModel | null) => {
          if (user) {
            this.debtorName = `${user.firstName} ${user.lastName}`;
            this.debtorEmail = user.email ?? '';
          } else {
            this.debtorName = 'Not Found';
            this.debtorEmail = 'Not Found';
          }
        }
      });

      this.coborrowerIdControl.valueChanges.pipe(
        debounceTime(1000), switchMap((id)=> {
          if (!id) return EMPTY;
          return this.userService.getUser(+id).pipe(
            catchError(()=> of(null))
          )
        })
      )
      .subscribe({
        next:(user:UserModel | null) => {
          if (user) {
            this.coborrowerName = `${user.firstName} ${user.lastName}`;
            this.coborrowerEmail = user.email ?? '';
          } else {
            this.coborrowerName = 'Not Found';
            this.coborrowerEmail = 'Not Found'
          }
        }
      })


      this.guarantorIdControl.valueChanges.pipe(
        debounceTime(1000),
        switchMap ((id) => {
          if (!id) return EMPTY;
          return this.userService.getUser(+id).pipe(
            catchError(()=>of(null))
          )
        })
      )
      .subscribe({
      next:(user:UserModel | null) => {
        if (user) {
          this.guarantorName = `${user.firstName} ${user.lastName}`;
          this.guarantorEmail = user.email ?? '';
        } else {
          this.guarantorName = 'Not Found';
          this.guarantorEmail = 'Not Found';
        }
      }
      })



  }
}