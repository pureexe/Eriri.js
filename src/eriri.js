var Eriri = function(url,mode,limit,timeout){
  if(!url){
  }
  this.iframe = function(url,limit){
    const template = "<iframe sandbox src='javascript:window.location.replace(\""+url+"\")'></iframe>";
    for(var i = 0;i<10;i++){
      document.body.innerHTML+= template;
      console.log("create Iframe");
    }
  }
  this.xhr = function(url,limit,req){

  }
  if(!mode || mode == "xhr"){
    this.xhr(url);
  }else if(mode == "iframe"){
    this.iframe(url);
  }else{
    throw new "Do you want to cheat me? why you not choose between xhr or iframe";
  }
}
