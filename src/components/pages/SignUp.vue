<template>
  <div class="signup-page">
    <h1>SignUp</h1>
    <div class="form-group">
      <label for="username">Username:</label>
      <input type="text" v-model="username" placeholder="Enter Username">
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" v-model="email" placeholder="Enter Email">
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" v-model="password" placeholder="Enter Password">
    </div>
    <div class="form-group">
      <label for="userType">UserType:</label>
      <select v-model="userType">
        <option value="company">Company</option>
        <option value="freelancer">Freelancer</option>
        <option value="employee">Employee</option>
      </select>
    </div>

    <!-- Render additional fields based on user type -->
    <div v-if="userType === 'company'" class="form-group">
      <label for="companyName">Company Name:</label>
      <input type="text" v-model="companyName" placeholder="Enter Company Name">
      <label for="businessType">Business Type:</label>
      <input type="text" v-model="businessType" placeholder="Enter Business Type">
      <label for="industry">Industry:</label>
      <input type="text" v-model="industry" placeholder="Enter Industry">
      <label for="registrationNumber">Registration Number:</label>
      <input type="text" v-model="registrationNumber" placeholder="Enter Registration Number">
    </div>

    <div v-else-if="userType === 'freelancer'" class="form-group">
      <label for="freelancerName">Freelancer Name:</label>
      <input type="text" v-model="freelancerName" placeholder="Enter Freelancer Name">
      <label for="industry">Industry:</label>
      <input type="text" v-model="industry" placeholder="Enter Industry">
    </div>

    <div v-else-if="userType === 'employee'" class="form-group">
      <label for="employeeName">Employee Name:</label>
      <input type="text" v-model="employeeName" placeholder="Enter Employee Name">
      <label for="phoneNumber">Phone Number:</label>
      <input type="text" v-model="phoneNumber" placeholder="Enter Phone Number">
      <label for="dob">Date of Birth:</label>
      <input type="date" v-model="dob">
      <label for="gender">Gender:</label>
      <select v-model="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <label for="departmentId">Department ID:</label>
      <input type="text" v-model="departmentId" placeholder="Enter Department ID">
    </div>

    <button type="button" @click="signup">SignUp</button>
    <router-link to="/">Login</router-link>
  </div>
</template>

<script>
export default {
  name: 'SignUp',

  data() {
    return {
      username: '',
      email: '',
      password: '',
      userType: 'company',
      companyName: '',
      businessType: '',
      industry: '',
      registrationNumber: '',
      freelancerName: '',
      employeeName: '',
      phoneNumber: '',
      dob: '',
      gender: '',
      departmentId: ''
    };
  },

  methods: {
    signup() {
      // Check if the user already exists in local storage
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

      // Check if the user with the same email already exists
      const existingUser = storedUsers.find(u => u.email === this.email);

      if (existingUser) {
        // Display error message
        alert('User with this email already exists!');
        return;
      }

      // Create a new user object based on user type
      const newUser = {
        username: this.username,
        email: this.email,
        password: this.password,
        userType: this.userType,
        companyName: this.companyName,
        businessType: this.businessType,
        industry: this.industry,
        registrationNumber: this.registrationNumber,
        freelancerName: this.freelancerName,
        employeeName: this.employeeName,
        phoneNumber: this.phoneNumber,
        dob: this.dob,
        gender: this.gender,
        departmentId: this.departmentId

      };
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));
      alert('SignUp successful!');
    }
  }
};
</script>

<style scoped>
.signup-page {
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

input,
select {
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
