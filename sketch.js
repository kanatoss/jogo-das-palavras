let palavra;

function setup() {
  createCanvas(400 , 400);
  palavra = palavraAleatoria();
}

function palavraAleatoria(){
  let palavras = ["Bomba", "Carro", "Jogador", "Cr7"];
  return random(palavras);
}

function inicializaCores(){
  background("black");
  fill("red");
  textSize(95);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo){
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width);
   text(texto, 200, 200);
  
 



  
 /* if (mouseX < 50){
    let palavra = "P";
    text(palavra, 200, 200);
  } else if(mouseX < 100){
    let palavra = "Pi";
    text(palavra, 200, 200);
  } else if(mouseX < 150){
    let palavra = "Pip";
    text(palavra, 200, 200);
  } else if(mouseX < 200){
    let palavra = "Pipo";
    text(palavra, 200, 200);
  } else if(mouseX < 250){
    let palavra = "Pipok";
    text(palavra, 200, 200);
  } else if(mouseX < 300){
    let palavra = "Pipoki";
  https://editor.p5js.org/derick.ferreira.santos/full/nO-AsbbLL  text(palavra, 200, 200);
  } else if(mouseX < 350){
    let palavra = "Pipokin";
    text(palavra, 200, 200);
  } else if(mouseX < 400){
    let palavra = "Pipokinh";
    text(palavra, 200, 200);
  } else if(mouseX < 450){
    let palavra = "Pipokinha";
    text(palavra, 200, 200);
  } */
}
 