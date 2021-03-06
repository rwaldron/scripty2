Function.prototype.optionize = function(){
  var self = this, argumentNames = self.argumentNames(), optionIndex = argumentNames.length - 1, 
    method = function(){
    var args = $A(arguments), options = typeof args.last() == 'object' ? args.pop() : {},
      prefilledArgs = (optionIndex == 0 ? [] : 
        ((args.length > 0 ? args : [null]).inGroupsOf(optionIndex).flatten())).concat(options);
    return self.apply(this, prefilledArgs);
  };
  method.argumentNames = function(){ return argumentNames };
  return method;
};

/** section: scripty2 core
 * class Number
 *  
 *  Extensions to the built-in `Number` object.
**/

/**
 *  Number#tween(target, position) -> Number
 *  - target (Number): tween target
 *  - position (Number): position between 0 (start of tween) and (end of tween); can also be < 0 and > 1.
 *
 *  Returns the number that is a given percentage between this number and a target number.
 *
 *      (1).tween(2, 0.5) -> 1.5
 *      (1).tween(2, 0) -> 1
 *      (1).tween(2, 1) -> 2
**/
Number.prototype.tween = function(target, position){
  return this + (target-this) * position;
};

Object.propertize = function(property, object){
  return Object.isString(property) ? object[property] : property;
};