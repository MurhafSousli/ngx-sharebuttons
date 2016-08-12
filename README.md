![Alt text](/assets/cover.png?raw=true "Optional Title")
# Angular 2 Share Buttons

Simple, lightweight, customizable share buttons. [see it in action](http://murhafsousli.com/project)

Supported services are:

Facebook
Twitter
Pinterest
Google
Tumbler
Reddit
StumbleUpOn
LinkedIn

## installation

Install it with npm

`npm install ng2-sharebuttons --save`

##Usage:

The basic usage has no inputs
```
<share-buttons></share-buttons>
```
### Share buttons
By default all listed buttons will be displayed unless you disable them
```
@Input() facebook: boolean = true;
@Input() twitter: boolean = true;
@Input() linkedIn: boolean = true;
@Input() tumblr: boolean = true;
@Input() google: boolean = true;
@Input() pinterest: boolean = true;
@Input() stumbleUpOn: boolean = true;
@Input() reddit: boolean = true;

<share-buttons [tumbler]="false"></share-buttons>
```
### Meta tags

by default it will get them from the page head, leave them empty unless:

 1 - The meta tags aren't set properly.
 2 - if your using multiple instances of share-buttons, ex: a share button instance foreach post in a blog page

```
  @Input() title;
  @Input() description;
  @Input() image;
  @Input() url;

  <share-button [title]="post.title" [image]="post.image" [url]="post.url"></share-button>
```

### Popup share window
Set the popup window dimension. (default: 500x300)
```
<share-buttons [height]="600" [width]="400"></share-buttons>
```
### Share title
Set the title before share buttons wrapper
```
<share-buttons [shareTitle]="Share this"></share-buttons>
```
##Twitter account
Set your twitter account to add "via @YourAccount" to visitor's tweet
```
<share-buttons [twitterAccount]="@MurhafSousli"></share-buttons>
```

##Customization:

    Coming Soon


##TODOs:

- Whatsapp button
- Share counter

<a name="issues"/>
## Issues


If you identify any errors in this component, or have an idea for an improvement, please open an [issue](https://github.com/MurhafSousli/ng2-wp-api/issues). I am excited to see what the community thinks of this project, and I would love your input!

## Author

 **Murhaf Sousli**

 - [github/murhafsousli](https://github.com/MurhafSousli)
 - [twitter/murhafsousli](https://twitter.com/MurhafSousli)

<a name="license"/>
## License

[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](/LICENSE)
