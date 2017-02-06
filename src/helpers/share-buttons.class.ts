
export const ShareProvider = {
    FACEBOOK: 'facebook',
    TWITTER: 'twitter',
    REDDIT: 'reddit',
    STUMBLEUPON: 'stumble',
    LINKEDIN: 'linkedin',
    GOOGLEPLUS: 'google',
    TUMBLR: 'tumblr',
    PINTEREST: 'pinterest',
    WHATSAPP: 'whatsapp'
};

export class ShareButton {

    constructor(public provider: string,
        public template: string,
        public classes: string) {
    }
}

export class ShareArgs {

    constructor(public url: string,
        public title?: string,
        public description?: string,
        public image?: string,
        public tags?: string) {
    }
}
