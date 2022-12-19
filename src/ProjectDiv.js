import createTodoDiv from './TodoDiv.js'

export default function ({ title, todoList = [], index } = {}) {
  const container = document.createElement('div')
  const topContainer = document.createElement('div')
  const h1 = document.createElement('h1')
  const editTitleBtn = document.createElement('button')
  const todoContainer = document.createElement('div')
  const addTodoForm = document.createElement('form')
  const titleInput = document.createElement('input')
  const removeProjectBtn = document.createElement('button')
  const addTodoBtn = document.createElement('button')
  const detailsModal = createDetailsModal()
  const checklistModal = createChecklistModal()
  const replaceTodoFormModal = createTodoFormModal(index)
  const rightSide = document.createElement('div')
  const date = document.createElement('input')
  const moreBtn = document.createElement('button')

  container.dataset.projectIndex = index
  container.dataset.container = 'project'
  container.classList.add('project-container', 'flex-container')

  topContainer.dataset.container = 'project-title'
  topContainer.classList.add('project-title-container', 'flex-container')

  h1.textContent = title
  h1.dataset.project = 'title'
  h1.classList.add('project-title')

  editTitleBtn.textContent = 'Edit'
  editTitleBtn.type = 'button'
  editTitleBtn.dataset.btn = 'edit-project'
  editTitleBtn.classList.add('edit-title-btn')

  todoContainer.dataset.container = 'todo'
  todoContainer.classList.add('flex-container', 'todo-list-container')

  addTodoForm.dataset.form = 'add-todo'
  addTodoForm.classList.add('add-todo-form', 'grid-container')

  titleInput.type = 'text'
  titleInput.name = 'title'
  titleInput.classList.add('todo-title-input')
  titleInput.pattern = '^[a-zA-Z1-9].*'
  titleInput.autocomplete = 'off'
  titleInput.required = true
  titleInput.dataset.todoForm = 'title'

  removeProjectBtn.type = 'button'
  removeProjectBtn.textContent = 'X'
  removeProjectBtn.dataset.removeIndex = index
  removeProjectBtn.dataset.btn = 'remove-project'
  removeProjectBtn.classList.add('red-btn')

  replaceTodoFormModal.dataset.modal = 'edit-todo'
  replaceTodoFormModal.classList.add('hidden', 'modal')

  addTodoBtn.textContent = 'Submit'
  addTodoBtn.type = 'submit'
  addTodoBtn.dataset.btn = 'add-todo'
  addTodoBtn.classList.add('add-todo-btn', 'lime-green-btn')
  addTodoBtn.disabled = true

  rightSide.classList.add('todo-form-right-side')

  date.type = 'date'
  date.name = 'dueDate'
  date.classList.add('todo-date-input')

  moreBtn.type = 'button'
  moreBtn.textContent = '...'
  moreBtn.dataset.btn = 'add-details'
  moreBtn.classList.add('more-todo-btn')

  todoList.forEach((todo, index) => {
    const todoDiv = createTodoDiv({ ...todo, index })

    todoContainer.appendChild(todoDiv)
  })

  rightSide.append(date, moreBtn)
  topContainer.append(h1, editTitleBtn, removeProjectBtn)
  addTodoForm.append(titleInput, addTodoBtn, rightSide, detailsModal)
  container.append(
    topContainer,
    todoContainer,
    addTodoForm,
    checklistModal,
    replaceTodoFormModal
  )

  return container
}

function createDetailsModal() {
  const modal = document.createElement('div')
  const descriptionDiv = document.createElement('div')
  const descriptionLabel = document.createElement('label')
  const descriptionTextarea = document.createElement('textarea')
  const notesDiv = document.createElement('div')
  const notesLabel = document.createElement('label')
  const notesTextarea = document.createElement('textarea')
  const fieldset = document.createElement('fieldset')
  const legend = document.createElement('legend')
  const redDiv = document.createElement('div')
  const redLabel = document.createElement('label')
  const redRadio = document.createElement('input')
  const orangeDiv = document.createElement('div')
  const orangeLabel = document.createElement('label')
  const orangeRadio = document.createElement('input')
  const blueDiv = document.createElement('div')
  const blueLabel = document.createElement('label')
  const blueRadio = document.createElement('input')
  const grayDiv = document.createElement('div')
  const grayLabel = document.createElement('label')
  const grayRadio = document.createElement('input')
  const bottomDiv = document.createElement('div')
  const confirmBtn = document.createElement('button')
  const cancelBtn = document.createElement('button')

  descriptionDiv.classList.add('input-container', 'flex-container')
  notesDiv.classList.add('input-container', 'flex-container')

  modal.classList.add('details-modal', 'flex-container', 'modal', 'hidden')
  modal.dataset.modal = 'details'

  descriptionLabel.textContent = 'Description'
  descriptionLabel.setAttribute('for', 'todo-description')
  descriptionTextarea.id = 'todo-description'
  descriptionTextarea.name = 'description'
  descriptionTextarea.dataset.details = 'description'

  notesLabel.textContent = 'Notes'
  notesLabel.setAttribute('for', 'todo-notes')
  notesTextarea.id = 'todo-notes'
  notesTextarea.name = 'notes'
  notesTextarea.dataset.details = 'notes'

  fieldset.classList.add('priority-fieldset', 'flex-container')

  legend.textContent = 'Priority'

  redDiv.classList.add('radio-container')

  redLabel.classList.add('priority-label', 'red-priority-label')
  redLabel.setAttribute('for', 'red-priority')

  redRadio.value = 'red'
  redRadio.type = 'radio'
  redRadio.name = 'priority'
  redRadio.id = 'red-priority'
  redRadio.dataset.details = 'priority'
  redRadio.classList.add('red-radio', 'priority-radio')

  orangeDiv.classList.add('radio-container')

  orangeLabel.classList.add('priority-label', 'orange-priority-label')
  orangeLabel.setAttribute('for', 'orange-priority')

  orangeRadio.value = 'orange'
  orangeRadio.type = 'radio'
  orangeRadio.name = 'priority'
  orangeRadio.dataset.details = 'priority'
  orangeRadio.id = 'orange-priority'
  orangeRadio.classList.add('orange-radio', 'priority-radio')

  blueLabel.classList.add('priority-label', 'blue-priority-label')
  blueLabel.setAttribute('for', 'blue-priority')

  blueRadio.value = 'blue'
  blueRadio.type = 'radio'
  blueRadio.name = 'priority'
  blueRadio.dataset.details = 'priority'
  blueRadio.id = 'blue-priority'
  blueRadio.classList.add('blue-radio', 'priority-radio')

  grayLabel.classList.add('priority-label', 'gray-priority-label')
  grayLabel.setAttribute('for', 'gray-priority')

  grayRadio.value = 'gray'
  grayRadio.type = 'radio'
  grayRadio.name = 'priority'
  grayRadio.dataset.details = 'priority'
  grayRadio.id = 'gray-priority'
  grayRadio.classList.add('gray-radio', 'priority-radio')

  confirmBtn.type = 'button'
  confirmBtn.textContent = 'Confirm'
  confirmBtn.dataset.btn = 'confirm-details'
  confirmBtn.classList.add('lime-green-btn')

  cancelBtn.type = 'button'
  cancelBtn.textContent = 'Cancel'
  cancelBtn.dataset.btn = 'remove-details'
  cancelBtn.classList.add('red-btn')

  bottomDiv.classList.add('form-btn-container', 'flex-container')

  bottomDiv.append(confirmBtn, cancelBtn)
  descriptionDiv.append(descriptionLabel, descriptionTextarea)
  notesDiv.append(notesLabel, notesTextarea)
  redDiv.append(redRadio, redLabel)
  orangeDiv.append(orangeRadio, orangeLabel)
  blueDiv.append(blueRadio, blueLabel)
  grayDiv.append(grayRadio, grayLabel)
  fieldset.append(legend, redDiv, orangeDiv, blueDiv, grayDiv)
  modal.append(descriptionDiv, notesDiv, fieldset, bottomDiv)

  return modal
}

function createChecklistModal() {
  const modal = document.createElement('div')
  const input = document.createElement('input')
  const bottomDiv = document.createElement('div')
  const addBtn = document.createElement('button')
  const closeBtn = document.createElement('button')

  modal.classList.add('checklist-modal', 'modal', 'hidden', 'flex-container')
  modal.dataset.modal = 'checklist'

  input.type = 'text'
  input.dataset.checklist = 'title'

  bottomDiv.classList.add('form-btn-container', 'flex-container')

  addBtn.type = 'button'
  addBtn.dataset.btn = 'add-checklist-item'
  addBtn.textContent = 'Submit'
  addBtn.classList.add('lime-green-btn')

  closeBtn.type = 'button'
  closeBtn.textContent = 'X'
  closeBtn.dataset.btn = 'close-checklist'
  closeBtn.classList.add('red-btn')

  bottomDiv.append(addBtn, closeBtn)
  modal.append(input, bottomDiv)

  return modal
}

function createTodoFormModal(index) {
  const modal = document.createElement('div')
  const form = document.createElement('form')
  const titleDiv = document.createElement('div')
  const titleLabel = document.createElement('label')
  const titleInput = document.createElement('input')
  const descriptionDiv = document.createElement('div')
  const descriptionLabel = document.createElement('label')
  const descriptionTextArea = document.createElement('textarea')
  const notesDiv = document.createElement('div')
  const notesLabel = document.createElement('label')
  const notesTextarea = document.createElement('textarea')
  const date = document.createElement('input')
  const statusDiv = document.createElement('div')
  const statusLabel = document.createElement('label')
  const statusSelect = document.createElement('select')
  const complete = document.createElement('option')
  const incomplete = document.createElement('option')
  const priorityFieldset = document.createElement('fieldset')
  const priorityLegend = document.createElement('legend')
  const redDiv = document.createElement('div')
  const redLabel = document.createElement('label')
  const redRadio = document.createElement('input')
  const orangeDiv = document.createElement('div')
  const orangeLabel = document.createElement('label')
  const orangeRadio = document.createElement('input')
  const blueDiv = document.createElement('div')
  const blueLabel = document.createElement('label')
  const blueRadio = document.createElement('input')
  const grayDiv = document.createElement('div')
  const grayLabel = document.createElement('label')
  const grayRadio = document.createElement('input')
  const bottomDiv = document.createElement('div')
  const submitBtn = document.createElement('button')
  const cancelBtn = document.createElement('button')

  form.dataset.form = 'edit-todo'
  form.dataset.formProjectIndex = index
  form.classList.add('edit-todo-form', 'flex-container')

  titleDiv.classList.add('input-container', 'flex-container')

  titleLabel.textContent = 'Title'
  titleLabel.setAttribute('for', 'todo-title')
  titleInput.required = true
  titleInput.type = 'text'
  titleInput.name = 'title'
  titleInput.id = 'todo-title'
  titleInput.dataset.todoFormInput = 'title'

  descriptionDiv.classList.add('input-container', 'flex-container')

  descriptionLabel.textContent = 'Description'
  descriptionLabel.setAttribute('for', 'todo-form-description')
  descriptionTextArea.name = 'description'
  descriptionTextArea.id = 'todo-form-description'
  descriptionTextArea.dataset.todoFormInput = 'description'

  notesDiv.classList.add('input-container', 'flex-container')

  notesLabel.textContent = 'Notes'
  notesLabel.setAttribute('for', 'todo-form-notes')
  notesTextarea.name = 'notes'
  notesTextarea.id = 'todo-form-notes'
  notesTextarea.dataset.todoFormInput = 'notes'

  statusDiv.classList.add('input-container', 'flex-container')

  statusLabel.textContent = 'Status'
  statusLabel.setAttribute('for', 'todo-status')

  statusSelect.name = 'status'
  statusSelect.id = 'todo-status'
  statusSelect.classList.add('todo-status-select')

  complete.textContent = 'Completed'
  complete.value = 'complete'
  complete.dataset.selectOption = 'complete'

  incomplete.text = 'Incomplete'
  incomplete.value = 'incomplete'
  incomplete.dataset.selectOption = 'incomplete'

  date.type = 'date'
  date.name = 'dueDate'
  date.dataset.todoFormInput = 'due-date'

  priorityFieldset.classList.add('priority-fieldset', 'flex-container')

  priorityLegend.textContent = 'Priority'

  redDiv.classList.add('radio-container')

  redLabel.classList.add('priority-label', 'red-priority-label')
  redLabel.setAttribute('for', 'red-edit-todo')

  redRadio.value = 'red'
  redRadio.type = 'radio'
  redRadio.name = 'priority'
  redRadio.id = 'red-edit-todo'
  redRadio.dataset.details = 'priority'
  redRadio.dataset.todoFormRadio = 'red'
  redRadio.classList.add('red-radio', 'priority-radio')

  orangeDiv.classList.add('radio-container')

  orangeLabel.classList.add('priority-label', 'orange-priority-label')
  orangeLabel.setAttribute('for', 'orange-edit-todo')

  orangeRadio.value = 'orange'
  orangeRadio.type = 'radio'
  orangeRadio.name = 'priority'
  orangeRadio.dataset.details = 'priority'
  orangeRadio.id = 'orange-edit-todo'
  orangeRadio.dataset.todoFormRadio = 'orange'
  orangeRadio.classList.add('orange-radio', 'priority-radio')

  blueLabel.classList.add('priority-label', 'blue-priority-label')
  blueLabel.setAttribute('for', 'blue-edit-todo')

  blueRadio.value = 'blue'
  blueRadio.type = 'radio'
  blueRadio.name = 'priority'
  blueRadio.dataset.details = 'priority'
  blueRadio.id = 'blue-edit-todo'
  blueRadio.dataset.todoFormRadio = 'blue'
  blueRadio.classList.add('blue-radio', 'priority-radio')

  grayLabel.classList.add('priority-label', 'gray-priority-label')
  grayLabel.setAttribute('for', 'gray-edit-todo')

  grayRadio.value = 'gray'
  grayRadio.type = 'radio'
  grayRadio.name = 'priority'
  grayRadio.dataset.details = 'priority'
  grayRadio.id = 'gray-edit-todo'
  grayRadio.dataset.todoFormRadio = 'gray'
  grayRadio.classList.add('gray-radio', 'priority-radio')

  submitBtn.textContent = 'Submit'
  submitBtn.type = 'submit'
  submitBtn.classList.add('lime-green-btn')

  cancelBtn.textContent = 'X'
  cancelBtn.dataset.btn = 'close-edit-todo'
  cancelBtn.type = 'button'
  cancelBtn.classList.add('red-btn')

  bottomDiv.classList.add('form-btn-container', 'flex-container')

  titleDiv.append(titleLabel, titleInput)
  descriptionDiv.append(descriptionLabel, descriptionTextArea)
  notesDiv.append(notesLabel, notesTextarea)
  statusSelect.append(complete, incomplete)
  statusDiv.append(statusLabel, statusSelect)
  redDiv.append(redRadio, redLabel)
  orangeDiv.append(orangeRadio, orangeLabel)
  blueDiv.append(blueRadio, blueLabel)
  grayDiv.append(grayRadio, grayLabel)
  priorityFieldset.append(priorityLegend, redDiv, orangeDiv, blueDiv, grayDiv)
  bottomDiv.append(submitBtn, cancelBtn)
  form.append(
    titleDiv,
    descriptionDiv,
    notesDiv,
    statusDiv,
    priorityFieldset,
    date,
    bottomDiv
  )

  modal.appendChild(form)

  return modal
}
