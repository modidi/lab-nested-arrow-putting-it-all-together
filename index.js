// function createLoginTracker(userInfo){
//   const userInfo = {
//     username: "user1",
//     password: "password123"
//   };


// }

function createLoginTracker(userInfo) {
  let attemptCount = 0;

  return (passwordAttempt) => {
    attemptCount++;

    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    return `Attempt ${attemptCount}: Login failed`;
  };
}

// // Example usage
// const loginTracker = createLoginTracker({
//   username: "user1",
//   password: "password123",
// });

// console.log(loginTracker("wrong"));
// console.log(loginTracker("hello"));
// console.log(loginTracker("test"));
// console.log(loginTracker("password123"));


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};