# Changelog

## 6.0.0-beta.0

- Angular 6 support, closes [#274](https://github.com/MurhafSousli/ngx-sharebuttons/issues/274).
- fix(core): Use icon alias name in the share props instead of the icon object itself, closes [#280](https://github.com/MurhafSousli/ngx-sharebuttons/issues/280).
- feat(ShareButtonDirective): Add `aria-label` attribute to share buttons, closes [#277](https://github.com/MurhafSousli/ngx-sharebuttons/issues/277).
- feat(ShareButtonsComponent): Enable custom icons for the expand button, remove the hard-coded icons, closes [#289](https://github.com/MurhafSousli/ngx-sharebuttons/issues/289).
- refactor(ShareButtonsComponent): Call `stateWorker$.complete()` on component destroy.
- refactor(ShareButtonsComponent): Use `private` on variables and functions when they should be.
- Add `CONTRIBUTION.md` for plugin development.
- refactor(core): Remove all FontAwesome peer packages dependencies from `"@ngx-share/core`.
- refactor(button): Use only `@fortawesome/angular-fontawesome` as a peer dependency for `"@ngx-share/button`.
- refactor(buttons): Use only `@fortawesome/angular-fontawesome` as a peer dependency for `"@ngx-share/buttons`.
- refactor(util): Use Observable instead of Promise for `copyToClipboard()`.


### Breaking changes:

- The plugin now uses Angular-FontAwesome [library method](https://github.com/FortAwesome/angular-fontawesome#using-the-icon-library) instead of the "Explicit reference" method to import the icons.

**Before**:
 
The plugin used to load the default icons weather you override them or used some of them.

**After**:

The plugin does not load FontAwesome icons out of the box. The user will choose which icons to load manually

*PROS:*

The user will choose which icons to load from FontAwesome.

*CONS:*

An extra step is now required

Example:
```ts
import { ShareButtonsModule } from '@ngx-share/buttons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook } from '@fortawesome/free-brand-svg-icons/faFacebook';
import { faTwitter } from '@fortawesome/free-brand-svg-icons/faTwitter';
import { faLinkedinIn } from '@fortawesome/free-brand-svg-icons/faLinkedinIn';

const faIcons = [faFacebook, faTwitter, faLinkedinIn];

// Add the icons you want to use
library.add(...faIcons);

@NgModule({
  imports: [
    HttpClientModule,
    ShareButtonsModule.forRoot()
  ]
})
```

**NOTE:** User should use deep links to import the icons to fix the package size, see **@robbaman** comment in [@angular-fontawesome/34](https://github.com/FortAwesome/angular-fontawesome/issues/34#issuecomment-388919807).

## 5.3.1

- fix(ShareButtonsComponent): Hide expand button, closes [#255](https://github.com/MurhafSousli/ngx-sharebuttons/issues/255) in [#256](https://github.com/MurhafSousli/ngx-sharebuttons/pull/256).
- fix(Build Error in 5.3.0): Set css variable on expand button through the component instead of the style, closes [#254](https://github.com/MurhafSousli/ngx-sharebuttons/issues/254) in [#527](https://github.com/MurhafSousli/ngx-sharebuttons/pull/257).
- clean up styles
- refactor css variable: change $sb-more variable name to $sb-expand
- update FontAwesome peerDependencies

## 5.3.0 (has a build issue)

- refactor(ShareButtonsComponent): Wrap expand button in its own component.
- fix(ShareButtonDirective): Set custom button color with css variable.
- fix(Universal:ShareButtonDirective): Check for browser platform before creating a share button, closes [#251](https://github.com/MurhafSousli/ngx-sharebuttons/issues/251).
- fix(Universal:ShareButtonComponent): Check if button.ref is defined in component template, closes [#251](https://github.com/MurhafSousli/ngx-sharebuttons/issues/251).
- fix(ShareButtonComponent): Share counts are requested even when showCount is false, fixes [#253](https://github.com/MurhafSousli/ngx-sharebuttons/issues/253).
- enhancement(Themes): Improve styles.
- enhancement(Share Icons): Icons are now rendered as SVG elements.

### Features:

- feat(Prop): Add SMS button.
- feat(ShareButtonComponent): Add `[icon]` input.
- feat(Share Icons): Add only the share buttons icons from FontAwesome instead of all icons, closes [#252](https://github.com/MurhafSousli/ngx-sharebuttons/issues/252).
- feat(ShareButtonDirective): Add `[autoSetMeta]` input to all components and global config.

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

- refactor(ShareButtonDirective): Remove the prefix `sb` from the share directive inputs, closes [#250](https://github.com/MurhafSousli/ngx-sharebuttons/issues/250).

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

#### ShareButtonComponent `<share-button>`:

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
- refactor(ShareButtonsComponent) remove text from more & less buttons.

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
- refactor(ShareButtonDirective)
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

* **Improve Performance :** Now ShareButtonComponent uses `ChangeDetectionStrategy.OnPush`.

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
 - refactor(ShareButtonsComponent) remove text from more & less buttons.

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
 - refactor(ShareButtonDirective)
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

* **Improve Performance :** Now ShareButtonComponent uses `ChangeDetectionStrategy.OnPush`.

## 1.0.1

* **New Feature:** Set global twitter account to add "Via @twitterAccount" to user tweet.
* **New Feature:** New optional inputs `[text]`, `[image]` and `[hastags]` for twitter and pinterest.

* **Fixes Bug:** Pinterest share link.

***

## 1.0.0

Stable release
