# Patterns:
## Creational
These patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.  
Factory, Singleton, Dependency Injection
## Structural
These patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.  
Decorator, Facade
## Behavioral
These patterns are concerned with algorithms and the assignment of responsibilities between objects.  
Strategy, Observer    
## Factory
Using separate class for creation of all kinds of objects instead of new...  
interface IFruit {  
&emsp;type: string;  
&emsp;wage: number;  
}  
  
class Apple {  
&emsp;private props: IFruit;  
&emsp;constructor (data: IFruit) {  
&emsp;&emsp;this.props = data;  
&emsp;}  
}  
  
class Banana {  
&emsp;private props: IFruit;  
&emsp;constructor (data: IFruit) {  
&emsp;&emsp;this.props = data;  
&emsp;}  
}  
  
class FruitFactory {  
&emsp;create(data: IFruit) {  
&emsp;&emsp;switch (data.type) {  
&emsp;&emsp;&emsp;case 'Apple':  
&emsp;&emsp;&emsp;&emsp;return new Apple(data);  
&emsp;&emsp;&emsp;case 'Banana':  
&emsp;&emsp;&emsp;&emsp;return new Banana(data);  
&emsp;&emsp;&emsp;default:  
&emsp;&emsp;&emsp;&emsp;throw new Error('Unknown fruit!');  
&emsp;&emsp;}  
&emsp;}  
}  
const fruit = new FruitFactory();  
const apple = fruit.create({type: 'Apple', wage: 0.5});  
const banana = fruit.create({type: 'Banana', wage: 0.3})  
## Singleton
Ensures that only one object of its kind exists and provides a single point of access to it for any other code.  
class Singleton {  
&emsp;constructor () {  
&emsp;&emsp;if (Singleton.instance) {  
&emsp;&emsp;&emsp;return Singleton.instance  
&emsp;&emsp;}  
      
&emsp;&emsp;Singleton.instance = this  
&emsp;}  
}  
## Decorator
Allows adding new behaviors to objects dynamically by placing them inside special wrapper objects, called decorators.  
class Marine {  
&emsp;constructor(_damage, _armor) {  
&emsp;&emsp;Object.assign(this, { _damage, _armor });  
&emsp;}  
&emsp;get damage() { return this._damage; }  
&emsp;get armor() { return this._armor; }  
}  
class MarineWeaponUpgrade {  
&emsp;constructor(marine) { this.marine = marine }  
&emsp;get damage() { return this.marine.damage + 1 }  
&emsp;get armor() { return this.marine.armor }  
}  
class MarineArmorUpgrade {  
&emsp;constructor(marine) { this.marine = marine }  
&emsp;get damage() { return this.marine.damage; }  
&emsp;get armor() { return this.marine.armor + 1; }  
}
let marine = new Marine(15, 1);  
marine = new MarineWeaponUpgrade(marine); // 16, 1
marine = new MarineArmorUpgrade(marine); // 16, 2  
## Facade
Hiding complex logic behind simple interface.  
class Facade {  
&emsp;protected subsystem1: Subsystem1;  
&emsp;constructor(subsystem1?: Subsystem1) {  
&emsp;&emsp;this.subsystem1 = subsystem1 || new Subsystem1();  
&emsp;}  
&emsp;public operation(): string {  
&emsp;&emsp;let result = this.subsystem1.operation1();  
&emsp;&emsp;result += this.subsystem1.operationN();  
&emsp;&emsp;return result;  
&emsp;}  
}  
class Subsystem1 {  
&emsp;public operation1(): string {  
&emsp;&emsp;return 'Subsystem1: Ready!\n';  
&emsp;}  
&emsp;public operationN(): string {  
&emsp;&emsp;return 'Subsystem1: Go!\n';  
&emsp;}  
}  
function clientCode(facade: Facade) {  
&emsp;console.log(facade.operation());  
}  
const subsystem1 = new Subsystem1();  
const facade = new Facade(subsystem1);  
clientCode(facade); 
## Strategy
Turns a set of behaviors into objects and makes them interchangeable inside original context object.  
class Planning {  
&emsp;strategy: Strategy;  
&emsp;constructor (strat: Strategy) {  
&emsp;&emsp;this.strategy = strat;  
&emsp;}  
&emsp;doSomeBusinessLogic(): void {  
&emsp;&emsp;const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);  
&emsp;&emsp;console.log(result.join(','));  
&emsp;}  
}  
interface Strategy {  
&emsp;doAlgorithm(data: string[]): string[];  
}  
class StratA implements Strategy {  
&emsp;public doAlgorithm(data: string[]): string[] {  
&emsp;&emsp;return data.sort();  
&emsp;}  
}  
class StratB implements Strategy {  
&emsp;public doAlgorithm(data: string[]): string[] {  
&emsp;&emsp;return data.reverse();  
&emsp;}  
}  
const context = new Planning(new StratA());  
context.doSomeBusinessLogic();  
context.strategy = new StratB();  
context.doSomeBusinessLogic();  

## Dependency Injection
The main idea of this pattern is that you may have ability to pass dependencies into your function in any order and they will be resolved automatically.
var DI = function (dependency) {  
&emsp;this.dependency = dependency;  
};  
  
DI.prototype.inject = function(func) {  
&emsp;const deps = this.dependency;  
&emsp;const FN_ARGS = /^function\s*[^ (]*\(\s*([^)]*)\)/m;  
&emsp;const FN_ARG_SPLIT = /,/;  
  
&emsp;const fnText = func.toString();  
  
&emsp;const argNames = fnText  
&emsp;&emsp;.match(FN_ARGS)[1]  
&emsp;&emsp;.split(FN_ARG_SPLIT)  
&emsp;&emsp;.map((arg) => arg.trim())  
&emsp;&emsp;.filter((arg) => arg.length > 0);  
  
&emsp;const resolvedDependencies = argNames.map((argName) => deps[argName]);  
  
&emsp;return function() {  
&emsp;&emsp;return func.apply(this, resolvedDependencies);  
&emsp;};  
};  
var deps = {  
&emsp;'dep1': function () {return 'this is dep1';},  
&emsp;'dep2': function () {return 'this is dep2';},  
&emsp;'dep3': function () {return 'this is dep3';},  
&emsp;'dep4': function () {return 'this is dep4';}  
};  
var di = new DI(deps);  
var myFunc = di.inject(function (dep3, dep1, dep2) {  
&emsp;return [dep1(), dep2(), dep3()].join(' -> ');  
});  
## Observer
Provides a way to subscribe and unsubscribe to and from these events for any object that implements a subscriber interface.
interface Subject {  
&emsp;attach(observer: Observer): void;  
&emsp;detach(observer: Observer): void;  
&emsp;notify(): void;  
}  
  
class ConcreteSubject implements Subject {  
&emsp;public state: number;  
&emsp;private observers: Observer[] = [];  
  
&emsp;public attach(observer: Observer): void {  
&emsp;&emsp;const isExist = this.observers.includes(observer);  
&emsp;&emsp;if (isExist) {  
&emsp;&emsp;&emsp;return console.log('Subject: Observer has been attached already.');  
&emsp;&emsp;}  
  
&emsp;&emsp;console.log('Subject: Attached an observer.');  
&emsp;&emsp;this.observers.push(observer);  
&emsp;}  
  
&emsp;public detach(observer: Observer): void {  
&emsp;&emsp;const observerIndex = this.observers.indexOf(observer);  
&emsp;&emsp;if (observerIndex === -1) {  
&emsp;&emsp;&emsp;return console.log('Subject: Nonexistent observer.');  
&emsp;&emsp;}  
  
&emsp;&emsp;this.observers.splice(observerIndex, 1);  
&emsp;&emsp;console.log('Subject: Detached an observer.');  
&emsp;}  
  
&emsp;public notify(): void {  
&emsp;&emsp;console.log('Subject: Notifying observers...');  
&emsp;&emsp;for (const observer of this.observers) {  
&emsp;&emsp;&emsp;observer.update(this);  
&emsp;&emsp;}  
&emsp;}  
  
&emsp;public someBusinessLogic(): void {  
&emsp;&emsp;console.log('\nSubject: I\'m doing something important.');  
&emsp;&emsp;this.state = Math.floor(Math.random() * (10 + 1));  
  
&emsp;&emsp;console.log(`Subject: My state has just changed to: ${this.state}`);  
&emsp;&emsp;this.notify();  
&emsp;}  
}  
  
interface Observer {  
&emsp;update(subject: Subject): void;  
}  
  
class ConcreteObserverA implements Observer {  
&emsp;public update(subject: Subject): void {  
&emsp;&emsp;if (subject instanceof ConcreteSubject && subject.state < 3) {  
&emsp;&emsp;&emsp;console.log('ConcreteObserverA: Reacted to the event.');  
&emsp;&emsp;}  
&emsp;}  
}  
  
const subject = new ConcreteSubject();  
  
const observer1 = new ConcreteObserverA();  
subject.attach(observer1);  
  
subject.someBusinessLogic();  
subject.someBusinessLogic();  
  
subject.detach(observer1);