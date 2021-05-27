import {Component, OnInit} from '@angular/core';
import {publicApiFunction} from '@org/shared-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app1';

  ngOnInit(): void {
    console.log(publicApiFunction());
  }
}
