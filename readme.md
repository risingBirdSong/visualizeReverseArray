## Visualize reversing an array

## 

to use, first load the dependencies and then run npm start 

## lessons

### useEffect

 ``` 
 React.useEffect(() => {
    stepping === false && startIdx + 1 >= endIdx ? finish(true) : "";
  }, [startIdx, stepping, endIdx]); 
 ```

interesting, learned something new about dependencies with useEffect, 
i was expecting the finish function to fire with a true boolean after the 'finish' logic hit,
but instead it was never finishing. later realizing that i hadn't
included variable stepping in the list of dependencies, so i think useEffect wasn't including stepping
in its logic and therefore the logic wasnt behaving as expected.

including stepping in the dependencies fixed the bug.
Another solution is to leave out all the depencies which forces this effect to run everytime
but i think including the correct dependencies is the more correct solution.
