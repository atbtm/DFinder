import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
    selector: 'page-main',
    templateUrl: 'main.html'
})
export class MainPage {

    private rootPage;

    constructor(private nvCtrl: NavController, private nemu: MenuController) {
        this.nemu.enable(true);
        this.rootPage = HomePage;
    }
}