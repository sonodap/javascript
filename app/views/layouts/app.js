// ()の部分を入れ替えるだけで代入できる文字が変わる,足し算、引き算、掛け算、割り算もできる
// alert(hello + drink);


let hello = 'Hello World ';

let drink = 'coke';

let int = '-10';


// orangeとappleの数字を変えると帰ってくる言葉も変わってくる
// let orange = 100;
// let apple = 90;

// if(orange < apple){
//   alert('みかんの値段がリンゴより安い');
// } else if(orange == apple){
//   alert('みかんとリンゴが同じ値段');
// } else{
//   alert('みかんの値段がリンゴより高い');
// }


// whileは条件式がtrueになるまで繰り返し処理される

let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です')