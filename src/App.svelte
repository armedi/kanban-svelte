<script>
  import Navbar from "./components/Navbar/index.svelte";
  import NewTask from "./components/NewTask/index.svelte";
  import Columns from "./components/Columns/index.svelte";
</script>

<main class="min-h-screen sm:flex sm:flex-col">
  <section class="sm:flex-none mb-8">
    <Navbar />
  </section>
  <section class="container mx-auto sm:flex sm:flex-col sm:flex-1">
    <section class="sm:flex-none mb-8 ml-4">
      <NewTask />
    </section>
    <section class="sm:flex-1 h-px">
      <Columns />
    </section>
  </section>
</main>
