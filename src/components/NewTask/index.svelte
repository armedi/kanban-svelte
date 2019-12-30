<script>
  import { afterUpdate } from "svelte";
  import Icon from "svelte-awesome";
  import { plusCircle, times } from "svelte-awesome/icons";
  import { tasks } from "../../store";

  let showInput = false;
  let input;

  afterUpdate(() => {
    input && input.focus();
  });
</script>

<div
  class="inline-flex items-center text-gray-600 hover:text-orange-700
  cursor-pointer h-10"
  on:click={() => {
    showInput = true;
  }}>
  {#if showInput}
    <span
      class="text-red-500"
      on:click|stopPropagation={() => {
        showInput = false;
      }}>
      <Icon data={times} scale="1.5" />
    </span>
    <input
      bind:this={input}
      class="border shadow rounded h-full inline-block ml-3 px-3 w-64"
      on:keyup={e => {
        if (e.which === 13) {
          tasks.add(e.target.value);
          showInput = false;
        } else if (e.which === 27) {
          showInput = false;
        }
      }} />
  {:else}
    <Icon data={plusCircle} scale="1.75" class="inline-block" />
    <span class="inline-block ml-3 font-semibold text-lg">Create New Task</span>
  {/if}
</div>
