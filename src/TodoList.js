const projects = []

const updateValue = (func, state) => ({
  update: (updatedValue) => func({ ...state, ...updatedValue }),
})

const removeItem = (state) => ({
  remove: (index) => state.splice(index, 1),
})

const addProject = (obj) => {
  const p = projectFactory(obj)

  projects.push(p)
  storeProjects()

  return { ...p, index: projects.length - 1 }
}

const removeProject = (index) => {
  projects.splice(index, 1)
  storeProjects()
}

const changeProjectTitle = ({ index, title }) => {
  projects[index] = projects[index].update({ title })
  storeProjects()
}

const addTodo = (obj, { index }) => {
  const todo = todoFactory(obj)
  const project = projects[index]

  project.todoList.push(todo)
  storeProjects()

  return { ...todo, index: project.todoList.length - 1 }
}

const removeTodo = ({ projectIndex, todoIndex }) => {
  const project = projects[projectIndex]
  project.remove(todoIndex)
  storeProjects()
}

const updateTodo = (updatedValues, { projectIndex, todoIndex }) => {
  const todoList = projects[projectIndex].todoList

  todoList[todoIndex] = todoList[todoIndex].update(updatedValues)

  storeProjects()

  return { ...todoList[todoIndex], index: todoIndex }
}

const addToChecklist = ({ projectIndex, todoIndex, title }) => {
  const checklist = checklistFactory({ title })
  const project = projects[projectIndex]
  const todo = project.todoList[todoIndex]
  const itemIndex = project.todoList[todoIndex].checklist.length

  todo.checklist.push(checklist)
  storeProjects()

  return { ...checklist, todoIndex, itemIndex }
}

const removeChecklistItem = ({ projectIndex, todoIndex, itemIndex }) => {
  const project = projects[projectIndex]
  const todo = project.todoList[todoIndex]

  todo.remove(itemIndex)
  storeProjects()
}

const changeChecklistItemStatus = ({ projectIndex, todoIndex, itemIndex }) => {
  const project = projects[projectIndex]
  const todoList = project.todoList[todoIndex]
  const checklist = todoList.checklist
  const status =
    checklist[itemIndex].status === 'complete' ? 'incomplete' : 'complete'

  checklist[itemIndex] = checklist[itemIndex].update({ status })

  storeProjects()
}

const getProject = (index) => {
  if (projects.length < 1) return
  return { ...projects[index], index }
}

const getTodo = ({ projectIndex, todoIndex }) => {
  return projects[projectIndex].todoList[todoIndex]
}

const storeProjects = () => {
  const projectJson = JSON.stringify(projects)
  localStorage.setItem('projects', projectJson)
}

const restoreProject = (project) => {
  project.todoList = project.todoList.map((todo) => {
    todo.checklist = todo.checklist.map((item) => checklistFactory(item))
    todo = todoFactory(todo)

    return todo
  })

  projects.push(projectFactory(project))
}

const projectFactory = ({ title, todoList = [] } = {}) => {
  const project = {
    title,
    todoList,
  }

  return Object.assign(
    {},
    project,
    updateValue(projectFactory, project),
    removeItem(project.todoList)
  )
}

const todoFactory = ({
  title,
  description = '',
  dueDate = '',
  status = 'incomplete',
  priority = 'gray',
  notes = '',
  checklist = [],
} = {}) => {
  const todo = {
    title,
    description,
    dueDate,
    status,
    notes,
    checklist,
    priority,
  }

  return Object.assign(
    {},
    todo,
    updateValue(todoFactory, todo),
    removeItem(todo.checklist)
  )
}

const checklistFactory = ({ title, status = 'incomplete' } = {}) => {
  const item = {
    title,
    status,
  }

  return Object.assign({}, item, updateValue(checklistFactory, item))
}

export {
  addProject,
  removeProject,
  changeProjectTitle,
  addTodo,
  removeTodo,
  updateTodo,
  addToChecklist,
  removeChecklistItem,
  changeChecklistItemStatus,
  getProject,
  getTodo,
  storeProjects,
  restoreProject,
}
