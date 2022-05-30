import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  public linkTheme = document.querySelector('#theme');
  // public links!: NodeListOf<Element> ;


  constructor() {

    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    this.linkTheme?.setAttribute('href', url);

   }


  changedataTheme( theme: String ){
    const url = `assets/css/colors/${theme}.css`;

    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme',url);
    this.checkCurrentTheme();

  }
  checkCurrentTheme(){
    const links = document.querySelectorAll('.selector');

    links.forEach( elem  => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `assets/css/colors/${btnTheme}.css`;
      const currenTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl == currenTheme) {
        elem.classList.add('working');
      }

    });
  }

}
