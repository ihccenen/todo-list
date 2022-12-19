export default function ({ title, itemIndex, status } = {}) {
  const div = document.createElement('div')
  const p = document.createElement('p')
  const statusBtn = document.createElement('button')
  const removeItem = document.createElement('button')

  div.dataset.checklistIndex = itemIndex
  div.classList.add('checklist-item-container', 'flex-container')

  p.textContent = title

  statusBtn.type = 'button'
  statusBtn.dataset.btn = 'item-status'

  if (status === 'complete') statusBtn.classList.add('complete-btn')
  else statusBtn.classList.add('incomplete-btn')

  removeItem.type = 'button'
  removeItem.textContent = 'X'
  removeItem.dataset.btn = 'delete-checklist-item'
  removeItem.classList.add('red-btn')

  div.append(statusBtn, p, removeItem)

  return div
}
