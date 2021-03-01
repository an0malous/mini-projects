import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderInput = ({ input, label, meta }) => {
	const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
	return (
		<div className={className}>
			<label>{label}</label>
			<input {...input} />
			<div>{renderError(meta)}</div>
		</div>
	);
};
const renderError = ({ error, touched }) => {
	if (touched && error) {
		return (
			<div className="ui error message">
				<div className="header">{error}</div>
			</div>
		);
	}
};

const StreamForm = ({ handleSubmit, onSubmit }) => {
	function onSubmit (formValues) {
		onSubmit(formValues);
	}

	return (
		<form onSubmit={(onSubmit)=>handleSubmit(onSubmit)} className="ui form error">
			<Field name="title" label="Enter Title" component={renderInput} />
			<Field
				name="description"
				label="Enter Description"
				component={renderInput}
			/>
			<button>Submit</button>
		</form>
	);
};
const validate = (formValues) => {
	const errors = {};
	if (!formValues.title) {
		errors.title = 'You must enter a title';
	}
	if (!formValues.description) {
		errors.description = 'Y';
	}

	return errors;
};

export default reduxForm({ form: 'streamForm', validate })(StreamForm);
