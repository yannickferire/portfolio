import { PROJECTS } from "../../data/projects"
import { Panel, PanelHeader, PanelTitle } from "../panel"
import { ProjectItem } from "./project-item"

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>Projects selection</PanelTitle>
      </PanelHeader>

      {PROJECTS.map((project, index) => (
        <div key={project.id}>
          {index > 0 && <div className="h-2 border-x border-line" />}
          <div className="border-y border-line">
            <ProjectItem project={project} />
          </div>
        </div>
      ))}
    </Panel>
  )
}
