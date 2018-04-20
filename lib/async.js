

var Async = function(){
this.map = function (array, func, callback) {
    // array => images
    // func => downloadImage
    // callback => function anonyme
    
    var count = array.length;
    var errors = [];
    var results = [];
    
    for (var i = 0; i < array.length; i++) {
     
     (function(i){
        func(array[i], function (error, result) {
          count--;
          
          if (error) errors[i] = error;
          else results[i] = result;
          
          if (count < 1) return callback((errors.length > 0) ? errors : null, results);
        });
       
    })(i);
  }
  
  };
}
  module.exports = new Async();



