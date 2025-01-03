console.log(1); // Print 1: This is the first command and it executes immediately without any delay.


// Function that prints 2 after 100ms, but the rest of the code keeps executing without waiting
setTimeout(() => {
  console.log(2); // Print 2: The function inside setTimeout will execute after 100ms. However, the execution of the code is not blocked at this point, and it continues running while waiting for the 100ms.
}, 100);

console.log(3); // Print 3: Prints 3 immediately after calling setTimeout, without waiting for the 100ms. The code continues executing while setTimeout is "waiting" to run.

/*

Why is this asynchronous?

- setTimeout allows JavaScript to run the function after a certain time (100ms) without blocking the rest of the code. This means the code can continue running, like how 3 is printed immediately after 1.

-The flow of the code is not interrupted by setTimeout — it simply "schedules" the function to run later and moves on with the rest of the instructions while waiting for that time to pass.

*/