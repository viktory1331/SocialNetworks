import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import { DialogsPageType } from '../../Redux/store';
import { Redirect } from 'react-router';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

type PropsType = {
  dialogsPage: DialogsPageType;
  sendMessage: (newMessageBody: string) => void;
  isAuth: boolean;
};

type FormDataType = {
  newMessageBody: string;
};

export const Dialogs = (props: PropsType) => {
  let state = props.dialogsPage;

  let dialogsElement = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  let messagesElement = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} id={m.id} key={m.id} />
  ));

  let addNewMessage = (values: any) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={'/login'} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>
        <div>{messagesElement}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={'textarea'}
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

const AddMessageFormRedux = reduxForm<FormDataType>({ form: 'AddMessageForm' })(
  AddMessageForm
);
