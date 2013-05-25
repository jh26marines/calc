function Calculator(){
  
	this.expression = '';
	
	this.getExpression = function(){
	   return this.expression;
   };
   
    this.append = function(ch){
      this.expression = this.expression + ch
   };
    this.clearEntry = function(){
       msg = this.expression;
      this.expression = msg.substring(0, msg.length -1);
   };
    this.clear = function(){
    this.expression = '';
   };
    this.calculate = function(){
          value = this.expression;
          value.replace('Å~', '*');
          value.replace('ÅÄ', '/');
          siki = this.expression;
          this.expression = eval(siki);
       };
}
