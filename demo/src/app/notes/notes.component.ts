import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent {

  globalsCode = `constructor(sbService:ShareButtonsService){

 //Add Via @yourTwitterAccount to tweet button.
 sbService.twitterAccount = "yourTwitterAccount";

 //Set the height and width of the popup share window.
 sbService.height = 600; //default: 400
 sbService.width = 800;  //default: 500
}`;

  componentShareButtons = `// The following inputs take: string (template) | false (disable)
[facebook]
[twitter]
[linkedIn]
[tumblr]
[google]
[pinterest]
[stumbleUpOn]
[reddit]
[whatsApp]
// default is the network icon from fontawesome e.g. <i class="fa fa-facebook"></i>
`;

  componentShareLinks = `/** Share link args */
[url]: string
[title]: string
[description]: string
[image]: string
[tags]: string
`;
  componentContainer = `/** Show count on share-buttons, disabled by default */
[showCount]: string
/** Indicates weather default style is applied to the buttons */
[defaultStyle]: string
/** Add default class to all buttons */
[buttonClass]: string

/** get button count, useful calculate total share counts */
(count)
/** get the share button name that had been used for sharing */
(popUpClosed)
`;

  directiveShareButtons = `/** Share button name (choose your button e.g. "twitter")*/
[shareButton]: string`;

  directiveShareLinks = `/** Share link args */
[sbUrl]: string
[sbTitle]: string
[sbDescription]: string
[sbImage]: string
[sbTags]: string
[sbShowCount]: boolean`;

  directiveOptions = `/** get button count, useful calculate total share counts */
(sbCount)
/** get the share button name that had been used for sharing */
(sbPopUpClosed)`;

}
