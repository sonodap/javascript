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


// forは決められた回数の処理を繰り返す

let i;
let num = 0;

for(i = 1; i<11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + '回です')