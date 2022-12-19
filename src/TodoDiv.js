import { formatDistanceToNow } from 'date-fns'
import createChecklistDiv from './ChecklistDiv.js'

export default function ({
  title,
  description = '',
  dueDate = '',
  notes = '',
  checklist = [],
  status = 'incomplete',
  priority = 'gray',
  index,
} = {}) {
  const container = document.createElement('div')
  const topContainer = document.createElement('div')
  const h2 = document.createElement('h2')
  const removeTodoBtn = document.createElement('button')
  const details = document.createElement('div')
  const descriptionP = document.createElement('p')
  const notesP = document.createElement('p')
  const checklistContainer = document.createElement('div')
  const h3 = document.createElement('h3')
  const checklistBtn = document.createElement('button')
  const editTodo = document.createElement('button')
  const statusBtn = document.createElement('button')
  const bottomDiv = document.createElement('div')
  const detailsBtn = document.createElement('button')
  const dueDateText = document.createElement('div')

  container.dataset.todoIndex = index
  container.classList.add(
    'todo-container',
    'flex-container',
    `todo-priority-${priority}`
  )

  topContainer.classList.add('todo-top-container', 'flex-container')

  h2.textContent = title
  h2.classList.add('todo-title')

  details.dataset.container = 'details'
  details.classList.add('details-container', 'hidden', 'flex-container')

  descriptionP.textContent = `Description: ${description || 'No description.'}`
  notesP.textContent = `Notes: ${notes || 'No notes.'}`

  checklistContainer.dataset.container = 'checklist'

  h3.textContent = 'Checklist:'

  checklistBtn.textContent = '+'
  checklistBtn.type = 'button'
  checklistBtn.dataset.btn = 'open-checklist'
  checklistBtn.dataset.checklistTodoIndex = index

  statusBtn.dataset.btn = 'todo-status'
  statusBtn.classList.add(`${status}-btn`, `priority-${priority}-status-btn`)

  editTodo.textContent = 'Edit'
  editTodo.type = 'button'
  editTodo.dataset.btn = 'edit-todo'

  checklistContainer.append(h3, checklistBtn)

  details.append(descriptionP, notesP, checklistContainer, editTodo)

  removeTodoBtn.type = 'button'
  removeTodoBtn.textContent = 'Remove Todo'
  removeTodoBtn.dataset.btn = 'remove-todo'
  removeTodoBtn.classList.add('red-btn')

  detailsBtn.textContent = 'Open Details'
  detailsBtn.dataset.btn = 'open-details'

  bottomDiv.appendChild(detailsBtn)
  bottomDiv.classList.add('todo-bottom-container', 'flex-container')

  if (dueDate !== '') {
    const date = new Date(dueDate + 'T23:59')
    const now = new Date()
    const dateDay = date.getDate()
    const today = now.getDate()

    dueDateText.textContent =
      dateDay === today
        ? 'Today'
        : formatDistanceToNow(date, {
            addSuffix: true,
          })

    bottomDiv.appendChild(dueDateText)
  }

  checklist.forEach((item, itemIndex) => {
    const div = createChecklistDiv({ ...item, itemIndex })

    checklistContainer.appendChild(div)
  })

  topContainer.append(statusBtn, h2, removeTodoBtn)
  container.append(topContainer, details, bottomDiv)

  if (status === 'completed') {
    container.classList.add('todo-completed')
    statusBtn.remove()
  }

  return container
}
