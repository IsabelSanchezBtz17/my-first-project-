import { LiteralPrimitive } from '@angular/compiler';
import { Component } from '@angular/core';
import { Character } from './models/character.models';
import { CharacterHp } from './models/characterHp.models';
import { Player } from './models/player.models';
import { Product } from './models/product.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';



basicTypes(){
  console.log("hello word!");

  const TEST : string = "constant test";

  let testTwo: string = "variable test";
  let testTree: boolean= true;
  let testFour: number = 10;

  const VARIABLES: string = `String: ${testTwo}
  Boolean: ${testTree}
  Int: ${testFour}`;

  console.log(VARIABLES);


  console.log(TEST);
  console.log(testTwo);
  console.log(testTree);
  console.log(testFour);

}

basicTypesTwo(){
  const VIDEO_GAME: string = "Super Smash Bros. Ultimate";
  console.log();

  let characterName : string = "Waluigi";
  console.log();

  let hp: number= 100;
  console.log();

  //alt 96

  const STATUS: string = `Game: ${VIDEO_GAME}
  character: ${characterName}
  hp: ${hp}`;

  console.log(STATUS);
  
}

basicTypesThree(){
  const VIDEO_GAME: string = "Super Smash Bros. Ultimate";
  console.log();

  let characterName : string = "Waluigi";
  console.log();

  let hp: number= 100;
  console.log();
 
  let status : boolean;
 status = (hp<=0) ? false : true;
  //alt 96

  const TITLE: string = `Game: ${VIDEO_GAME}
  character: ${characterName}
  hp: ${hp}
  status: ${status}`;

  console.log(TITLE);
  
}

arrayAndObject(){
  console.log("arrayAndObject");

 let skills: string []= ['punch','kick','damage', 'especial mov'];
 console.log(skills);

 let fruits: string []= ['apple', 'orange', 'watermelon'];
 console.log(fruits);

 let listNumber: number []= [1,2,3,4,5,6];
 console.log(listNumber);



 const character : Character={
  name : 'Waluigi',
  healthPoints : 100,
  live: true,
  skills: skills
 }
 
 character.color= 'red'; 
 character.name= 'Mario'; 


 console.log(character);

}

ifStatement(){

 let x : number = 20, y : number = 10;
 if (x>y){
  console.log('x es mayor a y');
 }
 else if(x<y){
  console.log('X es menor a Y');
 } else if (x==y){
  console.log('X y Y son iguales');
 }else{
  console.log('Ninguna se cumple');
 }

}

switchStatement(){
  let a: number = 20, b: number= 15;
  switch(a-b){
    case 0:
      console.log('Resultado es 0')
    break;
    case 5:
      console.log('Resultado es 5')
    break;
    case 10:
      console.log('Resultado es 10')
    break;
    default:
      console.log('No existe un resultado valido')
      break;
  }
}

whileStatement(){
  let counter : number =  0;
  while (counter<=5) {
    console.log('Ejecucion número' + counter);
    counter++;
  
  }

  let i : number =0;
   do {
    console.log('Do ejecución número' + i);
    i++;
   } while (i<=5);

}

foStatement(){
  let array: number[] = [10,20,30,40,50,60,70,80,90,100];

  for(const INDEX in array){
      console.log(INDEX);
      console.log(array[INDEX]);
  }

 for (let i: number = 1; i<5; i +=1){
  console.log(i);
 }

 for (let i: number = 1; i<array.length; i +=1){
  console.log(i);
 }

 array.forEach( function (value, index) {
  console.log(value);
  console.log(index);

  if (value == 50){
    console.log('El 50 esta en la posición' + index);
  }
});

array.forEach( value =>{
  console.log(value);
});

//recorremos ahora los personajes

let arrayTWO: Character[]= [
{
  name: 'Mario',
  live: true,
  skills: [],
  healthPoints: 100
},
{
  name: 'jef',
  live: true,
  skills: [],
  healthPoints: 100
}
]

arrayTWO.forEach(function (value){
  console.log(value);
});

} 

tryCatchStatement(){
// enviamos un error controlado
  try{
    console.log('hola');
    throw new Error("Se presento un error");
    
  }
  catch(e){
    console.log(e);
  }

}

restNumbers(a: number , b: number): number{
  return a-b;
}

basicFunctions(){
 
  function sumNumbers(a: number , b: number): number{
    return a+b;
  }

  const ARROW_NUM = (a: number, b: number): number => {return a+b}

  function multiplyNumbers(a: number , b: number, c?: number): number{
    return a*b* (c ?? 1);
  }

  console.log(this.restNumbers(10,4));
  console.log(multiplyNumbers(2,2));
  console.log(multiplyNumbers(2,2,3));
  console.log(sumNumbers(2,5));
  console.log(ARROW_NUM(1,8));


  function printNumber(a: number): void  {
    console.log(a);
    
  }

  printNumber(9);

}


healtCharacter(c: CharacterHp){
 c.healthPoints= 100;
}


otherFunctions(){

let character: CharacterHp = {
  name : 'mario',
  live: true,
  healthPoints: 50,
  color : 'red',
  skills: ['punch','kick','special mov'],
  showHp(){
    console.log('Puntos de vida' + this.healthPoints)
  }
};

character.showHp();
this.healtCharacter(character);
character.showHp();
console.log(character);


}

basicDestructuring(){
  const CONCURRENT_SONG: Player ={
    volumen: 90,
    second: 36,
    name: 'la cucaracha',
    detail:{
      author: 'Fernando caballero',
      year: 1818
    }
  }
 let author: string = 'juan perez';

  const { volumen, second, name : SONG_NAME, detail:{author: DETAIL_SONG}} = CONCURRENT_SONG;
  //const { author : detailAuthor} = detail;

  console.log('El volumen es de: ', volumen);
  console.log('El segundo actual es: ', second);
  console.log('La canción es: ', SONG_NAME);
  console.log('El autor es: ', DETAIL_SONG);


}

arrayDestructuring(){
 const AVENGERS : string [] =['Capitan América', 'Iron Man', 'Viuda Negra', 'Hulk', 'Thor'];
 
 console.log('el 1 avengers es: ' + AVENGERS[0]);
 console.log('el 2 avengers es: ' + AVENGERS[1]);
 console.log('el 3 avengers es: ' + AVENGERS[2]);
 console.log('el 4 avengers es: ' + AVENGERS[3]);
 console.log('el 5 avengers es: ' + AVENGERS[4]);

 const[ , , , posicion] = AVENGERS;
 console.log('se busca por la posicion definida: ' + posicion);
 const[a1,a2,a3,a4,a5] = AVENGERS;

 console.log('el 1 avengers es: ' + a1);
 console.log('el 2 avengers es: ' + a2);
 console.log('el 3 avengers es: ' + a3);
 console.log('el 4 avengers es: ' +a4);
 console.log('el 5 avengers es: ' + a5);


}

agumentDestructuring(){
 const phone: Product ={
  description: 'iPhone 14 Pro Max',
  price: 15566
 }

 const tablet: Product ={
  description: 'Galaxy Tab S8 Ultra',
  price: 2745
 }

 function calclTaxes(products: Product[]): [number, number]{
  let total =0;
  products.forEach(product =>{
    total+= product.price;
  })

  return [total, total * 1.16];
 }

 const CAR_ITEMS: Product[]= [phone,tablet];
 console.table(CAR_ITEMS);

 const [carPrice, carTaxes] = calclTaxes(CAR_ITEMS);
 console.log('Sub total: '  + carPrice);
 console.log('total: ' + carTaxes);
}


constructor(){

  this.agumentDestructuring();


}
}