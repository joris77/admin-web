import React, {Component} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import {Button} from 'react-toolbox'
import {browserHistory} from 'react-router'
import {getEntities} from 'modules/entities'
import classes from './BalanceCreationForm.scss'
import {date, text} from '../../../forms/Fields'
import {create, SUCCESS_CREATE} from 'modules/entities/balanceCreationRequestedEvents'

export class BalanceCreationForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
    } = this.props;

    return (
      <div className={classes.form}>
        <form onSubmit={handleSubmit}>
          <Field name='date' label='Date' component={text} />
          <Field name='description' label='Description' component={text} />
          <Button type="submit" disabled={pristine || submitting} className={classes.button}>Create</Button>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  return errors;
}

const onSubmit = (values) => {
  return (dispatch) => {
    return dispatch(create({
      values,
    })).then(action => {
      if (action.type === SUCCESS_CREATE) {
        browserHistory.push('/balances/request')
      }
    })
  }
}

const mapDispatchToProps = {
  onSubmit
}

const mapStateToProps = (state) => {
  return {}
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'BalanceCreationForm',
    validate
  }))(BalanceCreationForm)