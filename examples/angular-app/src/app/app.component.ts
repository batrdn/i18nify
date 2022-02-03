import { Component, Inject } from '@angular/core';
import { I18NEXT_SERVICE, ITranslationService } from 'angular-i18next';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';

  constructor(@Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService) {}

  onChange(event: Event) {
    this.i18NextService.changeLanguage((event.target as HTMLSelectElement).value);
  }
}
