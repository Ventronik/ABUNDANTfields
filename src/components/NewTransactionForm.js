import React from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Parcel from './Parcel'
import { request, withAuthentication } from '../helpers'

const NewTransactionForm = (props) => {
  console.log('Dustin: ', props)
  return(
    <div className="row">
      <div className="col">
        <Parcel parcel={props.fieldSelected} />
        <Form onSubmit={(event) => {
          event.preventDefault()
          const userId = props.authState.id
          const parcel_id = props.fieldSelected.id
          const price = event.target.price.value
          
          request(`/users/${userId}/transactions`, 'post', {parcel_id, price})
          .then(() => props.history.push('/home'))
          // const acres = event.target.acres.value
          // const parcelType = event.target.parcelType.value

        }}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="price" className="mr-sm-2">Price</Label>
            <Input type="text" name="price" id="price" placeholder="How much would you like to rent the field for?"></Input>
          </FormGroup>
          <Button >Submit</Button>
        </Form>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  // fetchTransactions
}, dispatch);

const mapStateToProps = state => ({
  // parcel
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withAuthentication(NewTransactionForm)));
