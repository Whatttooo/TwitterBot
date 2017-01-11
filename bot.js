
var twit = require("twit");
var config = require("./config");
var T = new twit (config);
var counter = 1;
var feeling = ["happy","exstatic", "pretty good!","super","fantastic","merry","great","joyous","jubilant","spirited"];
var shit = ["get Rekt","fuckin woo", "I just wanna go home", "That's racist","I'm extremely offended","fuck off clarence!","Youuu twat","What even are ya", "praise Harambe","eat shit"];

var stream = T.stream('user');

var stream2 = T.stream('user')

var hello = "hello";

stream.on('follow', followed);
stream2.on('tweet', tweetEvent);

function tweetEvent(msg){
  var p = Math.floor((Math.random()*10));
  var d = new Date();
  //console.log(msg);
  var n = d.getDate();
  var diff = 25-n;
  var diff2 = 32-n;

  var reply = msg.entities.user_mentions[0].screen_name;
  var text = msg.text;
  var from = msg.user.screen_name;

  console.log(reply + ' ' + from);
  console.log(n);

  if(reply === "merryWhateley"){

     console.log(shit[p]);
    if(from === "DanJMarson"){
      var resp = "Nah @" + from + " get fucked mate! " + shit[p];
      tweetIt(resp);
    }
    else if(n < 25 ){
      console.log(feeling[p]);
      var resp = "Not quite Christmas yet @" + from + " , there's still " + diff + " more days to go! I'm feeling " + feeling[p];
      tweetIt(resp);
    }else if(n == 25){
      console.log(feeling[p]);
      var resp = "Merry Christmas @" + from + " to you too! We have had  " + counter + " tweets!";
      tweetIt(resp);
      counter++;
    }else{
      console.log(feeling[p]);
      var resp = "Hope you had a happy Christmas @" + from + " ! Have a Happy New Year!  " + diff2 + " sleeps to go! I'm feeling " + feeling[p];
      tweetIt(resp);
    }
  }
}

function followed(msg){
  console.log("followed!");
  var name = msg.source.name;
  var screenName = msg.source.screen_name;
  tweetIt('Hey @' + screenName + " Merry Christmas! Don't forget to tweet on Christmas Day!")
}


function tweetIt(txt){
  var tweet ={
      status: txt
  }
  T.post('statuses/update', tweet, tweeted)
  function tweeted(err, data, response) {
    if(err){
        console.log(err);
    }else{
        console.log("Well in mate");
    }
  }
}
