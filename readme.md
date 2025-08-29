## Question 1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**Answer:**  
- `getElementById()` selects a single element based on its unique id attribute and returns a single Element object or null if no element with the given ID is found.  
- `getElementsByClassName()` selects all elements that possess a specific class name and returns an `HTMLCollection`, which is an array-like object containing the matching elements.  
- `querySelector()` selects the first element that matches a specified CSS selector and returns a single Element object or null if no matching element is found.  
- `querySelectorAll()` selects all elements that match a specified CSS selector and returns a `NodeList`, which is an array-like object containing all matching elements.


---

## Question 2: How do you create and insert a new element into the DOM?

**Answer:**  
To create and insert a new element into the DOM, we first create the element and then append it to a parent element on the page.  
First, we use `document.createElement()` to create a new element node with a specified tag name. Then we add content to the new element. Some of the ways to add new contents are as follows:
- `.textContent()`
- `.innerHTML()`
- `.createTextNode()`

Finally, we append or prepend the new element using `append()`, `appendChild()`, `prepend()`, `insertBefore()`, `after()`, etc.

---

## Question 3: What is Event Bubbling and how does it work?

**Answer:**  
Event bubbling is how most DOM events travel up the tree. First the event fires on the element you actually clicked (the target), then “bubbles” to its parent, then that parent’s parent, and so on up to document.

---

## Question 4: What is Event Delegation in JavaScript? Why is it useful?

**Answer:**  
Event delegation is a pattern where we can attach one event listener to a common ancestor instead of adding a listener to every child. When a child is clicked, the event bubbles up to the ancestor; inside that single handler you check which child was actually clicked and run the right logic.  
It is useful as it allows us to write cleaner code, and create fewer event listeners with similar logic, as a result, less memory uses.

---

## Question 5: What is the difference between preventDefault() and stopPropagation() methods?

**Answer:**  
The method `preventDefault()` prevents the default action associated with a specific event from occurring. The default action is the browser's built-in behavior for that event.  
On the other hand, `stopPropagation()` method stops the event from propagating further up or down the DOM tree during the event phases (capturing and bubbling). It prevents parent or child elements from receiving the event if they have their own event listeners for the same event type.