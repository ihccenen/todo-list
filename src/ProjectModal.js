export default function () {
  const modal = document.createElement('div')
  const form = document.createElement('form')
  const titleDiv = document.createElement('div')
  const label = document.createElement('label')
  const input = document.createElement('input')
  const bottomDiv = document.createElement('div')
  const addBtn = document.createElement('button')
  const cancelBtn = document.createElement('button')

  modal.classList.add('modal', 'hidden')
  modal.dataset.modal = 'project'

  form.dataset.form = 'project'
  form.classList.add('project-form', 'flex-container')

  titleDiv.classList.add('input-container', 'flex-container')

  label.textContent = 'Title'
  label.setAttribute('for', 'project-title')

  input.type = 'text'
  input.id = 'project-title'
  input.name = 'title'
  input.pattern = '^[a-zA-Z1-9].*'
  input.required = true
  input.autocomplete = 'off'
  input.dataset.input = 'project-title'

  bottomDiv.classList.add('form-btn-container', 'flex-container')

  addBtn.textContent = 'Submit'
  addBtn.type = 'submit'
  addBtn.dataset.btn = 'add-project'
  addBtn.classList.add('lime-green-btn')

  cancelBtn.textContent = 'Cancel'
  cancelBtn.type = 'reset'
  cancelBtn.dataset.btn = 'cancel-project'
  cancelBtn.classList.add('red-btn')

  bottomDiv.append(addBtn, cancelBtn)
  titleDiv.append(label, input)
  form.append(titleDiv, bottomDiv)
  modal.appendChild(form)

  return modal
}
