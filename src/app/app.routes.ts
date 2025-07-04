import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoanEncodingComponent } from './loan-encoding/loan-encoding.component';
import { ReceiptEncodingComponent } from './receipt-encoding/receipt-encoding.component';
import { SettlePaymentComponent } from './settle-payment/settle-payment.component';
import { CashoutEncodingComponent } from './cashout-encoding/cashout-encoding.component';
import { LoanProfileComponent } from './loan-profile/loan-profile.component';
import { ReceiptDatabaseComponent } from './receipt-database/receipt-database.component';
import { CashoutsComponent } from './cashouts/cashouts.component';
import { AbakadaAuditingComponent } from './abakada-auditing/abakada-auditing.component';
import { MasterListComponent } from './master-list/master-list.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path:'register',
        component: RegisterComponent,
    },
    {
        path:'forgot-password',
        component:ForgotPasswordComponent,
    },
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'loan-encoding',
        component:LoanEncodingComponent,
    },
    {
        path: 'receipt-encoding',
        component:ReceiptEncodingComponent,
    },
    {
        path:'settle-payment',
        component:SettlePaymentComponent,
    },
    {
        path:'cashout-encoding',
        component:CashoutEncodingComponent,
    },
    {
        path:'loan-profile',
        component:LoanProfileComponent,
    },
    {
        path:'receipt-database',
        component:ReceiptDatabaseComponent,
    },
    {
        path:'cashouts',
        component:CashoutsComponent,
    },
    {
        path:'abakada-auditing',
        component:AbakadaAuditingComponent,
    },
    {
        path:'master-list',
        component: MasterListComponent
    }
];
