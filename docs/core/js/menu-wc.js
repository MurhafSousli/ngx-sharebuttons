'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">@ngx-share/demo documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ShareModule.html" data-type="entity-link">ShareModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-ShareModule-0dcec7f51da6bd719121079f45c2b528"' : 'data-target="#xs-directives-links-module-ShareModule-0dcec7f51da6bd719121079f45c2b528"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ShareModule-0dcec7f51da6bd719121079f45c2b528"' :
                                        'id="xs-directives-links-module-ShareModule-0dcec7f51da6bd719121079f45c2b528"' }>
                                        <li class="link">
                                            <a href="directives/ShareDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShareDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-ShareModule-0dcec7f51da6bd719121079f45c2b528"' : 'data-target="#xs-pipes-links-module-ShareModule-0dcec7f51da6bd719121079f45c2b528"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-ShareModule-0dcec7f51da6bd719121079f45c2b528"' :
                                            'id="xs-pipes-links-module-ShareModule-0dcec7f51da6bd719121079f45c2b528"' }>
                                            <li class="link">
                                                <a href="pipes/ShareCountPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShareCountPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CopyButton.html" data-type="entity-link">CopyButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmailButton.html" data-type="entity-link">EmailButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/FacebookButton.html" data-type="entity-link">FacebookButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/GooglePlusButton.html" data-type="entity-link">GooglePlusButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/LineButton.html" data-type="entity-link">LineButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/LinkedinButton.html" data-type="entity-link">LinkedinButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/MessengerButton.html" data-type="entity-link">MessengerButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/MixButton.html" data-type="entity-link">MixButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/PinterestButton.html" data-type="entity-link">PinterestButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrintButton.html" data-type="entity-link">PrintButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/RedditButton.html" data-type="entity-link">RedditButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/ShareButtonBase.html" data-type="entity-link">ShareButtonBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/SmsButton.html" data-type="entity-link">SmsButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/TelegramButton.html" data-type="entity-link">TelegramButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/TumblrButton.html" data-type="entity-link">TumblrButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/TwitterButton.html" data-type="entity-link">TwitterButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/VkButton.html" data-type="entity-link">VkButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/WhatsappButton.html" data-type="entity-link">WhatsappButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/XingButton.html" data-type="entity-link">XingButton</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ShareService.html" data-type="entity-link">ShareService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IShareButton.html" data-type="entity-link">IShareButton</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IShareButtons.html" data-type="entity-link">IShareButtons</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShareButtonsConfig.html" data-type="entity-link">ShareButtonsConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShareMetaTags.html" data-type="entity-link">ShareMetaTags</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});