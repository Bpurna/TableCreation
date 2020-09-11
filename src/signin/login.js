import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router';
import { Helmet } from "react-helmet";

class Login extends React.Component {
    state = {
        formData: {
            email: '',
            password: '',
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
        if (this.state.formData.email === 'admin@gmail.com') {
            if (this.state.formData.password === 'test@123') {
                this.setState({ submitted: true });
                console.log(this.state.formData.email, this.state.formData.password)
                this.props.history.push('../job/job');
            }
        } else {
            alert('Invalid username or password')
        }
    }

    render() {
        const { formData, submitted } = this.state;
        return (
            <div style={{
                backgroundImage: 'url(' + require('../components/assets/pf.jpg') + ')',
                position: 'fixed',
                height: '100%',
                backgroundSize: 'cover',
                width: '100%',
                overflow: 'hidden',
            }}>
                <Grid item xs={7} sm={5} md={4} spacing={1} style={{ position: 'relative', margin: 'auto', top: '20px' }}>
                    <meta charSet="utf-8" />
                    <ValidatorForm
                        ref="form"
                        onSubmit={this.handleSubmit}
                    >
                        <h2 style={{ textAlign: 'center' }}>Login</h2>
                        <TextValidator style={{ width: '420px' }}
                            label="Email"
                            onChange={this.handleChange}
                            name="email"
                            variant="outlined"
                            value={formData.email}
                            validators={['required', 'isEmail']}
                            errorMessages={['this field is required', 'email is not valid']}
                        />
                        <br />
                        <TextValidator style={{ width: '420px' }}
                            label="Password"
                            onChange={this.handleChange}
                            name="password"
                            variant="outlined"
                            value={formData.password}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <br />
                        <Button style={{marginLeft:'150px'}}
                            color="primary"
                            variant="contained"
                            type="submit"
                            disabled={submitted}
                        >
                            {
                                (submitted && 'Your form is submitted!')
                                || (!submitted && 'Submit')
                            }
                        </Button>
                    </ValidatorForm>
                </Grid>
            </div>
        );
    }
}
Login = withRouter(Login)
export default Login;