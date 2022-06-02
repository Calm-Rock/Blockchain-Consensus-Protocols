Proof of work consensus based Blockchain written in JavaScript

### Constructor Function 
We'll use a JS contructor function to build the blockchain data structure

Constructor function helps you to create an object class and lets you create multiple instances of that class very easily
Ex. -> Facebook has Billions of users and these users are objects of the same class. They have the same properties, ie, name, email, DOB etc.

Example of a user constructor function for Facebook
```js
/// The consructor funtion starts with a capital letter. 
/// Inside the parenthesis we pass the properties of the user objects that we want.
/// We assign these parameters to the constructor function using the 'this' keyword.
/// This constructor funtion will be used to create a lot of user objects/instances.

function User(firstName, lastName, age, gender) { 
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
}
```

```js
/// 'new' keyword is used to invoke the constructor function
var user1 = new User('John', 'Smith', 26, 'male');
```

The prototype object is simply an object that multiple other objects can refer to get any information or functionality that they need.

If we want our constructor function instances to have a property that is the same for all of them or all have a method that is same for all of them then we use the prototype to keep the instances more lean and cleaner.

```js
User().prototype.emailDomain = "@facebook.com"

/// > user1.emailDomain
/// > facebook.com

User().prototype.emailAddress = function () {
    return this.firstName + this.lastName + this.emailDomain
}

/// > User1.emailAddress
/// > johnsmith@facebook.com  User1 firstName = 'john' and lastName = 'smith'
```

Classes in JavaScript are simple sugar coating of Constructor function and object prototype so it would be a good option to just go with Constructor functions.

```
Proof of work is difficult to calculate but once we get the correct nonce or proof it is very easy to verify
```