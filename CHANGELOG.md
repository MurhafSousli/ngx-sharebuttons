# Changelog

## 2.1.2

 - (fix) sharing on mobile browser [#97]
 - (enhacement) refactor default style

## 2.1.0

 - (feat) Sharebutton will open the corresponding app on mobile [#79](https://github.com/MurhafSousli/ng2-sharebuttons/issues/79)
 - (fix) Whatsapp button will open web.whatsapp on Desktop closes [#67](https://github.com/MurhafSousli/ng2-sharebuttons/issues/67)
 - (fix) replaces `:root` with `:host` in style fixes [#81](https://github.com/MurhafSousli/ng2-sharebuttons/issues/81)

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
    - merge [#26](https://github.com/MurhafSousli/ng2-sharebuttons/pull/26)

## 1.1.4
    
* **Fixes Bug:** 
    - fix aot compilation issues in [#25](https://github.com/MurhafSousli/ng2-sharebuttons/pull/25), closes [#23](https://github.com/MurhafSousli/ng2-sharebuttons/issues/23)

## 1.1.3

* **Fixes Bug:** 
    - Publish `./dist` instead of root dir, closes [#22](https://github.com/MurhafSousli/ng2-sharebuttons/issues/22)

## 1.1.2

* **New Feature:**

    - AOT Support, closes [#9](https://github.com/MurhafSousli/ng2-sharebuttons/issues/9),[#14](https://github.com/MurhafSousli/ng2-sharebuttons/issues/14),[#15](https://github.com/MurhafSousli/ng2-sharebuttons/issues/15)
    
* **Fixes Bug:** 

    - Remove unnecessary dependencies, closes [#13](https://github.com/MurhafSousli/ng2-sharebuttons/issues/13)
    - Fixes sharing `hashlocationstrategy` URL, closes [#16](https://github.com/MurhafSousli/ng2-sharebuttons/issues/16)

## 1.1.1

* Update dependencies and remove hard version in package.json

## 1.1.0

* **New Feature:**

    - Add `popUpClosed` function `<share-buttons (popUpClosed)="someCallbackFunction">`, closes [#12](https://github.com/MurhafSousli/ng2-sharebuttons/issues/12)

* **Improvements:**

    - Import `Observable`, `empty`, `catch`, `map` operators individually instead of importing the whole library
    - Wrap window object in `WindowService`

## 1.0.7
   
* **Fixes Bug:** 

    - Fix compiling on universal, closes [#6](https://github.com/MurhafSousli/ng2-sharebuttons/issues/6)
    - Fix multiple classes on a share button, closes [#11](https://github.com/MurhafSousli/ng2-sharebuttons/issues/11)

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

    - Now you can set `[title]`, `[description]` and `[image]` if you don't want to use the meta tags, check full list of inputs in the docs, closes [#7](https://github.com/MurhafSousli/ng2-sharebuttons/issues/7).

* **Fixes Bug:** 

    - Count: handle facebook share count error, closes [#8](https://github.com/MurhafSousli/ng2-sharebuttons/issues/8).
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