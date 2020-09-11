import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import { withRouter } from 'react-router';
import MetaTags from 'react-meta-tags';
import { Helmet } from "react-helmet";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
        table: {
            minWidth: 650,
        },
    }
}));

class Job extends React.Component {
    debugger
    constructor(props) {
        super(props);
        this.state = {}
    }
    itemClick = () => {
        this.props.history.push('../JobAlert/JobAlert');
    }
    editJob = () => {
        this.props.history.push('../JobAlert/JobAlert');
    }
    render() {
        const item = this.props.item;
        return (
            <div sm={4} md={5} xs={4}
                style={{
                    backgroundImage: 'url(' + require('../components/assets/pf.jpg') + ')',
                    position: 'fixed',
                    height: '100%',
                    backgroundSize: 'cover',
                    width: '100%',
                    overflow: 'hidden',
                }} >
                <Button variant="contained" color="secondary" onClick={this.editJob} style={{ borderRadius: '40px', justifyContent: 'flex-end' }}>
                    Add Job
              </Button>
                <TableContainer component={Paper} >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow >
                                <TableCell style={{ fontSize: '14px',fontWidth:'bold' }}>Job Title</TableCell>
                                <TableCell align="right" style={{ fontSize: '14px',fontWidth:'bold' }}>Company Logo</TableCell>
                                <TableCell align="right" style={{ fontSize: '14px',fontWidth:'bold' }}>Job description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {item && item.map(val => {
                                console.log(val)
                                return (
                                    <TableRow>
                                        <TableCell>{val.name}</TableCell>
                                        <TableCell>{val.imageUrl}</TableCell>
                                        <TableCell>{val.description}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                        
                    </Table>
                </TableContainer>
                <div >
                    <Pagination count={3} color="primary" style={{ marginLeft: '520px', top: '20px' }} />
                </div>
            </div>

        );
    }
}
Job = withRouter(Job);
export default Job;
