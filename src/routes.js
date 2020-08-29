import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Project from "./pages/Project"
import Invalid from "./pages/InvalidPage"

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/projects',
    component: Projects
  },
  {
    path: '/project/:projectName',
    component: Project
  },
  {
    path: '/404',
    component: Invalid
  },
  {
    component: Invalid
  }
]