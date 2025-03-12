<script>
  let { form } = $props()
</script>

<form method="POST" class="flex flex-col gap-2 w-full h-full items-center justify-center">
  {#if form?.invalid}
    <p>Invalid username or password.</p>
  {/if}
  <label class="flex flex-col">
    Username
    <input type="text" name="username" placeholder="Username" class="p-2 px-4 border border-gray-400 rounded-lg">
  </label>
  <label class="flex flex-col">
    Password
    <input type="password" name="password" placeholder="Password" class="p-2 px-4 border border-gray-400 rounded-lg">
  </label>
  <p>Don't have an account? <a href="/register" class="text-blue-600">Register</a></p>
  <button type="submit" class="p-2 px-4 border border-gray-400 rounded-lg">Login</button>
</form>