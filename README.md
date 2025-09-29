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