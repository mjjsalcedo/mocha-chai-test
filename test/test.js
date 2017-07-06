/*jshint esversion:6*/
var chai = require('chai');

var expect = chai.expect;
var should = chai.should();

describe('Person Class', function() {

  it('should be a function', function() {
    expect(Person).to.be.a('function');
  });

  it('should have a property name', function() {
    expect(Howl.name).to.be.a('string');
    expect(Howl.name).to.equal('Howl');
    expect(Howl.name).to.not.equal('Markl');
  });

  it('should have a property age that is a number', function() {
    expect(Howl.age).to.be.a('number');
  });

  it('should have a method sayHello()', function() {
    expect(Howl.sayHello()).to.equal('Hello!');
  });

  it('should have a method sayName()', function() {
    expect(Howl.sayName()).to.equal(`My name is ${Howl.name}`);
  });

  it('should have a method sayAge()', function() {
    expect(Howl.sayAge()).to.equal(`I am ${Howl.age} years old`);
  });
});

class Person {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  sayHello(){
    return "Hello!";
  }

  sayName(){
    return "My name is " + this.name;
  }

  sayAge(){
    return "I am " + this.age + " years old";
  }

}

var Howl = new Person('Howl', 24);