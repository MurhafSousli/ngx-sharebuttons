import { ShareProvider, ShareButton, ShareArgs } from './index';

describe('ShareButton', () => {
    it('should create an instance with given values', () => {
        let button = new ShareButton(ShareProvider.FACEBOOK, '<i class="fa fa-facebook"></i>', 'fb-classes');
        expect(button).toBeTruthy();
        expect(button.provider).toEqual(ShareProvider.FACEBOOK);
        expect(button.template).toEqual('<i class="fa fa-facebook"></i>');
        expect(button.classes).toBe('fb-classes');
    });
});

describe('ShareArgs', () => {
    it('should create an instance with given values', () => {
        let args = new ShareArgs('http://www.mysite.com', 'My website', 'My website description', 'https://my/image.png', 'tag1,tag2');
        expect(args).toBeTruthy();
        expect(args.url).toBe('http://www.mysite.com');
        expect(args.title).toBe('My website');
        expect(args.description).toBe('My website description');
        expect(args.image).toBe('https://my/image.png');
        expect(args.tags).toBe('tag1,tag2');
    });

    it('should create an instance with sensible default values', () => {
        let args = new ShareArgs('http://www.mysite.com');
        expect(args).toBeTruthy();
        expect(args.url).toBe('http://www.mysite.com');
        expect(args.title).toBeUndefined();
        expect(args.description).toBeUndefined();
        expect(args.image).toBeUndefined();
        expect(args.tags).toBeUndefined();
    });
});
