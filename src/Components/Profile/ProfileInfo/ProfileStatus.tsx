import React, { ChangeEvent } from 'react';
import s from './ProfileInfo.module.css';

type ProfileStatusPropsType = {
  status: string;
  someFullName: string;
  updateStatus: (status: string) => void;
};

type PrevStatePropsType = {
  status: string;
  editMode: boolean;
};

type PrevPropsType = {
  status: string;
  updateStatus: (status: string) => void;
  someFullName: string;
};

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps: PrevPropsType, prevState: PrevStatePropsType) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div className={s.profileStatus}>
        <div className={s.myFullName}>{this.props.someFullName}</div>
        {!this.state.editMode && (
          <div>
            <span onClick={this.activateEditMode}>
              {this.props.status || 'No status'}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}
