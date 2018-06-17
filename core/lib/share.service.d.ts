import { BehaviorSubject } from 'rxjs';
import { IShareButton, ShareButtonsConfig } from './share.models';
export declare class ShareButtons {
    config: ShareButtonsConfig;
    config$: BehaviorSubject<ShareButtonsConfig>;
    constructor(config: ShareButtonsConfig);
    readonly prop: any;
    readonly twitterAccount: string;
    readonly theme: string;
    readonly windowSize: string;
    readonly url: string;
    readonly title: string;
    readonly description: string;
    readonly image: string;
    readonly tags: string;
    readonly autoSetMeta: boolean;
    readonly gaTracking: boolean;
    readonly size: number;
    setConfig(config: ShareButtonsConfig): void;
    addButton(name: string, data: IShareButton): void;
}
