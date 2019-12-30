<script>
  import Icon from "svelte-awesome";
  import { trash } from "svelte-awesome/icons";
  import { tasks } from "../../../../store";

  export let task;
  export let styles;

  const handleDelete = () => {
    tasks.delete(task.id);
  };

  const handleDragStart = e => {
    window.el = e.currentTarget
    e.dataTransfer.setData("type", "task");
    e.dataTransfer.setData("task", JSON.stringify(task));
  };

</script>

<div
  draggable={true}
  on:dragstart={handleDragStart}
  class={`group border-t ${styles.headerBorderColor} shadow-md h-16 mx-2 my-4 flex items-center justify-center cursor-move relative`}>
  <p>{task.name}</p>
  <div
    class="w-8 h-8 text-red-600 absolute right-0 bottom-0 hidden
    group-hover:flex items-center justify-center cursor-default"
    on:click={handleDelete}>
    <Icon data={trash} />
  </div>
</div>
