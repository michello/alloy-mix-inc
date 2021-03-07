import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Project from "./pages/projects/Project"
import Invalid from "./pages/InvalidPage"

/** all of papa's projects **/
import GateProject from "./pages/projects/Gate"
import BathroomProject from "./pages/projects/Bathroom"

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
    path: '/404',
    component: Invalid
  },
  {
    path: '/projects/Gate',
    component: GateProject
  },
  {
    path: '/projects/Bathroom',
    component: BathroomProject
  },
  {
    component: Invalid
  }
]