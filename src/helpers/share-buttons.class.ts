import { ShareProvider } from './share-provider.enum';


export class ShareButton {

    constructor(public provider: ShareProvider,
        public template: string,
        public classes: string) {
    }
}

export class ShareArgs {

    constructor(public url: string,
        public title?: string,
        public description?: string,
        public image?: string,
        public tags?: string,
        public via?: string,
        public mobile?: boolean) {
    }
}
