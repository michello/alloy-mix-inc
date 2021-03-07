import Home from "./pages/Home"
import Projects from "./pages/Projects"
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
    path: '/projects/gate',
    component: GateProject
  },
  {
    path: '/projects/bathroom',
    component: BathroomProject
  },
  {
    component: Invalid
  }
]