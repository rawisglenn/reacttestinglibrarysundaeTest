import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";


export default function SummaryForm(){
    const [isChecked, setChecked] = useState(false);

    const popover = (
        <Popover id="termsandconditions-popover">
          <Popover.Body>No ice cream will actually be delivered</Popover.Body>
        </Popover>
      );

      const chkboxLabel = (
        <span>
            <OverlayTrigger placement="right" overlay={popover}>
                <span style={{ color: 'blue' }}> Terms and Conditions</span>
            </OverlayTrigger>
        </span>
    );

    return(
            <Form>
                <Form.Group controlId="anything">
                    <Form.Check 
                    type="checkbox" 
                    checked={isChecked} 
                    onChange={(e)=>setChecked(e.target.checked)} 
                    label={chkboxLabel}/>
                </Form.Group>
                    <Button id="confirmBtn" disabled={!isChecked} type="submit">Confirm order</Button>
                </Form>
    );
}