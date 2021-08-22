# Changelog

## 8.1.0

- Upgrade to Angular 12
- fix(build): Fix package to work with ivy, closes [#523](https://github.com/MurhafSousli/ngx-sharebuttons/issues/523) in [096d62a](https://github.com/MurhafSousli/ngx-sharebuttons/commit/096d62aff0aa9c8d6c9bb54561b713378bdd0081).

## 8.0.5

- Upgrade to Angular 11
- feat(core): Add unit tests

## 8.0.4

- feat(core): Add Viber share button, closes [#380](https://github.com/MurhafSousli/ngx-sharebuttons/issues/380) in [77a3904](https://github.com/MurhafSousli/ngx-sharebuttons/pull/507/commits/77a3904ad58dc089f5177fe00d7433829c1c8a92).

## 8.0.3

- feat(core): Use Angular CDK Clipboard module for the copy link button, in [431cf9a](https://github.com/MurhafSousli/ngx-sharebuttons/pull/510/commits/431cf9af4f246cb741375d9e0784584a4e52cf54).

## 8.0.2

- fix(core): Update Xing share URL, closes [#498](https://github.com/MurhafSousli/ngx-sharebuttons/issues/498) in [4b0c745](https://github.com/JustDoItSascha/ngx-sharebuttons/commit/4b0c7458779a87d6823b81ed21696dab5776692f).

## 8.0.1

- fix(theme): button shadow cut off in Safari, closes [#399](https://github.com/MurhafSousli/ngx-sharebuttons/issues/399) in [b19c831](https://github.com/MurhafSousli/ngx-sharebuttons/pull/454/commits/b19c8313894c098b24ec327d6bff35657ffa5df4).
- fix(share-button): Skip empty params in shareUrl serialization, closes [#478](https://github.com/MurhafSousli/ngx-sharebuttons/issues/478) in [7848d29](https://github.com/MurhafSousli/ngx-sharebuttons/pull/479/commits/7848d294ff6087542c530e361ba570972695adbf).
- fix(Pinterest): Remove country specific default for pinterest domain, closes [#475](https://github.com/MurhafSousli/ngx-sharebuttons/issues/475) in [c3f418f](https://github.com/MurhafSousli/ngx-sharebuttons/pull/476/commits/c3f418f3effb2321d3fe252b8e5884a5df1d7545).

### Possible breaking changes:

#### Share pop-up component:

- refactor(share-popup): The CDK Overlay styles have been removed from the package, if you are using non-material project, you will need to import it manually in your global styles

```scss
@import '~@angular/cdk/overlay-prebuilt.css';
```

## 8.0.0

#### Features:

- feat(icons): Add `ShareIconsModule` to simplify importing the share icons.
- feat(popup): Add share buttons pop up module **(BETA)**.
- feat(core): Ability to define sharer method and target per button, closes [#449](https://github.com/MurhafSousli/ngx-sharebuttons/issues/449).
- feat(core): Ability to override share buttons params from the share config.
- feat(core): Ability to add custom share button.
- feat(core): Ability to define custom share template for each button.
- feat(core): Add IVY Support, closes [#352](https://github.com/MurhafSousli/ngx-sharebuttons/issues/352).
- feat(button, buttons): Allow disabling the share buttons.
- feat(core): Simplify access the text, icon and color of the share buttons.
- feat(button): Use SMS icon for the SMS button.

#### Bugs:

- fix(icons): Fix SSR errors in express console, closes [#453](https://github.com/MurhafSousli/ngx-sharebuttons/issues/453) in [b2e8e4c](https://github.com/MurhafSousli/ngx-sharebuttons/pull/432/commits/b2e8e4c3f0b96954954a18de578cc95aded115a3).
- fix(core): Fix build error in Angular 9, closes [#429](https://github.com/MurhafSousli/ngx-sharebuttons/issues/429).
- fix(core): Remove G+ button, closes [#427](https://github.com/MurhafSousli/ngx-sharebuttons/issues/427).
- fix(buttons): Check if `[include]` and `[exclude]` inputs are `null`.
- fix(buttons): fix the expand button layout and styles.
- fix(buttons): clean up remove [showCount] input.
- fix(button, buttons): Fix buttons colors in print preview (for print button).
- fix(button): Add `type="button"`, so it doesn't submit forms, closes [#379](https://github.com/MurhafSousli/ngx-sharebuttons/issues/379).
- fix(themes): Make the main share button styles global, this is useful for the external buttons / components can use the share buttons styles.
- fix(theme): Add box-shadow transition on click in circle-dark theme, in [74a7f1e](https://github.com/MurhafSousli/ngx-sharebuttons/pull/432/commits/74a7f1e013658b6ac0788a6783aea2a019307939).
- cleanup: Remove share count, closes [#407](https://github.com/MurhafSousli/ngx-sharebuttons/issues/407).

### Breaking changes

**Before:**

- Packages were publish into 3 different sub-packages `@ngx-share/core`, `@ngx-share/button` and `@ngx-share/buttons`.
- Themes were distributed as SCSS and CSS files.

**After:**

- Packages are combined into 1 package `ngx-sharebuttons`, `ngx-sharebuttons/button` and `ngx-sharebuttons/buttons`
- Themes are distributed as SCSS files only.
- Themes are imported from `ngx-sharebuttons/themes/{{themeName}}`


## 7.1.4

- fix(core): Fix Whatsapp for iOS Issue, closes [#386](https://github.com/MurhafSousli/ngx-sharebuttons/issues/386) in [4c3858f](https://github.com/MurhafSousli/ngx-sharebuttons/pull/406/commits/4c3858fe31e766bb341b89b3c8b5667f51b6ecfe).

## 7.1.3

- fix(core): Removes the india localization for the Pinterest button, closes [#396](https://github.com/MurhafSousli/ngx-sharebuttons/issues/396) in [8097fac](https://github.com/MurhafSousli/ngx-sharebuttons/pull/403/commits/8097fac214cd9ad48882926b5ab7f0b047a932e5).

## 7.1.2

- fix(core): fix Closed and Opened Outputs, closes [#367](https://github.com/MurhafSousli/ngx-sharebuttons/issues/367) in [fb9bbbb](https://github.com/MurhafSousli/ngx-sharebuttons/pull/368/commits/fb9bbbbe793d2260f21b36da208e109373900854).
- fix(core): fix WhatsApp not opening in Chrome on IOS 12, closes [#366](https://github.com/MurhafSousli/ngx-sharebuttons/issues/366)
[7c77f0a](https://github.com/MurhafSousli/ngx-sharebuttons/pull/368/commits/7c77f0a0c17e05bd922c04638bcf6dd09afa8e3a).

## 7.1.1

- feat(core): Add `debug` option to ShareButtonsConfig to log sharer URL, in [7e47bef](https://github.com/MurhafSousli/ngx-sharebuttons/pull/363/commits/7e47befe54f79b8bb289a21b5f1fee4f366e82cb).
- fix(core): undefined URL in `Email`, `SMS`, `WhatsApp` buttons, closes [#361](https://github.com/MurhafSousli/ngx-sharebuttons/issues/361) in [debed2b](https://github.com/MurhafSousli/ngx-sharebuttons/pull/363/commits/debed2b7c6f2ba5a0da555c63aa6859c0918b26d).
- fix(core): Rename`_metaTags` to `_supportedMetaTags` in `WhatsApp` button, in [52dc70d](https://github.com/MurhafSousli/ngx-sharebuttons/pull/363/commits/52dc70dfde236bce1cf361319c677ffc987970fb).
- fix(core): `Copy` button, closes [#360](https://github.com/MurhafSousli/ngx-sharebuttons/issues/360) in [4010a82](https://github.com/MurhafSousli/ngx-sharebuttons/pull/363/commits/4010a82d0261bad1c181b2460a2b4b2912c07a01).
- enhance(core): Warn when `Pinterest` image parameter is undefined, in [8116614](https://github.com/MurhafSousli/ngx-sharebuttons/pull/363/commits/8116614d152eb96efe73a2a515e3c490120ab779).
- enhance(core): Update `WhatsApp` sharer URL, in [6dc7414](https://github.com/MurhafSousli/ngx-sharebuttons/pull/363/commits/6dc74145c42146372a301b3701f7c9664a52aec6).
- regression: Remove URL from `Telegram` message since its already supported, in [f10189a](https://github.com/MurhafSousli/ngx-sharebuttons/pull/363/commits/f10189a8f32be9a779bcf47f7dd8f5007f616905).

## 7.1.0

- feat(core): Add Line button, closes [#357](https://github.com/MurhafSousli/ngx-sharebuttons/issues/357) in [a0385eb](https://github.com/MurhafSousli/ngx-sharebuttons/commit/a0385eb86896c71b9c5339d0dc05547e635b4d9e).


## 7.1.0-beta.1

- Refactor share function to run sync to fix the issue on IOS 12, closes [#351](https://github.com/MurhafSousli/ngx-sharebuttons/issues/351) in [
05abd1c](https://github.com/MurhafSousli/ngx-sharebuttons/commit/05abd1c14ae888aa6c268692898afc7e72fee7a5).
- Remove `StumbUpOn` button and replace it with `Mix` button.
- Remove `forRoot` usage, use `withConfig()` for custom config.

### Breaking changes

- The function `forRoot()` has been removed from all share modules.
- `ShareButtonConfig` has been flattened.
- `StumbUpOn` share button has been removed.

## 7.0.0

## 7.0.0-beta.1

- regret(PrintOperator): use map instead of tap operator in the print operator, this fix opening share pop up when the print button is clicked, in [74c2396](https://github.com/MurhafSousli/ngx-sharebuttons/pull/348/commits/74c23960a25e1f383eb196f08f067f7c7ef67d7d).

## 7.0.0-beta.0

- enhance(ShareDirective): Use rxjs interval to poll for window closed event, in [46f897c](https://github.com/MurhafSousli/ngx-sharebuttons/pull/347/commits/46f897ca9b510de56cca2b682bfeb2791da0e050).
- enhance(ShareDirective): Use `Meta` service instead of `document` to get the meta tags content, in [9342b63](https://github.com/MurhafSousli/ngx-sharebuttons/pull/347/commits/9342b63218303988ce498359d38ebba854b97ac4).
- enhance(ShareDirective): Use the CDK `Platform` service to get the platform type, in [55b9495](https://github.com/MurhafSousli/ngx-sharebuttons/pull/347/commits/10d4760723d70c218366302a4e0bb65fe47d6bb0).
- enhance(ShareDirective): Query meta tags using property or name, in [55b9495](https://github.com/MurhafSousli/ngx-sharebuttons/pull/347/commits/55b9495e1823f835dba3a487a577425fd28268c0).
- enhance(ShareDirective): Add kebab-case selector, in [55b9495](https://github.com/MurhafSousli/ngx-sharebuttons/pull/347/commits/be2c10019aae3a9d715a83689de72aa2f64c68f6).
- enhance(ShareButton, ShareButtons): Load base styles internally.
- refactor(ShareDirective): Do not auto-set `[via]` input from `twitter-site` meta tag, in [4bcd5e0](https://github.com/MurhafSousli/ngx-sharebuttons/pull/347/commits/4bcd5e0021f28358673e7c11a25a09d1a0e8edbb).
- fix(ShareProps): Fix iOS SMS Share Link, closes [#283](https://github.com/MurhafSousli/ngx-sharebuttons/issues/283) in [143aaa7](https://github.com/MurhafSousli/ngx-sharebuttons/pull/335/commits/143aaa7365a07c44d6c42ed8db82dcd7b0b38b20).
- refactor(ShareModule): Provide `ShareButtons` service using `providedIn: 'root'`, in [b2c698f](https://github.com/MurhafSousli/ngx-sharebuttons/pull/347/commits/b2c698f011f950c17aa9f17571db361075b9b663).
- refactor(ShareProps): Remove **Reddit** share count, in [dcef59b](https://github.com/MurhafSousli/ngx-sharebuttons/pull/347/commits/dcef59be8954f9606586304ba4fff5dccaf3a37e).
- Fix and update peerDependencies for Angular >= 6, in [8fd68e1](https://github.com/MurhafSousli/ngx-sharebuttons/pull/347/commits/8fd68e1e5b3a0eea66973be75228d578746e860e).

### Breaking changes:

- If you use any of the following classes, they have been renamed:

  - `ShareButtons` service => `ShareService`
  - `ShareDirective` directive => `ShareDirective`
  - `ShareButtonComponent` component => `ShareButton`
  - `ShareButtonsComponent` component => `ShareButtons`

- **Reddit** share count API seems to be deprecated from their side, therefore share count has been removed from Reddit share button.
- For `<share-buttons>` and `<share-button>` components, no need to import the default styles anymore.
- Also note that the path to themes directory has been flattened (`/styles/` directory has been removed)

#### Before

```css
@import '~@ngx-share/button/styles/share-buttons'; /** this line is no longer needed */
@import '~@ngx-share/button/styles/themes/modern/modern-dark-theme';
```

#### After

```css
@import '~@ngx-share/button/themes/modern/modern-dark-theme';
```

## 6.0.1

- fix(ShareButtonsModule): Remove `HttpClientModule` from `ShareButtonsModule`, closes [#297](https://github.com/MurhafSousli/ngx-sharebuttons/issues/297) in [a503936](https://github.com/MurhafSousli/ngx-sharebuttons/commit/a503936c754274948bc9aa92ee5b8d94e71fc503).

## 6.0.0

- Angular 6 support, closes [#274](https://github.com/MurhafSousli/ngx-sharebuttons/issues/274).
- fix(core): Use icon alias name in the share props instead of the icon object itself, closes [#280](https://github.com/MurhafSousli/ngx-sharebuttons/issues/280).
- feat(ShareDirective): Add `aria-label` attribute to share buttons, closes [#277](https://github.com/MurhafSousli/ngx-sharebuttons/issues/277).
- feat(ShareButtons): Enable custom icons for the expand button, remove the hard-coded icons, closes [#289](https://github.com/MurhafSousli/ngx-sharebuttons/issues/289).
- refactor(ShareButtons): Call `stateWorker$.complete()` on component destroy.
- refactor(ShareButtons): Use `private` on variables and functions when they should be.
- Add `CONTRIBUTION.md` for plugin development.
- refactor(core): Remove all FontAwesome peer packages dependencies from `"@ngx-share/core`.
- refactor(button): Use only `@fortawesome/angular-fontawesome` as a peer dependency for `"@ngx-share/button`.
- refactor(buttons): Use only `@fortawesome/angular-fontawesome` as a peer dependency for `"@ngx-share/buttons`.
- refactor(util): Use Observable instead of Promise for `copyToClipboard()`.


### Breaking changes:

- The plugin now uses Angular-FontAwesome [library method](https://github.com/FortAwesome/angular-fontawesome#using-the-icon-library) instead of the "Explicit reference" method to import the icons.

**Before**:

The plugin used to load the default icons from FontAwesome.

**After**:

The plugin does not load FontAwesome icons out of the box. The user will have to import them manually

Example:
```ts
import { ShareButtonsModule } from '@ngx-share/buttons';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook } from '@fortawesome/free-brand-svg-icons/faFacebook';
import { faTwitter } from '@fortawesome/free-brand-svg-icons/faTwitter';
import { faLinkedinIn } from '@fortawesome/free-brand-svg-icons/faLinkedinIn';

const icons = [faFacebook, faTwitter, faLinkedinIn];

// Add the icons you want to use
library.add(...icons);

@NgModule({
  imports: [
    HttpClientModule,
    ShareButtonsModule.forRoot()
  ]
})
```

**NOTE:** Use the deep link to import the icon to keep the package size to the minimum, see **@robbaman** comment in [@angular-fontawesome/34](https://github.com/FortAwesome/angular-fontawesome/issues/34#issuecomment-388919807).

## 5.3.1

- fix(ShareButtons): Hide expand button, closes [#255](https://github.com/MurhafSousli/ngx-sharebuttons/issues/255) in [#256](https://github.com/MurhafSousli/ngx-sharebuttons/pull/256).
- fix(Build Error in 5.3.0): Set css variable on expand button through the component instead of the style, closes [#254](https://github.com/MurhafSousli/ngx-sharebuttons/issues/254) in [#527](https://github.com/MurhafSousli/ngx-sharebuttons/pull/257).
- clean up styles
- refactor css variable: change $sb-more variable name to $sb-expand
- update FontAwesome peerDependencies

## 5.3.0 (has a build issue)

- refactor(ShareButtons): Wrap expand button in its own component.
- fix(ShareDirective): Set custom button color with css variable.
- fix(Universal:ShareDirective): Check for browser platform before creating a share button, closes [#251](https://github.com/MurhafSousli/ngx-sharebuttons/issues/251).
- fix(Universal:ShareButton): Check if button.ref is defined in component template, closes [#251](https://github.com/MurhafSousli/ngx-sharebuttons/issues/251).
- fix(ShareButton): Share counts are requested even when showCount is false, fixes [#253](https://github.com/MurhafSousli/ngx-sharebuttons/issues/253).
- enhancement(Themes): Improve styles.
- enhancement(Share Icons): Icons are now rendered as SVG elements.

### Features:

- feat(Prop): Add SMS button.
- feat(ShareButton): Add `[icon]` input.
- feat(Share Icons): Add only the share buttons icons from FontAwesome instead of all icons, closes [#252](https://github.com/MurhafSousli/ngx-sharebuttons/issues/252).
- feat(ShareDirective): Add `[autoSetMeta]` input to all components and global config.

When `autoSetMeta` is **true**, the meta tags inputs `url`, `title`, `description` and `image` will be initialized from the SEO meta tags.

 > set `autoSetMeta` to **false**, if the share buttons url does not point to the current url, e.g. displaying a list of articles each one with share buttons.

### Breaking changes

- refactor(ShareButtonsModule): [angular-fontawesome](https://github.com/FortAwesome/angular-fontawesome) has become a peer dependency.
- refactor(Props): Button icon is type of `IconProp` which is imported from the @fortawesome icons package.

**Before:**

style.scss

```cs
@import "~@fortawesome/fontawesome-free-webfonts/css/fa-brands.css";
@import "~@fortawesome/fontawesome-free-webfonts/css/fa-solid.css";
@import "~@fortawesome/fontawesome-free-webfonts/css/fontawesome.css";
@import '~@ngx-share/button/styles/share-buttons';
@import '~@ngx-share/button/styles/themes/default/default-theme';
```

Override share button icon

```ts
ShareButtonsModule.forRoot({
  prop: {
    facebook: {
      icon: 'fa fab-facebook-f'
    }
  }
}
```

**After:**

style.scss

```css
@import '~@ngx-share/button/styles/share-buttons';
@import '~@ngx-share/button/styles/themes/default/default-theme';
```

Override share button icon

```ts
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

ShareButtonsModule.forRoot({
  prop: {
    facebook: {
      icon: faFacebookF
    }
  }
}
```

- refactor(ShareDirective): Remove the prefix `sb` from the share directive inputs, closes [#250](https://github.com/MurhafSousli/ngx-sharebuttons/issues/250).

```
[sbUrl] => [url]
[sbTitle] => [title]
[sbDescription] => [description]
[sbImage] => [image]
[sbTags] => [tags]
(sbCount) => (count)
(sbOpened) => (opened)
(sbClosed) => (closed)
```

## 5.2.0 (has universal issue)

- refactor(ShareButtonsService): Initialize meta tags from document head 'og' meta tags.
- refactor(ShareButtonsService): Add `url` as a meta tag property to the global config.
- refactor(ShareDirective): Initialize meta tags inputs from the global config.
- refactor(Props): Add url as meta tag property.
- refactor(Operators): Removes Pinterest operator since description and image meta tags are being set from the service.
- refactor(Operators): Removes None operator since url became part of the meta tags.
- refactor(Operators): Changes `EmailOperator` to `urlInMessageOperator`
- refactor(Utils): Move `getOS()` and `getValidUrl` to utils file and remove encodeUriComponent.
- refactor(Utils): Do not encode the url in `getValidUrl` function since the url becomes a meta tag.
- fix(WhatsApp): Adds share URL to message body, closes [#239](https://github.com/MurhafSousli/ngx-sharebuttons/issues/239)


### Note:

Now the meta tags are initialized from document head meta tags (og:title, og:description, og:image, og:url) if they exist, This means that if you use SSR you don't need to set them manually.

### No breaking changes

## 5.1.0

- feat(ShareButtons): Adds Messenger button (Mobile only), closes [#233](https://github.com/MurhafSousli/ngx-sharebuttons/issues/233).
- feat(ShareButtons): Adds Xing button, closes [#232](https://github.com/MurhafSousli/ngx-sharebuttons/issues/232).
- feat(ShareButtons): Use FontAwesome 5 icons by default, closes[#219](https://github.com/MurhafSousli/ngx-sharebuttons/issues/219).
- fix(operators): Copy button is not working in ios devices, closes [#223](https://github.com/MurhafSousli/ngx-sharebuttons/issues/223).
- fix(operators): Copy button tap is causing keypad to open on ios devices.
- fix(ShareButtonsService): Allow adding custom share buttons, closes[#222](https://github.com/MurhafSousli/ngx-sharebuttons/issues/222).
- refactor(ShareDirective): Make sure buttons has the sharer link before opening share dialog.
- enhancements(ShareButton, ShareButtons): Remove white spaces from components templates.
- enhancements(ShareButton, ShareButtons): Button color can be customized from prop, no need to override css variables manually.
- enhancements(ShareButton, ShareButtons): Improve themes styles.

### Breaking changes:

- refactor(ShareButtonService): rename the function `registerButton()` to `addButton()`.
- Flat and Classic themes are removed.

### Notes:

- Fb Messenger is only made for Mobile web and will not work on Desktop.
- LinkedIn has deprecated the share counts from their API.

## 5.0.1

- fix: whatsapp sharing fails on mobile, closes [#208](https://github.com/MurhafSousli/ngx-sharebuttons/issues/208).
- fix: Encode special characters in meta tags, closes [#213](https://github.com/MurhafSousli/ngx-sharebuttons/issues/213).
- refactor: import rxjs operators separately.
- chore: Exports share buttons prop and operators.

## 5.0.0

- Refactor and clean up **ShareButton** and **ShareButtons** components.
- Fix count output in **ShareButtons** Component.

## 5.0.0-beta.3

### Features:

- Ability to include only the module you use.
- Ability to create a new share button on the fly, closes [#187](https://github.com/MurhafSousli/ngx-sharebuttons/issues/187).

### Improvements:

- Improve themes styles.
- Decrease bundle size.
- Remove buttons classes and uses dynamic data to create button properties.
- Disable text selection on share buttons.

### Bugs Fixes:

- Fix double click issue on the copy button.

### Breaking Changes:

#### Main

- The package is now divided into 3 new subpackages from the scope `@ngx-share`
  - Share directive `@ngx-share/core`
  - Single share button `@ngx-share/button`, depends on the `@ngx-share/core`
  - Share buttons `@ngx-share/buttons`, depends on the `@ngx-share/core` and `@ngx-share/button`

- Global options and button properties are now passed as one object
  - Before `ShareButtonsModule.forRoot(options, prop)`
  - After: `ShareButtonsModule.forRoot({ options, prop })`

#### ShareButton `<share-button>`:

- `[showName]` input is renamed to `[showText]` in `<share-button>` and `<share-buttons>`
- Custom template is deprecated in `<share-button>`, you can now set custom text using the input `[text]`

#### Styles & Themes:

- Styles and themes are now imported from `@ngx-share/button/styles/` package.
- Remove `outline` and `special` themes.

## 4.1.4

- refactor(buttons style): improve icon styles

## 4.1.3

- refactor(themes): fix themes issues and styles warnings, closes [#182](https://github.com/MurhafSousli/ngx-sharebuttons/issues/182).
- recompile package with ng 5, closes , closes [#181](https://github.com/MurhafSousli/ngx-sharebuttons/issues/181).

## 4.1.2

 - refactor(GoogleButton) remove count code for Google+ after the their removal of the counts

## 4.1.1

- fix(Themes) fix themes tasks, Include compiled css files in the package

## 4.1.0

- feat(New themes) Include more themes with the package.
- refactor(ShareButtons) remove text from more & less buttons.

**Breaking Change**:

- fix(prevent overwritting interceptors) closes [#174](https://github.com/MurhafSousli/ngx-sharebuttons/pull/174).

Now `HttpClientModule` and `HttpClientModule` should imported manually

```ts
import { ShareButtonsModule } from 'ngx-sharebuttons';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    ShareButtonsModule.forRoot()
  ]
})
```

## 4.0.4

- fix(using global options in AOT)
- Add *scss* and *css* styles into dist package

## 4.0.2

- fix(switching button type) remove old button class

## 4.0.1

- fix wrong rollup config for **HttpClientModule**
- add default styles in the dist package
- fix(Universal support) Add **UniversalSupportService** to be used internally
- refactor(ShareDirective)
- add `gaTracking` option to global options
- update online docs

## 4.0.0@beta

Version 4 has been rewritten from scratch

- Major improvements: The list is long, just check the [demo](https://murhafsousli.github.io/ngx-sharebuttons/)
- Provide 3 different modules, import only what you use
- Use `HttpClient` for fetching share counts instead of `Http`, (requires Angular +4.3)
- Add new buttons for Telegram, Email, Print, Copy link
- Improve documentations
- License is now **GPL-3.0**

 ***

 Version 3 is no longer supported

## 3.0.0

- Rename npm package to `ngx-sharebuttons`.
- Update peerDependencies.
- fix(popup window) removes the error for users who have block popup extension, closes [#116](https://github.com/MurhafSousli/ngx-sharebuttons/pull/116).

## 2.1.2

- (fix) sharing on mobile browser [#97]
- (enhacement) refactor default style

## 2.1.0

- (feat) Sharebutton will open the corresponding app on mobile [#79](https://github.com/MurhafSousli/ngx-sharebuttons/issues/79)
- (fix) Whatsapp button will open web.whatsapp on Desktop closes [#67](https://github.com/MurhafSousli/ngx-sharebuttons/issues/67)
- (fix) replaces `:root` with `:host` in style fixes [#81](https://github.com/MurhafSousli/ngx-sharebuttons/issues/81)

## 2.0.1

- (feat) Whatsapp button
- (feat) Sharebutton Directive
- (refactor) New button style for Sharebuttons Component
- (fix) update count when URL changes
- (fix) update all inputs on changes
- (feat) support systemJS

* **Breaking Changes** :
    - Sharebutton component is for internal use only, use Sharebutton directive instead.
    - `[shareTitle]`, `[totalCount]`, deprecated.

## 1.1.5
    - merge [#26](https://github.com/MurhafSousli/ngx-sharebuttons/pull/26)

## 1.1.4

* **Fixes Bug:**
    - fix aot compilation issues in [#25](https://github.com/MurhafSousli/ngx-sharebuttons/pull/25), closes [#23](https://github.com/MurhafSousli/ngx-sharebuttons/issues/23)

## 1.1.3

* **Fixes Bug:**
    - Publish `./dist` instead of root dir, closes [#22](https://github.com/MurhafSousli/ngx-sharebuttons/issues/22)

## 1.1.2

* **New Feature:**

    - AOT Support, closes [#9](https://github.com/MurhafSousli/ngx-sharebuttons/issues/9),[#14](https://github.com/MurhafSousli/ngx-sharebuttons/issues/14),[#15](https://github.com/MurhafSousli/ngx-sharebuttons/issues/15)

* **Fixes Bug:**

    - Remove unnecessary dependencies, closes [#13](https://github.com/MurhafSousli/ngx-sharebuttons/issues/13)
    - Fixes sharing `hashlocationstrategy` URL, closes [#16](https://github.com/MurhafSousli/ngx-sharebuttons/issues/16)

## 1.1.1

* Update dependencies and remove hard version in package.json

## 1.1.0

* **New Feature:**

    - Add `popUpClosed` function `<share-buttons (popUpClosed)="someCallbackFunction">`, closes [#12](https://github.com/MurhafSousli/ngx-sharebuttons/issues/12)

* **Improvements:**

    - Import `Observable`, `empty`, `catch`, `map` operators individually instead of importing the whole library
    - Wrap window object in `WindowService`

## 1.0.7

* **Fixes Bug:**

    - Fix compiling on universal, closes [#6](https://github.com/MurhafSousli/ngx-sharebuttons/issues/6)
    - Fix multiple classes on a share button, closes [#11](https://github.com/MurhafSousli/ngx-sharebuttons/issues/11)

* **Breaking Changes:**

    - twitter tags are now seperated by comma as a string instead of string[]:
        - before:
        ```
        <share-buttons [tags]="['hello','world']">
        ```
        - after:
        ```
        <share-buttons [tags]="'hello, world'">
        ```

## 1.0.6

* **New Feature:**

    - Now you can set `[title]`, `[description]` and `[image]` if you don't want to use the meta tags, check full list of inputs in the docs, closes [#7](https://github.com/MurhafSousli/ngx-sharebuttons/issues/7).

* **Fixes Bug:**

    - Count: handle facebook share count error, closes [#8](https://github.com/MurhafSousli/ngx-sharebuttons/issues/8).
    - Share: Check if the input `[url]` is valid.

* **Breaking Changes:**

    - The following inputs has new names now:
        - before: `[text]`, After: `[description]`.
        - before: `[hashtags]`, After: `[tags]`.

## 1.0.5

* **Improve Performance :** Now ShareButton uses `ChangeDetectionStrategy.OnPush`.

## 1.0.1

* **New Feature:** Set global twitter account to add "Via @twitterAccount" to user tweet.
* **New Feature:** New optional inputs `[text]`, `[image]` and `[hastags]` for twitter and pinterest.

* **Fixes Bug:** Pinterest share link.

***

## 1.0.0

Stable release
# Changelog

## 4.1.2

 - refactor(GoogleButton) the share count for Google+ is no longer available

## 4.1.1

 - fix(Themes) fix themes tasks, Include compiled css files in the package

## 4.1.0

 - feat(New themes) Include more themes with the package.
 - refactor(ShareButtons) remove text from more & less buttons.

**Breaking Change**:

 - fix(prevent overwritting interceptors) closes [#174](https://github.com/MurhafSousli/ngx-sharebuttons/pull/174).

Now `HttpClientModule` and `HttpClientModule` should imported manually

```ts
import { ShareButtonsModule } from 'ngx-sharebuttons';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    ShareButtonsModule.forRoot()
  ]
})
```

## 4.0.4

 - fix(using global options in AOT)
 - Add *scss* and *css* styles into dist package

## 4.0.2

 - fix(switching button type) remove old button class

## 4.0.1

 - fix wrong rollup config for **HttpClientModule**
 - add default styles in the dist package
 - fix(Universal support) Add **UniversalSupportService** to be used internally
 - refactor(ShareDirective)
 - add `gaTracking` option to global options
 - update online docs

## 4.0.0@beta

Version 4 has been rewritten from scratch

 - Major improvements: The list is long, just check the [demo](https://murhafsousli.github.io/ngx-sharebuttons/)
 - Provide 3 different modules, import only what you use
 - Use `HttpClient` for fetching share counts instead of `Http`, (requires Angular +4.3)
 - Add new buttons for Telegram, Email, Print, Copy link
 - Improve documentations
 - License is now **GPL-3.0**

 ***

 Version 3 is no longer supported

## 3.0.0

 - Rename npm package to `ngx-sharebuttons`.
 - Update peerDependencies.
 - fix(popup window) removes the error for users who have block popup extension, closes [#116](https://github.com/MurhafSousli/ngx-sharebuttons/pull/116).

## 2.1.2

 - (fix) sharing on mobile browser [#97]
 - (enhacement) refactor default style

## 2.1.0

 - (feat) Sharebutton will open the corresponding app on mobile [#79](https://github.com/MurhafSousli/ngx-sharebuttons/issues/79)
 - (fix) Whatsapp button will open web.whatsapp on Desktop closes [#67](https://github.com/MurhafSousli/ngx-sharebuttons/issues/67)
 - (fix) replaces `:root` with `:host` in style fixes [#81](https://github.com/MurhafSousli/ngx-sharebuttons/issues/81)

## 2.0.1

 - (feat) Whatsapp button
 - (feat) Sharebutton Directive
 - (refactor) New button style for Sharebuttons Component
 - (fix) update count when URL changes
 - (fix) update all inputs on changes
 - (feat) support systemJS

* **Breaking Changes** :
    - Sharebutton component is for internal use only, use Sharebutton directive instead.
    - `[shareTitle]`, `[totalCount]`, deprecated.

## 1.1.5
    - merge [#26](https://github.com/MurhafSousli/ngx-sharebuttons/pull/26)

## 1.1.4

* **Fixes Bug:**
    - fix aot compilation issues in [#25](https://github.com/MurhafSousli/ngx-sharebuttons/pull/25), closes [#23](https://github.com/MurhafSousli/ngx-sharebuttons/issues/23)

## 1.1.3

* **Fixes Bug:**
    - Publish `./dist` instead of root dir, closes [#22](https://github.com/MurhafSousli/ngx-sharebuttons/issues/22)

## 1.1.2

* **New Feature:**

    - AOT Support, closes [#9](https://github.com/MurhafSousli/ngx-sharebuttons/issues/9),[#14](https://github.com/MurhafSousli/ngx-sharebuttons/issues/14),[#15](https://github.com/MurhafSousli/ngx-sharebuttons/issues/15)

* **Fixes Bug:**

    - Remove unnecessary dependencies, closes [#13](https://github.com/MurhafSousli/ngx-sharebuttons/issues/13)
    - Fixes sharing `hashlocationstrategy` URL, closes [#16](https://github.com/MurhafSousli/ngx-sharebuttons/issues/16)

## 1.1.1

* Update dependencies and remove hard version in package.json

## 1.1.0

* **New Feature:**

    - Add `popUpClosed` function `<share-buttons (popUpClosed)="someCallbackFunction">`, closes [#12](https://github.com/MurhafSousli/ngx-sharebuttons/issues/12)

* **Improvements:**

    - Import `Observable`, `empty`, `catch`, `map` operators individually instead of importing the whole library
    - Wrap window object in `WindowService`

## 1.0.7

* **Fixes Bug:**

    - Fix compiling on universal, closes [#6](https://github.com/MurhafSousli/ngx-sharebuttons/issues/6)
    - Fix multiple classes on a share button, closes [#11](https://github.com/MurhafSousli/ngx-sharebuttons/issues/11)

* **Breaking Changes:**

    - twitter tags are now seperated by comma as a string instead of string[]:
        - before:
        ```
        <share-buttons [tags]="['hello','world']">
        ```
        - after:
        ```
        <share-buttons [tags]="'hello, world'">
        ```

## 1.0.6

* **New Feature:**

    - Now you can set `[title]`, `[description]` and `[image]` if you don't want to use the meta tags, check full list of inputs in the docs, closes [#7](https://github.com/MurhafSousli/ngx-sharebuttons/issues/7).

* **Fixes Bug:**

    - Count: handle facebook share count error, closes [#8](https://github.com/MurhafSousli/ngx-sharebuttons/issues/8).
    - Share: Check if the input `[url]` is valid.

* **Breaking Changes:**

    - The following inputs has new names now:
        - before: `[text]`, After: `[description]`.
        - before: `[hashtags]`, After: `[tags]`.

## 1.0.5

* **Improve Performance :** Now ShareButton uses `ChangeDetectionStrategy.OnPush`.

## 1.0.1

* **New Feature:** Set global twitter account to add "Via @twitterAccount" to user tweet.
* **New Feature:** New optional inputs `[text]`, `[image]` and `[hastags]` for twitter and pinterest.

* **Fixes Bug:** Pinterest share link.

***

## 1.0.0

Stable release
