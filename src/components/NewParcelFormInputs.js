import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const NewParcelFormInputs = ({onNewParcelForm}) => {
  return(
  <Form onSubmit={(event) => {
    event.preventDefault()
    const fieldName = event.target.fieldName.value
    const acres = event.target.acres.value
    const parcelType = event.target.parcelType.value
    onNewParcelForm(fieldName, acres, parcelType)
  }}>
    <FormGroup>
      <Label for="fieldName">Field Name</Label>
      <Input type="textarea" name="fieldName" id="fieldName" placeholder="Give your field a name."></Input>
    </FormGroup>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0" >
      <Label for="parcelType" className="mr-sm-2">Parcel Type</Label>
      <Input type="select" name="parcelType" id="parcelType">
        <option>Irrigated</option>
        <option>Unirrigated</option>
        <option>Pasture</option>
        <option>Unspecified</option>
      </Input>
    </FormGroup>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0" >
      <Label for="acres" className="mr-sm-2">Acres</Label>
    <Input type="text" name="acres" id="acres" placeholder="How large is the field in acres?"></Input>
    </FormGroup>
    <Button >Submit</Button>
  </Form>
  )
}

export default NewParcelFormInputs;
