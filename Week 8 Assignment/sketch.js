var words = "LEAGUES before me, leagues behind, Clamor warring wastes of flood, All the streams of all the worlds Flung together, mad of mood; Through the canon beats a sound, Regular of interval,Distant, drumming, muffled, dull, Thunderously rhythmical; Crafts slip by my startled soul-- Soul that cowers, a thing apart-- They are corpuscles of blood! That's the throbbing of a heart! God of terrors!--am I mad?--Through my body, mine own soul, Shrunken to an atom's size,Voyages toward an unguessed goal!";
var lexicon;
var poem;

function setup() {
  createCanvas(windowWidth,windowHeight);
  lexicon = new RiLexicon();
  img = loadImage("ship.jpg");
  poem = RiTa.tokenize(words);//breaking up string into arrays
  frameRate(0.25);
}

function draw(){
      for(var i= 0; i < poem.length; i++){
        if (lexicon.isNoun(poem[i])){
          poem[i]= lexicon.randomWord('nn');
        }
      
        else if (lexicon.isAdjective(poem[i])){
          poem[i]=lexicon.randomWord('jj');
        }
           background(img);
           textSize(20);
        text(poem.join(' '), 50, 50, width/2, height); 
}

}