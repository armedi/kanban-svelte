<script context="module">
  const classNames = {
    "0": {
      header: "Todo",
      headerBgColor: "bg-red-100",
      borderColor: "border-red-100",
      textColor: "text-red-800",
      headerBorderColor: "border-red-800"
    },
    "1": {
      header: "Doing",
      headerBgColor: "bg-orange-100",
      borderColor: "border-orange-100",
      textColor: "text-orange-800",
      headerBorderColor: "border-orange-800"
    },
    "2": {
      header: "Done",
      headerBgColor: "bg-green-100",
      borderColor: "border-green-100",
      textColor: "text-green-800",
      headerBorderColor: "border-green-800"
    }
  };
</script>

<script>
  import Card from "./Card/index.svelte";
  import { tasks as tasksStore } from "../../../store";

  export let status;
  export let tasks;
  let isDraggedOver

  const {
    header,
    headerBgColor,
    borderColor,
    textColor,
    headerBorderColor
  } = classNames[status];


  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDragEnter = e => {
    isDraggedOver = true
  };

  const handleDragLeave = e => {
    isDraggedOver = false
  };

  const handleDrop = e => {
    isDraggedOver = false
    const type = e.dataTransfer.getData("type");
    if (type !== "task") return;
    const task = JSON.parse(e.dataTransfer.getData("task"));
    if (task.status === status) return;
    tasksStore.update(task.id, status);
  };
</script>

<div class={`sm:min-h-full flex flex-col bg-white shadow ${borderColor}`}>
  <div class={`flex-none border-b ${headerBgColor} ${headerBorderColor}`}>
    <h1
      class={`text-center font-semibold text-lg text-gray-600 px-2 py-4 ${textColor}`}>
      {header}
    </h1>
  </div>
  <div
    class={`flex-1 ${isDraggedOver ? headerBgColor : ''}`}
    on:dragover={handleDragOver}
    on:dragenter={handleDragEnter}
    on:dragleave={handleDragLeave}
    on:drop={handleDrop}>
    {#each tasks as task (task.id)}
      <Card {task} styles={classNames[status]} />
    {/each}
  </div>
</div>
