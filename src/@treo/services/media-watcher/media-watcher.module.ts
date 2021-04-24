import { NgModule } from '@angular/core';
import { TreoMediaWatcherService } from '@treo/services/media-watcher/media-watcher.service';

@NgModule({
    providers: [
        TreoMediaWatcherService
    ]
})
export class TreoMediaWatcherModule
{
    /**
     * Constructor
     */
    constructor(private _treoMediaWatcherService: TreoMediaWatcherService)
    {
    }
}
