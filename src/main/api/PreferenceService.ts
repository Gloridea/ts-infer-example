export interface AppLayout {
    layerPanel: { isFolded: boolean };
    interactionPanel: { labelWidth: number, isFolded: boolean };
}

export class PreferenceService {
    writeLayout(layout: AppLayout): void {
    }

    readLayout(): AppLayout {
        return {
            layerPanel: {isFolded: false},
            interactionPanel: {labelWidth: 200, isFolded: false},
        };
    }

    on(eventType: 'error', listener: (errorType: string, message: string) => void): this;
    on(eventType: 'load', listener: () => void): this;
    on(eventType: 'change', listener: () => void): this;
    on(eventType: 'error' | 'load' | 'change', listener: (() => void) | ((errorType: string, message: string) => void)): this {
        return this;
    }
}