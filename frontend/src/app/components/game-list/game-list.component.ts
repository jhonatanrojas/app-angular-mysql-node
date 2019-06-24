import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Game } from 'src/app/models/Game';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
   games:any=[];
  constructor(private gamesService:GamesService) { }

  ngOnInit() {

this.getGames();
    
  }

  getGames(){
    this.gamesService.getGames()
    .subscribe(
      res => {
        this.games=res;
        console.log(      res)
      },
      err => console.error(err)
    );
  }
deleteGame(id: string){

 this.gamesService.deleteGame(id).subscribe(

  res=>{
    console.log(res)
    this.getGames();
  },
  err=>console.log(err)

 );
}

}
