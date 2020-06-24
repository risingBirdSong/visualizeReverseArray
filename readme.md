## lessons

### useEffect

  React.useEffect(() => {
    stepping === false && startIdx + 1 >= endIdx ? finish(true) : "";
  }, [startIdx, stepping, endIdx]);

interesting, learned something new about dependencies with useEffect, i was expecting to log
"were done" after the last reverse took place, not done kept logging, later realizing that i hadn't
included stepping in the list of dependencies, so i think useEffect was including stepping in it's logic
and therefore the logic wasnt behaving as expected.

including stepping in the dependencies fixed the bug.
Another solution is to leave out all the depencies which forces this effect to run everytime
but i think including the correct dependencies is the more correct solution.
