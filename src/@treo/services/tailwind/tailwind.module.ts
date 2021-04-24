import { NgModule } from '@angular/core';
import { TreoTailwindService } from '@treo/services/tailwind/tailwind.service';

@NgModule({
    providers: [
        TreoTailwindService
    ]
})
export class TreoTailwindConfigModule
{
    /**
     * Constructor
     */
    constructor(private _treoTailwindConfigService: TreoTailwindService)
    {
    }
}
