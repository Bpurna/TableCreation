import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router';


 class Formiclogin extends React.Component {
    validateEmail(value) {
        let error;
        if (value === 'admin@gmail.com') {
        }
        return error;
    }
    validatePassword(value) {
        let error;
        if (value === 'test@123') {
        }
        return error;
    }
    render() {
        return (
            <div>
                <h3 style={{  marginLeft: '200px' }}>Login</h3>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email('Email is invalid')
                            .required('Email is required'),
                        password: Yup.string()
                            .min(6, 'Password must be at least 6 characters')
                            .required('Password is required'),
                    })}
                    onSubmit={fields => {
                        alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                        this.props.history.push('../job/job.js');
                    }}
                    render={({ errors, status, touched }) => (
                        <div xs={7} sm={7} md={7}>
                            <Grid item xs={9} sm={4} md={9} spacing={1} style={{ position: 'relative', margin: 'auto' }}>
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="email" style={{ margin: 'auto' }}>Email</label>
                                        <br />
                                        <Field name="email" type="text" validate={this.validateEmail} className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label><br />
                                        <Field name="password" type="password" validate={this.validatepassword} className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary mr-5" onSubmit={this.handleSubmit}
                                        >Login</button>
                                    </div>
                                </Form>
                            </Grid>
                        </div>
                    )
                    }
                />
            </div>
        )
    }
}
Formiclogin=withRouter(Formiclogin);
export default Formiclogin;
