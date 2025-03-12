<script>
    import { stopPropagation } from "svelte/legacy";

  let { data } = $props()
  let showAddPrompt = $state(false)
  let totalPages = $state()
  let bookName = $state('')

  const closePrompt = (e) => {
    showAddPrompt = false
    bookName = ''
    totalPages = null
  }

  const showPrompt = () => {
    showAddPrompt = true
  }
</script>
<div class="p-8 pt-2 flex flex-col h-full">
  <div hidden={!showAddPrompt} class="flex justify-center items-center h-screen w-screen absolute top-0 left-0 bg-[rgba(0,0,0,0.5)]" onclick={closePrompt} onkeydown={closePrompt} role="button" tabindex="0">
    <div class="flex justify-center items-center h-fit w-fit border rounded-lg p-2 flex-col gap-2 bg-white" onclick={(e)=>e.stopPropagation()} onkeydown={(e)=>e.stopPropagation()} role="button" tabindex="0">      
      <form action="?/add" method="POST" class="flex flex-col justify-center items-center gap-2">
        <label class="flex flex-col">
          Book Name
          <input type="text" bind:value={bookName} name="book-name" placeholder="Book Name" class="p-2 px-4 border border-gray-400 rounded-lg" required>
        </label>
        <label class="flex flex-col">
          Total Pages
          <input type="number" min="1" bind:value={totalPages} name="total-pages" placeholder="Total Pages" class="p-2 px-4 border border-gray-400 rounded-lg" required>
        </label>
        <label class="flex flex-col">
          Current Page
          <input type="number" max={totalPages} value="1" name="current-page" placeholder="Current Page" class="p-2 px-4 border border-gray-400 rounded-lg" required>
        </label>
        <button type="submit" class="p-2 rounded-lg bg-blue-300 w-40">Add</button>
      </form>
    </div>
  </div>
  <div>
    <button class="p-2 rounded-lg bg-blue-300" onclick={() => showAddPrompt = true}>Add Book</button>
  </div>
  <div class="flex flex-col mt-4 flex-1 overflow-auto w-full min-w-0 no-scrollbar gap-2">
    {#if data.books.length == 0}
      <p>You haven't added any books.</p>
    {:else}
      {#each data.books as book}
        <div class="flex flex-col border rounded-lg p-4 w-1/2">
          <div class="flex justify-between gap-2">
            <form action="?/updateCurrentPage" method="POST" class="flex flex-col gap-4">
              <input type="hidden" name="book-id" value={book.id}>
              <div>
                <p class="text-lg">Book Name: {book.name}</p>
                <p class="text-lg">Progress: {Math.floor((book.current_page/book.total_pages) * 100)}%</p>
              </div>
              <div class="flex">
                <p>Page: <input type="number" name="current-page" required max={book.total_pages} min="1" value={book.current_page} class="p-2 border border-gray-400 rounded-lg w-32"> / {book.total_pages}</p>
                <button class="ml-4 p-2 rounded-lg bg-blue-300">Update</button>
              </div>
            </form>
            <form action="?/deleteBook" method="POST" class="flex justify-center items-center">
              <input type="hidden" name="book-id" value={book.id}>
              <button class="mr-2 bg-red-500 h-fit text-white p-2 rounded-lg">Delete</button>
            </form>
          </div>
        </div>
      {/each}
    {/if}
  </div>
</div>