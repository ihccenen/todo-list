import './style.css'
import * as projectManager from './TodoList.js'
import createProjectModal from './ProjectModal.js'
import createProjectDiv from './ProjectDiv.js'
import createTodoDiv from './TodoDiv.js'
import createChecklistDiv from './ChecklistDiv.js'

function openModal(selector) {
  const overlay = document.querySelector('[data-overlay="modal"]')
  const modal = document.querySelector(`[data-modal="${selector}"]`)

  overlay.classList.remove('hidden')
  modal.classList.remove('hidden')

  overlay.addEventListener('click', () => closeModal(selector), { once: true })
}

function closeModal(selector) {
  const overlay = document.querySelector('[data-overlay="modal"]')
  const modal = document.querySelector(`[data-modal="${selector}"]`)

  overlay.classList.add('hidden')
  modal.classList.add('hidden')
}

function openProjectForm(callback) {
  const modal = document.querySelector('[data-modal="project"]')
  const form = modal.querySelector('[data-form="project"]')

  form.addEventListener('submit', callback, { once: true })
  form.addEventListener('reset', () => closeModal('project'), { once: true })

  openModal('project')
}

function addProject(e) {
  e.preventDefault()
  const projectContent = Object.fromEntries(new FormData(e.target))
  const project = projectManager.addProject(projectContent)

  displayProject(project)
  displayProjectLi(project)
  closeModal('project')

  e.target.reset()
}

function displayProject(obj) {
  const div = document.querySelector('[data-container="project"]')

  if (obj == null) {
    const shallowCopy = div.cloneNode()

    delete shallowCopy.dataset.projectIndex
    div.replaceWith(shallowCopy)

    return
  }

  const projectDiv = createProjectDiv(obj)
  const input = projectDiv.querySelector('[data-todo-form="title"]')

  projectDiv.addEventListener('click', (e) => {
    const btnDataset = e.target.dataset.btn

    if (btnDataset === 'edit-project') openProjectForm(changeProjectTitle)
    else if (btnDataset === 'open-details') changeDetailsDisplay(e)
    else if (btnDataset === 'add-checklist-item') addToChecklist(e)
    else if (btnDataset === 'add-details') openModal('details')
    else if (btnDataset === 'confirm-details') closeModal('details')
    else if (btnDataset === 'open-checklist') openChecklistModal(e)
    else if (btnDataset === 'item-status') changeItemStatus(e)
    else if (btnDataset === 'remove-details') resetDetails('details')
    else if (btnDataset === 'todo-status') changeTodoStatus(e)
    else if (btnDataset === 'remove-project') removeProject(e)
    else if (btnDataset === 'remove-todo') removeTodo(e)
    else if (btnDataset === 'delete-checklist-item') deleteChecklistItem(e)
    else if (btnDataset === 'edit-todo') openTodoModal(e)
    else if (btnDataset === 'add-checklist-item') addToChecklist(e)
    else if (btnDataset === 'close-checklist') closeChecklistModal('checklist')
  })

  projectDiv.addEventListener('submit', (e) => {
    e.preventDefault()
    if (e.target.dataset.form === 'add-todo') addTodo(e)
    else if (e.target.dataset.form === 'edit-todo') replaceTodo(e)
  })

  input.addEventListener('keyup', changeAddTodoBtn)

  div.replaceWith(projectDiv)
}

function changeAddTodoBtn(e) {
  const text = e.target.value.trim()
  const isValid = /^[a-zA-Z1-9].*/.test(text)
  const addBtn = document.querySelector('[data-btn="add-todo"]')

  if (isValid) addBtn.disabled = false
  else addBtn.disabled = true
}

function resetDetails() {
  const description = document.querySelector('[data-details="description"]')
  const notes = document.querySelector('[data-details="notes"]')
  const radio = document.querySelector('[data-details="priority"]:checked')

  closeModal('details')
  description.value = null
  notes.value = null

  if (radio != null) radio.checked = false
}

function changeProjectTitle(e) {
  e.preventDefault()
  const project = document.querySelector('[data-project-index')
  const index = project.dataset.projectIndex
  const obj = Object.fromEntries(new FormData(e.target))
  const h1 = document.querySelector('[data-project="title"')
  const li = document.querySelector(`[data-project-li="${index}"]`)
  const a = li.querySelector(`[data-anchor="project"]`)
  const title = obj.title

  h1.textContent = title
  a.textContent = title
  projectManager.changeProjectTitle({ title, index })

  closeModal('project')
}

function displayProjectLi({ title, index }) {
  const ul = document.querySelector('[data-ul="project"]')
  const li = document.createElement('li')
  const a = document.createElement('a')

  a.href = '#'
  a.textContent = title
  a.dataset.anchor = 'project'

  li.classList.add('project-title-li')
  li.dataset.projectLi = index

  li.appendChild(a)
  ul.appendChild(li)
}

function changeDisplayProject(e) {
  const li = e.target.closest('[data-project-li]')
  const index = li.dataset.projectLi
  const project = projectManager.getProject(index)

  displayProject(project)
}

function removeProject(e) {
  const index = e.target.dataset.removeIndex
  const ul = document.querySelector('[data-ul="project"]')
  const li = document.querySelector(`[data-project-li="${index}"]`)

  li.remove()
  projectManager.removeProject(index)
  ul.childNodes.forEach((li, index) => (li.dataset.projectLi = index))

  const project = projectManager.getProject(0)

  displayProject(project)
}

function addTodo(e) {
  const todoContent = Object.fromEntries(new FormData(e.target))
  const project = e.target.closest('[data-project-index')
  const index = project.dataset.projectIndex
  const todo = projectManager.addTodo(todoContent, { index })

  displayTodo(todo)
  e.target.reset()
}

function displayTodo(todo) {
  if (!todo.hasOwnProperty('title')) return

  const todoContainer = document.querySelector('[data-container="todo"]')
  const div = createTodoDiv(todo)

  const btn = div.querySelector('[data-btn="open-checklist"')

  btn.addEventListener('click', openChecklistModal)

  todoContainer.appendChild(div)
}

function removeTodo(e) {
  const projectDiv = document.querySelector('[data-project-index]')
  const todoDiv = e.target.closest('[data-todo-index]')
  const projectIndex = projectDiv.dataset.projectIndex
  const todoIndex = todoDiv.dataset.todoIndex

  todoDiv.remove()

  const todoList = Array.from(document.querySelectorAll('[data-todo-index]'))

  todoList.forEach((todo, index) => (todo.dataset.todoIndex = index))
  projectManager.removeTodo({ projectIndex, todoIndex })
}

function openTodoModal(e) {
  const modal = document.querySelector('[data-modal="edit-todo"')
  const form = modal.querySelector('[data-form="edit-todo"]')
  const closeBtn = modal.querySelector('[data-btn="close-edit-todo"]')
  const projectDiv = e.target.closest('[data-project-index]')
  const projectIndex = projectDiv.dataset.projectIndex
  const todoDiv = e.target.closest('[data-todo-index]')
  const todoIndex = todoDiv.dataset.todoIndex
  const todo = projectManager.getTodo({ projectIndex, todoIndex })
  const textInput = Array.from(form.querySelectorAll('[data-todo-form-input'))
  const status = form.querySelector(`[data-select-option="${todo.status}"]`)
  const priority = form.querySelector(
    `[data-todo-form-radio="${todo.priority}"]`
  )

  form.dataset.formTodoIndex = todoIndex
  textInput.forEach((input) => (input.value = todo[input.name]))
  status.selected = true

  priority.checked = true

  closeBtn.addEventListener('click', () => closeModal('edit-todo'))

  openModal('edit-todo')
}

function replaceTodo(e) {
  const todoContent = Object.fromEntries(new FormData(e.target))
  const projectIndex = e.target.dataset.formProjectIndex
  const todoIndex = e.target.dataset.formTodoIndex
  const todo = projectManager.updateTodo(todoContent, {
    projectIndex,
    todoIndex,
  })

  const oldTodoDiv = document.querySelector(`[data-todo-index="${todoIndex}"`)
  const newTodoDiv = createTodoDiv(todo)

  oldTodoDiv.replaceWith(newTodoDiv)

  closeModal('edit-todo')
}

function changeTodoStatus(e) {
  const projectDiv = document.querySelector('[data-project-index]')
  const projectIndex = projectDiv.dataset.projectIndex
  const todoDiv = e.target.closest('[data-todo-index]')
  const todoIndex = todoDiv.dataset.todoIndex
  const todo = projectManager.getTodo({ projectIndex, todoIndex })
  const status = todo.status === 'complete' ? 'incomplete' : 'complete'

  projectManager.updateTodo({ status }, { projectIndex, todoIndex })

  e.target.classList.toggle('incomplete-btn')
  e.target.classList.toggle('complete-btn')
}

function openChecklistModal(e) {
  const todoIndex = e.target.dataset.checklistTodoIndex
  const modal = document.querySelector('[data-modal="checklist"]')

  modal.dataset.modalTodoIndex = todoIndex

  openModal('checklist')
}

function addToChecklist(e) {
  const input = document.querySelector('[data-checklist="title"]')
  const title = input.value

  if (title == '') return

  const projectDiv = document.querySelector('[data-project-index]')
  const projectIndex = projectDiv.dataset.projectIndex
  const modal = e.target.closest('[data-modal-todo-index]')
  const todoIndex = modal.dataset.modalTodoIndex
  const item = projectManager.addToChecklist({ projectIndex, todoIndex, title })

  displayChecklistItem(item)

  input.value = ''
}

function closeChecklistModal() {
  const div = document.querySelector('[data-checklist="title"]')

  div.textContent = ''

  closeModal('checklist')
}

function displayChecklistItem({ title, todoIndex, itemIndex } = {}) {
  if (title == null) return

  const todoDiv = document.querySelector(`[data-todo-index="${todoIndex}"]`)
  const div = todoDiv.querySelector('[data-container="checklist"]')

  const checklistDiv = createChecklistDiv({ title, itemIndex })

  div.appendChild(checklistDiv)
}

function deleteChecklistItem(e) {
  const project = document.querySelector('[data-project-index]')
  const projectIndex = project.dataset.projectIndex
  const todo = e.target.closest('[data-todo-index]')
  const todoIndex = todo.dataset.todoIndex

  const item = e.target.closest('[data-checklist-index]')
  const itemIndex = item.dataset.checklistIndex

  item.remove()
  projectManager.removeChecklistItem({ projectIndex, todoIndex, itemIndex })

  const checklistItems = todo.querySelectorAll('[data-checklist-index]')

  checklistItems.forEach(
    (checklist, index) => (checklist.dataset.checklistIndex = index)
  )
}

function changeItemStatus(e) {
  const project = e.target.closest('[data-project-index]')
  const projectIndex = project.dataset.projectIndex
  const todo = e.target.closest('[data-todo-index')
  const todoIndex = todo.dataset.todoIndex
  const item = e.target.closest('[data-checklist-index]')
  const itemIndex = item.dataset.checklistIndex

  projectManager.changeChecklistItemStatus({
    projectIndex,
    todoIndex,
    itemIndex,
  })

  e.target.classList.toggle('incomplete-btn')
  e.target.classList.toggle('complete-btn')
}

function changeDetailsDisplay(e) {
  const details = e.target.parentElement.previousSibling

  if (e.target.textContent === 'Open Details') {
    e.target.textContent = 'Close Details'
  } else {
    e.target.textContent = 'Open Details'
  }

  details.classList.toggle('hidden')
}

function restoreProjects(projects) {
  projects.forEach((project, index) => {
    projectManager.restoreProject(project)
    displayProjectLi({ ...project, index })
  })

  const project = projectManager.getProject(0)

  if (project == null) return

  displayProject({ ...project, index: 0 })
}

const content = document.querySelector('[data-content="container"]')
const overlay = document.createElement('div')
const modal = createProjectModal('add-project')
const aside = document.createElement('div')
const ul = document.createElement('ul')
const btn = document.createElement('button')
const projectContainer = document.createElement('div')

aside.classList.add('aside', 'flex-container')

overlay.dataset.overlay = 'modal'
overlay.classList.add('hidden', 'overlay')

ul.dataset.ul = 'project'
ul.classList.add('projects-ul', 'flex-container')

projectContainer.dataset.container = 'project'

projectContainer.classList.add('project-container')

btn.type = 'button'
btn.textContent = 'New Project'
btn.dataset.btn = 'new-project'
btn.classList.add('new-project-btn')

aside.append(btn, ul)
content.append(aside, projectContainer, overlay, modal)

aside.addEventListener('click', (e) => {
  const dataset = e.target.dataset
  if (dataset.btn === 'new-project') openProjectForm(addProject)
  if (dataset.anchor === 'project') changeDisplayProject(e)
})

const storedProject = JSON.parse(localStorage.getItem('projects'))

if (storedProject != null) restoreProjects(storedProject)
