import { Injectable } from '@angular/core';
import { TreoDrawerComponent } from '@treo/components/drawer/drawer.component';

@Injectable({
    providedIn: 'root'
})
export class TreoDrawerService
{
    private _componentRegistry: Map<string, TreoDrawerComponent> = new Map<string, TreoDrawerComponent>();

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register drawer component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: TreoDrawerComponent): void
    {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister drawer component
     *
     * @param name
     */
    deregisterComponent(name: string): void
    {
        this._componentRegistry.delete(name);
    }

    /**
     * Get drawer component from the registry
     *
     * @param name
     */
    getComponent(name: string): TreoDrawerComponent | undefined
    {
        return this._componentRegistry.get(name);
    }
}
