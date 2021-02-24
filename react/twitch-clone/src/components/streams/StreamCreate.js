import React from 'react';
import { Field, reduxForm } from 'redux-form';

const StreamCreate = () => {
	const renderInput = ({ input }) => {
		return (
			<input
				{...input}
			/>
		);
	};
   console.log(props)
	return (
      
		<form>
			<Field name="title" component={renderInput} />
			<Field name="description" componet={renderInput} />
		</form>
	);
};

export default reduxForm({ form: 'createStream'})(StreamCreate);
