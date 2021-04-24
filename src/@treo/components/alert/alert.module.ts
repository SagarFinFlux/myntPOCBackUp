import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TreoAlertComponent } from '@treo/components/alert/alert.component';

@NgModule({
    declarations: [
        TreoAlertComponent
    ],
    imports     : [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        TreoAlertComponent
    ]
})
export class TreoAlertModule
{
}
