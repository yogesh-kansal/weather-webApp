import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Label, Input, Button, FormGroup, Col} from 'reactstrap';
import '../Data/data.css';

class DataForm extends Component {
    constructor(props) {
        super(props);

        this.state= {
            City: '',
            Latitude: 0.00,
            Longitude: 0.00
        }
        this.halndleinput=this.halndleinput.bind(this);
        this.halndlesubmit = this.halndlesubmit.bind(this);
    }

    halndlesubmit(e) {
        e.preventDefault();
        this.props.data(this.state);
        this.setState({
            City: '',
            Latitude: 0.00,
            Longitude: 0.00
        })    
    }

    halndleinput(e) {
        const target= e.target;
        const value = target.value;
        const name =target.name;

        this.setState({
            [name]:value
        })

    }

    render() {
        return (
            <div className="container col-8 col-sm-3  form">
                 <h4>Fill in details to continue...</h4><hr></hr>
                <Form onSubmit={this.halndlesubmit}>                   
                    <FormGroup row className="m-2">
                        <Label htmlFor="cityName" className="row col-12">CityName</Label>
                        <Input type="text" id="cityname" name="City" placeholder="City" className="offset-1 col-8"
                        value={this.state.City}
                        onChange ={this.halndleinput} />
                    </FormGroup>
                    <FormGroup row className="m-2 mt-4">
                        <Label htmlFor="cordinates" className="row col-12">Geographical coordinates</Label>
                        <div className="row offset-1">
                            <Col className="col-8 col-sm-5">
                                <Input type="number" id="lat" name="Latitude" placeholder="Lat."
                                value={this.state.Latitude}
                                onChange ={this.halndleinput} />
                            </Col>
                            <Col className="col-8 col-sm-5">
                                <Input type="number" id="lat" name="Longitude" placeholder="Lon."
                                value={this.state.Longitude}
                                onChange ={this.halndleinput} />
                            </Col>
                        </div>
                    </FormGroup>

                    <FormGroup className="mt-4 offset-3 ">
                            <Button type="submit" color="primary">Fetch Data</Button>
                        
                    </FormGroup>
                </Form>

                
            </div>
        );
    }
}

export default DataForm;