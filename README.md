# Javascript-promise
This repository contains a simple JavaScript example demonstrating the use of Promises. It illustrates how to handle asynchronous operations using .then(), .catch(), and .finally()
 The example simulates a decision-making scenario where a ride is either taken by cab or bike based on the arrived variable.

 # JavaScript Promises Example 🚀

This repository demonstrates the fundamental usage of **JavaScript Promises**, a powerful way to handle asynchronous operations.

## 📝 Overview

A **Promise** in JavaScript represents a value that may be available now, in the future, or never. It has three states:
- **Pending**: The initial state
- **Resolved (Fulfilled)**: The operation was successful
- **Rejected**: The operation failed

This example simulates a real-world scenario where a person decides whether to take a cab or a bike depending on whether they have arrived on time.

## 📜 Code Explanation

```javascript
const arrived = true;  // Change this to false to test rejection

const ride = new Promise((resolve, reject) => {
    if (arrived) {
        resolve('I will take the cab');
    } else {
        reject('I will take the bike');
    }
});

ride
    .then(resolved => {
        console.log(resolved);
    })
    .catch(rejected => {
        console.log(rejected);
    })
    .finally(() => {
        console.log('I will reach the class');
    });


🎯 Learning Outcomes
Understanding JavaScript Promises
Using .then(), .catch(), and .finally()
Handling asynchronous operations effectively

