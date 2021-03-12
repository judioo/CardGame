# CardGame
TDD Coding Exercise

### Task
Create code capable of playing multiple card games (i.e. blackjack, snap, poker, etc.).

Assume that you'll always use a standard [52 card deck] (possibly more than one). Try and model real-world entities (Card, Pack Of Cards, deck, etc.). Think of all the things each entity should do and how it should behave.

Try and write tests around each behaviour.  For every positive test, write at least one negative test. They tend to be the ones that define your code.
I have started you off with a test file and class file for ```PlayingCard.js```

### Coding
You MUST adhere to the [three rules of TDD], which are: 
You are not allowed to write any production code unless it is to make a failing unit test pass.
You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
You are not allowed to write any more production code than is sufficient to pass the one failing unit test.
Read the [three rules of TDD] for more background about the rules.

### Gotchas
If you haven't done TDD before (or you've done TDD, but [not strictly following the rules above]), these are the most common gotchas:

You write production code BEFORE you write a test. For example, you write a production class for your class before you've written a test requiring the class. Don't do this. Resist.


You write MORE than is needed for the test to pass. For example, you write a test to test a class can be instantiated. 
```
it('can be instantiated', () => {
	expect(new MyClass(attribute1, attribute2)).toBeInstanceOf(MyClass);
})
```
and in your code you write
```
class MyClass {
	constructor(attribute1, attribute2) {
		this.attribute1 = attribute1;
		this.attribute2 = attribute2;
	}
}
```

What you have done is predict the future (by providing and allocating the attributes) as your test does not test or require attributes. Don't do this. Resist.

Don't try and predict the future. Yes, we are pretty sure we will need attributes. However, wait until you write a test where the attribute's absence makes a test fail.


### Running Tests
I'm using [jest] as my test framework as it has many many useful features (mocking/code coverage)

```
yarn install  # yes, I'm using yarn!
yarn run test:watch:coverage
```

The above will start jest watcher and run the test every time a *.js file changes state in the ```src``` directory.

Enjoy!


[not strictly following the rules above]:https://www.thefirsthabit.com/wp-content/uploads/2016/12/youre-doing-it-wrong.jpg-900x500.jpg
[52 card deck]:https://en.wikipedia.org/wiki/Standard_52-card_deck
[three rules of TDD]:http://butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd
[jest]:https://jestjs.io/


