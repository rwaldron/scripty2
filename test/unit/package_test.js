new Test.Unit.Runner({
  
  testS2Defined: function() { with(this) {
    assertNotUndefined(window['s2']);
  }}
  
});