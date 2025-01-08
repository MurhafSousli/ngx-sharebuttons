import { Component, ChangeDetectionStrategy } from '@angular/core';
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FaIconComponent]
})
export class FooterComponent {
  iconGithub: IconDefinition = faGithub;
  iconXTwitter: IconDefinition = faXTwitter;
}
