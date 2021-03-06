import React from 'react';
import {Textarea, TextInput, Select, Row, Col} from 'react-materialize';

function Account() {
    return (
        <div className='container'>
            {/* <Row>
                <Col s12 m6> */}
                    
                    <h5>Create your user account; make sure to select some activities...</h5>
                    <TextInput placeholder="First Name"/>
                    <TextInput email validate label="Email"/>
                    <Textarea placeholder="Tell us about you!"/>

                    <Select multiple>
                        <option value="" disabled selected>
                            Select Home Activities
                        </option>
                        <option value="1">
                            reading
                        </option>
                        <option value="2">
                            cooking
                        </option>
                        <option value="3">
                            baking
                        </option>
                    </Select>
                    <Select multiple>
                        <option value="" disabled selected>
                            Select Music
                        </option>
                        <option value="1">
                            Country
                        </option>
                        <option value="2">
                            Indie Pop
                        </option>
                        <option value="3">
                            Classic Rock
                        </option>
                    </Select>
                    <Select multiple>
                        <option value="" disabled selected>
                            Select Outdoor Activities
                        </option>
                        <option value="1">
                            Hiking
                        </option>
                        <option value="2">
                            Fishing
                        </option>
                        <option value="3">
                            Kayaking
                        </option>
                    </Select>
                    <Select multiple>
                        <option value="" disabled selected>
                            Select Sport Activities
                        </option>
                        <option value="1">
                            Basketball
                        </option>
                        <option value="2">
                            Softball
                        </option>
                        <option value="3">
                            Swimming
                        </option>
                    </Select>
                {/* </Col>
            </Row> */}
        </div>
    );
}

export default Account;
