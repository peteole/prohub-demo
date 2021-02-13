import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { List, Settings } from '@material-ui/icons'
import './App.css';
import ProjectList from './ProjectList/ProjectList';

class App extends React.Component<{}, { position: "projects" | "settings" }> {

  constructor(navigationState: {}) {
    super(navigationState)
    this.state={ position: 'projects' }
  }
  render() {
    const content=this.state.position=='projects'?<ProjectList/>:<p>some settings</p>
    return (
      <div>
        {content}
        <BottomNavigation value={this.state.position} showLabels
          onChange={(ev, newVal) => {
            this.setState({ position: newVal })
          }}>
          <BottomNavigationAction label="Projects" value="projects" icon={<List />} />
          <BottomNavigationAction label="Settings" value="settings" icon={<Settings />} />
        </BottomNavigation>
      </div>
    );
  }
}

export default App;
