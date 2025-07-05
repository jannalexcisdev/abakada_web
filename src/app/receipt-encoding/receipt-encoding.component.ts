import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeaderComponent } from '../header/header.component';
import { UserService } from '../services/user/user.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { EMPTY, of } from 'rxjs';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';
import { UserModel } from '../models/user.model';


@Component({
  selector: 'app-receipt-encoding',
  standalone: true,
  imports: [NavigationComponent, HeaderComponent, ReactiveFormsModule],
  templateUrl: './receipt-encoding.component.html',
  styleUrl: './receipt-encoding.component.css'
})
export class ReceiptEncodingComponent implements OnInit {
  loanControlNo = new FormControl('');
  loanName = '';
  loanBalance = '';
  
  receiptNo = new FormControl('');
  receipt='';

  constructor (private userService:UserService) {}

  ngOnInit(): void {
    this.loanControlNo.valueChanges.pipe(
      debounceTime(1000),
      switchMap((id)=> {
        if (!id) return EMPTY
        return this.userService.getUser(+id).pipe(
          catchError(()=>of(null))
        )
      })
    ).subscribe({
      next: (userModel:UserModel | null) => {
        if (userModel) {
          this.loanName = `${userModel?.firstName} ${userModel?.lastName}`
          this.loanBalance = `${userModel.firstName} balance dapat`
        } else {
          this.loanName = "Loan Name Not Found"
          this.loanBalance = "Loan Balance Not Found"
        }
      }
    })

    this.receiptNo.valueChanges.pipe(
      debounceTime(1000),
      switchMap((id)=> {
        if (!id) return EMPTY
        return this.userService.getUser(+id).pipe(
          catchError(()=>of(null))
        )
      })
    ).subscribe({
      next:(userModel:UserModel | null) => {
        if (userModel) {
          this.receipt = `${userModel.lastName} receipt dapat`
        } else {
          this.receipt = "Receipt Not Found"
        }

      }
    })
  }

}
