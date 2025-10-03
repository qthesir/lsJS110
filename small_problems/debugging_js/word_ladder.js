let ladder = "";

["head", "heal", "teal", "tell", "tall", "tail"].forEach(
  (word) => {
    if (ladder !== "") {
      ladder += "-";
    }

    ladder += word;
  }
);

console.log(ladder); // expect: head-heal-teal-tell-tall-tail

/*
Upon first glance, Gemma's code below looks like it should work. But it throws a 
TypeError, saying: Cannot read property 'forEach' of undefined. Why is that?

Hmmmm.... This is pretty tricky. Why is that? Upon some brief experimentation 

Wow, it was missing a semicolon. JavaScript, for some reason, thought the 
literal was coming right after the variable name. 

The solution, although it took me some time to spot it, is simple: The semicolon 
from the ladder variable declaration was missing a semicolon. From the standpoint 
of the JavaScript parser (am I being precise when I say 'JavaScript parser?'), 
the array literal came right after the empty quotes, which looks something like this:
''['head','heal', 'etc...'], which is evaluated as undefined. 
Therefore, forEach is being called on ''['head','heal', 'etc...'], and is 
therefore being called on undefined, hence the TypeError.

The proper term for whats happening to this is ''['something'], is that the ['something']
is acting as an "accessor". An accesor is, like, [1,2,3][1], the [] notation to access an
element in an array or a string. Since ['head','heal','etc'] didn't access anything, or
was not a reference to any element '', undefined is returned. Another way to say this 
is 'property access', or accessing a property on an object. 
*/
