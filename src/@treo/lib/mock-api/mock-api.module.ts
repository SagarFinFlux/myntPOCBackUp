import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TREO_MOCK_API_DEFAULT_DELAY } from '@treo/lib/mock-api/mock-api.constants';
import { TreoMockApiInterceptor } from '@treo/lib/mock-api/mock-api.interceptor';

@NgModule({
    providers: [
        {
            provide : HTTP_INTERCEPTORS,
            useClass: TreoMockApiInterceptor,
            multi   : true
        }
    ]
})
export class TreoMockApiModule
{
    /**
     * TreoMockApi module default configuration.
     *
     * @param mockApiServices - Array of services that register mock API handlers
     * @param config - Configuration options
     * @param config.delay - Default delay value in milliseconds to apply all responses
     */
    static forRoot(mockApiServices: any[], config?: { delay?: number }): ModuleWithProviders<TreoMockApiModule>
    {
        return {
            ngModule : TreoMockApiModule,
            providers: [
                {
                    provide   : APP_INITIALIZER,
                    deps      : [...mockApiServices],
                    useFactory: () => () => null,
                    multi     : true
                },
                {
                    provide : TREO_MOCK_API_DEFAULT_DELAY,
                    useValue: config?.delay ?? 0
                }
            ]
        };
    }
}
