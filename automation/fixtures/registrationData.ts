export const validUser = {
  username: 'testuser',
  email: 'test@example.com',
  password: 'Test123'
};

export const invalidUsers = [
  { username: '', email: 'valid@example.com', password: 'Test123', error: 'Username must be at least 3 characters' },
  { username: 'ab', email: 'valid@example.com', password: 'Test123', error: 'Username must be at least 3 characters' },
  { username: 'validuser', email: '', password: 'Test123', error: 'Please enter a valid email address' },
  { username: 'validuser', email: 'invalidemail', password: 'Test123', error: 'Please enter a valid email address' },
  { username: 'validuser', email: 'test@example.com', password: '', error: 'Password must be at least 6 characters' },
  { username: 'validuser', email: 'test@example.com', password: '12345', error: 'Password must be at least 6 characters' },
  { username: 'validuser', email: 'test@example.com', password: 'Test123', confirmPassword: 'Test456', error: 'Passwords do not match' },
  { username: 'existinguser', email: 'unique@example.com', password: 'Test123', error: 'Username already exists' },
  { username: 'uniqueuser', email: 'existing@example.com', password: 'Test123', error: 'Email is already registered' }
];

export const boundaryUsers = [
  { username: 'abc', email: 'abc@example.com', password: '123456', confirmPassword: '123456', description: 'Username and password at minimum length' }
];

export const exploratoryUsers = [
  { username: 'user_name', email: 'test1@example.com', password: 'Test123' },
  { username: 'user-name', email: 'test2@example.com', password: 'Test123' },
  { username: 'user.name', email: 'test3@example.com', password: 'Test123' },
  { username: 'user@name', email: 'test4@example.com', password: 'Test123' },
  { username: 'user name', email: 'test5@example.com', password: 'Test123' },
  { username: 'u'.repeat(100), email: 'x'.repeat(100) + '@example.com', password: 'p'.repeat(100) }
];
