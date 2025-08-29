Question-1:
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answere-1:
(i) getElementById is used to select a single element by its unique id.
(ii)  getElementsByClassName is used to elects all elements with a given class.
(iii) querySelector / querySelectorAll select elements using CSS selectors. 


Question-2:
How do you create and insert a new element into the DOM?
Answere-2:
step-1 I will create a new element.
step-2  to add content or attributes
step-3 Then I will insert the element into the DOM
thus it is created and inserted a new element into the DOM


Question-3:
What is Event Bubbling and how does it work?
Answere-3:
Event Bubbling is a type of event propagation in the DOM where an event triggered on a child element “bubbles up” through its parent elements.
Event Bubbling works in following steps:
step-1 Click the button (child).
step-2 Event triggers on child first .
step-3 Then bubbles to parent.
step-4 Then bubbles to body .


Question-4:
What is Event Delegation in JavaScript? Why is it useful?
Answere-4:
Event Delegation is a technique where a single event listener can be attached to a parent element instead of adding separate listeners to each child element.
it is usefull because:
1.Instead of attaching many listeners to child elements, i can attach one listener to the parent.
2.It works with dynamically added elements.
3.easier to manage one listener instead of multiple using it.


Question-5:
What is the difference between preventDefault() and stopPropagation() methods?
Answere-5:
preventDefault() Prevents the default browser behavior ,it does not stop the event from bubbling and commonly used with form submissions, links, or other elements that have default actions.
on the other hand,stopPropagation() stops the event from bubbling up,the default browser behavior still happens unless  preventDefault() is called and an event can be only handled by the target element. 






