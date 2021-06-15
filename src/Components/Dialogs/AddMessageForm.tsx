import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/Validators';
import { Textarea } from '../common/Preloader/FormsControls/FormsControls';

type FormDataType = {
  newMessageBody: string;
};

const maxLengthText = maxLengthCreator(50);

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLengthText]}
          placeholder={'Enter your message'}
          name={'newMessageBody'}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export const AddMessageFormRedux = reduxForm<FormDataType>({
  form: 'AddMessageForm',
})(AddMessageForm);
