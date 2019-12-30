import { writable, derived } from 'svelte/store'
import uuid from 'uuid/v1'

const $tasks = writable([])

export const sortedTasks = derived($tasks, tasks => tasks.slice().sort((a, b) => a.updatedAt - b.updatedAt))

const { subscribe, update, set } = $tasks
export const tasks = {
  subscribe,
  add(name) {
    update(tasks => [...tasks, { id: uuid(), name, status: 0, updatedAt: Date.now() }])
  },
  update(id, newStatus) {
    update(tasks => {
      const index = tasks.findIndex(t => t.id === id)
      const updated = Object.assign({}, tasks[index], { status: newStatus, updatedAt: Date.now() },)
      return [...tasks.slice(0, index), updated, ...tasks.slice(index + 1)]
    })
  },
  delete(id) {
    update(tasks => tasks.filter(t => t.id !== id))
  }
}

