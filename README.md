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


