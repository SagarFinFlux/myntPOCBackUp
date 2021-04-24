import { NgModule } from '@angular/core';
import { TreoUtilsService } from '@treo/services/utils/utils.service';

@NgModule({
    providers: [
        TreoUtilsService
    ]
})
export class TreoUtilsModule
{
    /**
     * Constructor
     */
    constructor(private _treoUtilsService: TreoUtilsService)
    {
    }
}
