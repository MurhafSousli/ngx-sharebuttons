import {ShareProvider} from "./share-provider.enum";

export class ShareButton {

    constructor(public provider: ShareProvider,
                public template: string,
                public sharer: string,
                public classes: string) {
    }
}