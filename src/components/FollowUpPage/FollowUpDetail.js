import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Recurrence from './Recurrence';
// import Button from '@material-ui/core/Button';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import moment from 'moment';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    expanded: {
      backgroundColor: '#cccccc',
      minHeight: 0,
      marginTop: 0,
      marginBottom: 0,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    group: {
        flexDirection: 'row',
    }
});

class FollowUpDetail extends Component {

    state = {
        id: null,
        date: null,
        cea: null,
        rec_modality: null,
        syst_location: false,
        last_contact: null,
        treatment: null,
        date_treatment: null,
        status: null,
        notes: null,
        location: null
    };

    componentDidMount () {
        console.log('in component mount post op', this.props.recurrenceReducer);
        // this.props.dispatch({type: 'FETCH_POST_OP'});
        this.setState({
            id: this.props.recurrenceReducer.id,
            date: moment(this.props.recurrenceReducer.date).format('YYYY-MM-DD'),
            cea: this.props.recurrenceReducer.cea,
            rec_modality: this.props.recurrenceReducer.rec_modality,
            syst_location: this.props.recurrenceReducer.syst_location,
            last_contact: moment(this.props.recurrenceReducer.last_contact).format('YYYY-MM-DD'),
            treatment: this.props.recurrenceReducer.treatment,
            date_treatment: moment(this.props.recurrenceReducer.date_treatment).format('YYYY-MM-DD'),
            status: this.props.recurrenceReducer.status,
            notes: this.props.recurrenceReducer.notes,
            location: this.props.recurrenceReducer.location
        })
    }

    // Called when the input field changes
    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        });
    };

    // Called when the input field changes
    handleChangeCheckbox = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.checked,
        });
    };

    // addFollowUp = () => {
    //     // alert('Add new followup');
    //     console.log('before update recurrence', this.state)
    //     this.props.dispatch({ type: 'UPDATE_RECURRENCE', payload: this.state});
    //     // this.props.addFollowUp();
    // };
    
    render() {

        const { classes } = this.props;
        
        return(
            <div>
            <ExpansionPanel expanded={true}>
                <ExpansionPanelSummary >
                    <TextField
                        name="follow_up_date"
                        label="Follow Up Date"
                        className={classes.textField}
                        value={moment(this.state.date).format('YYYY-MM-DD')}
                        // fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        type="date"
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container spacing={24}>
                        <Grid item xs={3}>
                            <FormGroup row>
                                <FormControlLabel
                                control={
                                    <Checkbox
                                    name="evidence_of_disease"
                                    checked={this.props.followup.evidence_of_disease}
                                    onChange={this.props.handleChangeCheckbox}
                                    value={this.props.followup.evidence_of_disease}
                                    />
                                }
                                label="Evidence of Disease"
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField
                            name="follow_up_notes"
                            label="Notes"
                            className={classes.textField}
                            value={this.props.followup.notes}
                            rows={2}
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.props.handleChange}
                            margin="normal"
                            variant="outlined"
                            />
                        </Grid>
                        <Recurrence recurrence={this.state} 
                            handleChange={this.handleChange}
                            handleChangeCheckbox={this.handleChangeCheckbox}/>
                    </Grid>
                </ExpansionPanelDetails>
                <ExpansionPanelActions>
                    <Button onClick={this.props.addFollowUp} className={classes.button}
                            variant="contained" color="primary">
                        Save Follow Up
                    </Button>      
                    <Button className={classes.button}
                            variant="contained" color="primary">
                        New Follow Up
                    </Button>                    
                </ExpansionPanelActions>
            </ExpansionPanel>
            </div>

        )
    }
  
};

const mapStateToProps = reduxState => ({
    recurrenceReducer: reduxState.recurrenceReducer,
});


export default connect(mapStateToProps) (withStyles(styles)(FollowUpDetail));