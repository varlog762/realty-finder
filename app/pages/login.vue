<script setup lang="ts">
definePageMeta({
  title: "Login",
  layout: "auth",
});

const email = ref("");
const password = ref("");

const handleLogin = async () => {
  // TODO: Add
  const { data, error } = await useFetch("/api/auth/login", {
    method: "POST",
    body: {
      email: email.value,
      password: password.value,
    },
  });

  if (error.value) {
    alert(error.value.data.statusMessage || "Что-то пошло не так");
  } else {
    console.log("Успех!", data.value);
    alert(data.value);

    // В БУДУЩЕМ: мы здесь сохраним data.value.token и перекинем юзера
  }
};
</script>

<template>
  <h1>Login Page</h1>
  <div class="form-container">
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" name="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password" />
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;

  .form-group {
    margin-bottom: 1.5rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
    }
  }

  button {
    width: 100%;
    padding: 0.75rem;
    background-color: #42b883;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background-color: #369870;
    }
  }
}
</style>
