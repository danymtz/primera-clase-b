import { Component, OnInit } from '@angular/core';
import { RequestService } from './services/request/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'segunda';

  name: string = '';
  order: string = '';

  constructor(public requestService: RequestService){}

  ngOnInit(): void {
    this.boton();
  }

  boton(){
    let boton = document.getElementById('btn');
    let busca: HTMLInputElement = <HTMLInputElement> document.getElementById('search');
    

    boton?.addEventListener("click",() => {
      console.log(busca.value);
      this.requestService.getPokemon(busca.value).subscribe({
        next: (resp: any) => {
          console.log(resp);
          this.name = resp.name;
          this.order = resp.order;
        }
      }
      );
    })
  }
}
