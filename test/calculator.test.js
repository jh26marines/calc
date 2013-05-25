test('constructor', function(){

    var c = new Calculator();

  ok(c instanceof Calculator, 'new演算子を付けてコンストラクタを呼び出す');




});

test('getExpression', function(){

    var c = new Calculator();
    
    var result = c.getExpression();
    
    equal(result, '');
    
});

test('append', function(){
   var c = new Calculator();
   
   c.expression = '12345';
   c.append('6');
   
   var result = c.getExpression();
    equal(result, '123456');

});

test('clearEntry', function(){
   var c = new Calculator();
   
   c.expression = '12345';
   c.clearEntry();
   
   var result = c.getExpression();
    equal(result, '1234');

});

test('clear', function(){

    var c = new Calculator();
    
    c.expression = '12345';
    c.clear();
    var result = c.getExpression();
    
    equal(result, '');
    
});

test('calculate', function(){

   var c = new Calculator();
   
   c.expression = '1 + 1';
   c.calculate();
   
   var result = c.getExpression();
   
   equal(result, '2');



});

test('calculate', function(){

   var c = new Calculator();
   
   c.expression = '5 - 1';
   c.calculate();
   
   var result = c.getExpression();
   
   equal(result, '4');



});
test('calculate', function(){

   var c = new Calculator();
   
   c.expression = '10 × 10';
   c.calculate();
   
   var result = c.getExpression();
   
   equal(result, '100');



});