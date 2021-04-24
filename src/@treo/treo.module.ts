import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { TreoMediaWatcherModule } from '@treo/services/media-watcher/media-watcher.module';
import { TreoSplashScreenModule } from '@treo/services/splash-screen/splash-screen.module';
import { TreoTailwindConfigModule } from '@treo/services/tailwind/tailwind.module';
import { TreoUtilsModule } from '@treo/services/utils/utils.module';

@NgModule({
    imports  : [
        TreoMediaWatcherModule,
        TreoSplashScreenModule,
        TreoTailwindConfigModule,
        TreoUtilsModule
    ],
    providers: [
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill'
            }
        }
    ]
})
export class TreoModule
{
    /**
     * Constructor
     */
    constructor(@Optional() @SkipSelf() parentModule?: TreoModule)
    {
        if ( parentModule )
        {
            throw new Error('TreoModule has already been loaded. Import this module in the AppModule only!');
        }
    }
}
