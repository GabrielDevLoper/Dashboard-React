import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';





export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon style={{color:"white"}}/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon style={{color:"white"}}/>
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <a href="../Table" style={{textDecoration:'none',color:'white'}}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon style={{color:"white"}}/>
        </ListItemIcon>
        <ListItemText primary="Tabela de Clientes"></ListItemText>
      </ListItem>
    </a>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon style={{color:"white"}}/>
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon style={{color:"white"}}/>
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div >
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset style={{color:'white', fontWeight: 'bold'}}>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon style={{color:"white"}}/>
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon style={{color:"white"}}/>
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon style={{color:"white"}}/>
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);