import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cities';
  name='Gautam';


  public submit(){
   
    console.log("submit method.....",this.name);
  }


}


