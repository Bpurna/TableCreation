import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AddJob from '../AddJob/addJob';
import Job from '../job/job';
import { withRouter } from 'react-router';

class JobAlert extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            imageUrl: '',
            description: '',
            item: [],
            file:'',
        }
    }
    onChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        let item = [...this.state.item];
        const reader=new FileReader();
        const file=e.target.file[0];
        reader.onloadend = () => {
            this.setState({
                file,
                imagePreview: reader.result
            });
        };
    
        if (file) {
            reader.readAsDataURL(file);
        }
        item.push({
            name: this.state.name,
            imageUrl: this.state.imageUrl,
            description: this.state.description,
        });
        this.props.history.push('../job/job');
        this.setState({ item, name: '', imageUrl: '' })
    }
    render() {
        debugger
        return (
            <div style={{
                backgroundImage: 'url(' + require('../components/assets/pf.jpg') + ')',
                position: 'fixed',
                height: '100%',
                backgroundSize: 'cover',
                width: '100%',
                overflow: 'hidden',
            }} >
                <Grid >
                    <Job item={this.state.item} />
                    <AddJob
                        handleFormSubmit={this.handleFormSubmit}
                        onChangeText={this.onChangeText}
                        name={this.state.name}
                        imageUrl={this.state.imageUrl}
                        description={this.state.description}
                    />
                </Grid>
            </div>
        );
    }
}
JobAlert=withRouter(JobAlert);
export default JobAlert;