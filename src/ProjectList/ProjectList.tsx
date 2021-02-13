import React from 'react';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core'
interface Project{
    title:string
    subtitle: string
    content: string
}
const projects: Project[]=[
    {title:"ProHub", subtitle: "Project hub for bringing TUM students together", content: "loooooong story to tell"},
    {title: "Digipen", subtitle: "Digital pen to write on non touch laptops", content: "Not easier either"},
    {title: "Digipen", subtitle: "Digital pen to write on non touch laptops", content: "Not easier either"}
]
function ProjectList() {
  return (
    <GridList>
        {projects.map(project=>(
            <GridListTile>
                <GridListTileBar title={project.title} subtitle={project.subtitle}/>
                <p>{project.content}</p>
            </GridListTile>
        ))}
    </GridList>
  );
}

export default ProjectList;