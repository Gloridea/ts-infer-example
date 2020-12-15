export interface ISize {
    width: number;
    height: number;
}

export class PreviewWindowService {
    windowId = '1234';

    isVisible(): boolean {
        return true;
    }

    async getSize(): Promise<ISize> {
        return {width: 100, height: 100};
    }

    on(eventType: 'resize', listener: (before: ISize, after: ISize) => void): this {
        return this;
    }
}