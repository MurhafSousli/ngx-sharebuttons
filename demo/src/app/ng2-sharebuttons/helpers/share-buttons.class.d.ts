import { ShareProvider } from "./share-provider.enum";
export declare class ShareButton {
    provider: ShareProvider;
    template: string;
    classes: string;
    constructor(provider: ShareProvider, template: string, classes: string);
}
export declare class ShareArgs {
    url: string;
    title: string;
    description: string;
    image: string;
    tags: string;
    constructor(url: string, title?: string, description?: string, image?: string, tags?: string);
}
