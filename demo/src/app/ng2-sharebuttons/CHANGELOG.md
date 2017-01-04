#Changelog

##1.1.1

* Update dependencies and remove hard version in package.json

##1.1.0

* **New Feature:**

    - Add `popUpClosed` function `<share-buttons (popUpClosed)="someCallbackFunction">`, closes [#12](https://github.com/MurhafSousli/ng2-sharebuttons/issues/12)

* **Improvements:**

    - Import `Observable`, `empty`, `catch`, `map` operators individually instead of importing the whole library
    - Wrap window object in `WindowService`

##1.0.7
   
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

##1.0.6

* **New Feature:** 

    - Now you can set `[title]`, `[description]` and `[image]` if you don't want to use the meta tags, check full list of inputs in the docs, closes [#7](https://github.com/MurhafSousli/ng2-sharebuttons/issues/7).

* **Fixes Bug:** 

    - Count: handle facebook share count error, closes [#8](https://github.com/MurhafSousli/ng2-sharebuttons/issues/8).
    - Share: Check if the input `[url]` is valid.

* **Breaking Changes:**

    - The following inputs has new names now:
        - before: `[text]`, After: `[description]`.
        - before: `[hashtags]`, After: `[tags]`.

##1.0.5

* **Improve Performance :** Now ShareButtonComponent uses `ChangeDetectionStrategy.OnPush`.

##1.0.1

* **New Feature:** Set global twitter account to add "Via @twitterAccount" to user tweet.  
* **New Feature:** New optional inputs `[text]`, `[image]` and `[hastags]` for twitter and pinterest.

* **Fixes Bug:** Pinterest share link. 

*** 

##1.0.0

Stable release