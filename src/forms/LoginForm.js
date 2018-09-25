import React from 'react';
import {Field, reduxForm} from 'redux-form';

import {Icon, Message, Button, Input} from 'semantic-ui-react';

const required = value => value ? undefined : 'You must enter the nickname'
const maxLength = max => value => value && value.length > max ? `The nick must be ${max} chars or less` : undefined
const minLength = min => value => value && value.length < min ? `The nick must be at least ${min} chars` : undefined

const minLen = minLength(3)
const maxLen = maxLength(7);

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div>
        <Input {...input} icon='user' iconPosition='left' placeholder='Nickname' fluid />
        {touched && ((error &&
            <Message negative><Icon name='warning' />{error}</Message>
        ) || (warning && <span>{warning}</span>))}
    </div>
)

let LoginForm = props => {
    const {handleSubmit} = props;
    return (
        <form className="five wide column" onSubmit={handleSubmit}>
            <div className="ui fluid card">
                <h2 className="card-header dark-color-bg white-color">RPS online</h2>
                <div className="content primary-color-bg">
                    <h3>Enter your nickname</h3>
                    <Field name="username" component={renderField} validate={[required, minLen, maxLen]}/>
                    <br/>
                    <Button primary content="Next" icon="play" labelPosition="left" type="submit "/>

                </div>
            </div>
        </form>
    )
};

LoginForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginForm;