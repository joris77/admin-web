import React, {Component} from 'react'
import {Link} from 'react-router'
import {Button, Table, TableCell, TableHead, TableRow} from 'react-toolbox'
import BalanceCreationForm from './BalanceCreationForm'
import classes from './Balances.scss'

class Balances extends Component {

  constructor(props) {
    super(props)
    const {fetch} = props
    fetch()
  }

  render() {
    return <div>
      <h1>Balances</h1>
      <BalanceCreationForm />
      <Table selectable={false}>
        <TableHead>
          <TableCell>Date</TableCell>
          <TableCell>Creation date</TableCell>
          <TableCell>Description</TableCell>
          <TableCell></TableCell>
        </TableHead>
        {this.props.data.map(item => {
          return (
            <TableRow key={item.id}>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.creationDateTime}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell><Link to={'/balances/' + item.id} >Details</Link></TableCell>
            </TableRow>
          )
        })}
      </Table>
    </div>
  }
}

export default Balances
