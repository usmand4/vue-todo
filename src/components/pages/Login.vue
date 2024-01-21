<template>
  <div class="login-page">
    <h1>Login</h1>
      <div class="form-group">
        <label>Email:</label>
        <input type="email"  v-model="email" placeholder="Enter Email">
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password"  v-model="password" placeholder="Enter Password">
      </div>
      <button type="button" @click="login">Login</button>
      <router-link to="/signup">Sign Up</router-link>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Check if user exists in local storage
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = storedUsers.find(u => u.email === this.email && u.password === this.password);

      if (user) {
        // Display success message
        alert('Login successful!');
      } else {
        // Display error message
        alert('Invalid email or password');
      }
    }
  }
};
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}
</style>
