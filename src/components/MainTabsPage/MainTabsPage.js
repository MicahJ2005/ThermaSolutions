import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import PatientProfileSearchPage from '../PatientProfileSearchPage/PatientProfileSearchPage';
import TreatmentFormPatientData from '../TreatmentFormPatientData/TreatmentFormPatientData';
import PrimaryTumorPage from '../PrimaryTumorPage/PrimaryTumorPage';
import IntakePage from '../IntakePage/IntakePage';
import PSDSSPage from '../PSDSSPage/PSDSSPage';
import InterventionPage from '../InterventionPage/InterventionPage';
import PathologyNotesPage from '../PathologyNotesPage/PathologyNotesPage';
import OperativeNotesPage from '../OperativeNotesPage/OperativeNotesPage';
import PostOpPage from '../PostOpPage/PostOpPage';
import FollowUpPage from '../FollowUpPage/FollowUpPage';
import AdditionalDataPage from '../AdditionalDataPage/AdditionalDataPage';
import ManageUsersPage from '../ManageUsersPage/ManageUsersPage';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };


  const styles = theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  });
class MainTabsPage extends Component {
state = {
    value: 0,
  };

  handleTabChange = (event, value) => {
    this.setState({ value });
  };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return(
            <div className={classes.root}>
                <h1>Main Tabs Page</h1>
                <h3>This Page houses all the Tab Components</h3>
                <AppBar position="static" color="default">
                    <Tabs
                    value={value}
                    onChange={this.handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    scrollable
                    scrollButtons="auto"
                    >
                    <Tab label="Primary Tumor" />
                    <Tab label="Intake" />
                    <Tab label="PSDSS" />
                    <Tab label="Intervention" />
                    <Tab label="Pathology" />
                    <Tab label="Operative Notes" />
                    <Tab label="Post-Op" />
                    <Tab label="Follow Up" />
                    <Tab label="Additional Data" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><PrimaryTumorPage /></TabContainer>}
                {value === 1 && <TabContainer><IntakePage /></TabContainer>}
                {value === 2 && <TabContainer><PSDSSPage /></TabContainer>}
                {value === 3 && <TabContainer><InterventionPage /></TabContainer>}
                {value === 4 && <TabContainer><PathologyNotesPage /></TabContainer>}
                {value === 5 && <TabContainer><OperativeNotesPage /></TabContainer>}
                {value === 6 && <TabContainer><PostOpPage /></TabContainer>}
                {value === 7 && <TabContainer><FollowUpPage /></TabContainer>}
                {value === 8 && <TabContainer><AdditionalDataPage /></TabContainer>}

                {/* <PatientProfileSearchPage />
                <TreatmentFormPatientData /> */}
                {/* <ManageUsersPage /> */}
            </div>

        )
    }
  
};

// ScrollableTabsButtonAuto.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (withStyles(styles)(MainTabsPage))