import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CreateIcon from "@material-ui/icons/Create";
import AssignmentIcon from "@material-ui/icons/Assignment";

function ListItemLink(props) {
  return <ListItem button component={Link} {...props} />;
}

export const mainListItems = (
  <div>
    <ListItemLink to="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>

      <ListItemText primary="Dashboard" />
    </ListItemLink>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Toners</ListSubheader>
    <ListItemLink to="/tonerlist">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="List" />
    </ListItemLink>
    <ListItemLink to="/tonerform">
      <ListItemIcon>
        <CreateIcon />
      </ListItemIcon>
      <ListItemText primary="Create" />
    </ListItemLink>
  </div>
);
