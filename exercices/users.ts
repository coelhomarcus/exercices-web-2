interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

function createUser(user: User): User {
  return {
    id: Math.floor(Math.random() * 1000),
    name: user.name,
    age: user.age,
    email: user.email,
  };
}

function getUserSummary(user: User): string {
  return `${user.name} - ${user.age} anos - ${user.email}`;
}

function isAdult(user: User): boolean {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}
