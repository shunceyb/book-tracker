<script>
  let { form } = $props()
</script>

<form method="POST" class="flex flex-col gap-2 w-full h-full items-center justify-center">
  {#if form?.exists}
    <p>This username is already in use.</p>
  {/if}
  <label class="flex flex-col">
    Username
    <input type="text" name="username" placeholder="Username" class="p-2 px-4 border border-gray-400 rounded-lg" required>
  </label>
  <label class="flex flex-col">
    Password
    <input type="password" name="password" placeholder="Password" class="p-2 px-4 border border-gray-400 rounded-lg" required>
  </label>
  <label class="flex flex-col">
    Confirm Password
    <input type="password" name="confirm-password" placeholder="Confirm Password" class="p-2 px-4 border border-gray-400 rounded-lg" required>
  </label>
  <p>Already have an account? <a href="/login" class="text-blue-600">Login</a></p>
  <button type="submit" class="p-2 px-4 border border-gray-400 rounded-lg">Register</button>
</form>