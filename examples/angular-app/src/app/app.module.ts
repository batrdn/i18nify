import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { I18NextModule, I18NEXT_SERVICE, ITranslationService } from 'angular-i18next';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import en from '../../translations/translation-en.json';
import mn from '../../translations/translation-mn.json';

export function appInit(i18next: ITranslationService) {
  const i18nextConfig = {
    resources: {
      en: { translation: en },
      mn: { translation: mn },
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  };

  return () => i18next.init(i18nextConfig);
}

export function localeIdFactory(i18next: ITranslationService) {
  return i18next.language;
}

export const I18N_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true,
  },
  {
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory,
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, I18NextModule.forRoot()],
  providers: [I18N_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
