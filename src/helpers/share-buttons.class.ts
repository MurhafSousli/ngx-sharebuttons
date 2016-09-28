import {ShareProvider} from "./share-provider.enum";

export class ShareButton {

    constructor(public provider: ShareProvider,
                public template: string,
                public classes: string) {
    }
}

export class ShareArgs {

    constructor(public url: string,
                public text?: string,
                public image?: string,
                public hashtags?: string[]) {
    }
}