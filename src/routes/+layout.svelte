<script>
  let { children, data } = $props();
  import "../app.css";

</script>

<div class="flex flex-col h-full w-full">
  <div class="bg-white w-full grow-0 basis-0 shrink-0 flex justify-between">
    <p class="p-4 text-2xl font-[Poppins] font-semibold">Book Tracker</p>
    <div class="flex justify-center items-center">
      {#if data?.username}
        <p>Welcome, {data.username}</p>
        <form action="?/logout" method="POST">
          <button class="p-2 bg-blue-300 m-2 rounded-lg">Logout</button>
        </form>
      {/if}
    </div>
  </div>
  <div class="grow-1 basis-full shrink-1 min-h-0 max-h-full">
    {@render children()}
  </div>
</div>