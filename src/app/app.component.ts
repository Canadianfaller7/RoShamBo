import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userScore = 0;
  compScore = 0;
  userSelected!: string; // which weapon user selected
  compSelected!: string; // which weapon computer selected
  action!: string; // whether user weapon beats or loses to computer
  status!: string; // whether it's a win or lose
  compWeapons = [
    'rock',
    'paper',
    'scissors'
  ];
// userPick function which is executed whenever a 'weapon is clicked'
  userPick(userWeapon: string): void {
    this.userSelected = userWeapon;
    console.log (this.userSelected); // debugging purposes
    setTimeout( () => {
      const randomNum = Math.floor(Math.random() * 3);
      this.compSelected = this.compWeapons[randomNum];
      console.log(this.compSelected); // debugging purposes
      this.checkResult();
    }, 1000);
  }

  clearField() {
    setTimeout( () => {
      this.status = '';
      this.userSelected = '';
      this.compSelected = '';
    }, 2500);
  }

  win(user: string, comp: string) {
    this.userScore ++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'beats';
    this.status = '. You win!';
    this.clearField();
  }

  lose(user: string, comp: string) {
    this.compScore ++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'loses to';
    this.status = '. You lose!';
    this.clearField();
  }

  draw(user: string, comp: string) {
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'and';
    this.status = '. You draw!';
    this.clearField();
  }

  checkResult() {
    const userChoice = this.userSelected;
    const compChoice = this.compSelected;
    switch (userChoice + compChoice) {
      case 'rockscissors':
      case 'paperrock':
      case 'scissorspaper':
        this.win(userChoice, compChoice);
        break;
      case 'rockpaper':
      case 'scissorsrock':
      case 'paperscissors': 
        this.lose(userChoice, compChoice);
        break;
      default:
        this.draw(userChoice, compChoice)
        break;
    }
  }
  
}
