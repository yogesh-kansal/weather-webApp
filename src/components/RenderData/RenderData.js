import React, { Component } from 'react';
import Axios from 'axios';
import '../RenderData/render.css';
import  { Key } from '../../shared/keys';
import Spin from '../spinner/Spinner';
import { Card, CardBody, CardHeader, CardText, Button} from 'reactstrap';
import { Link } from 'react-router-dom';


class RenderData extends Component {
    constructor(props) {
        super(props);

        this.state= {
            data: [],
            err: '',
            Key: Key,
            loaded: false,
            city: ''
        }
    }

    
    componentDidMount() {
        //console.log("key:", this.props.info[0].City);
        Axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+this.props.info[0].City+'&appid='+this.state.Key)
        .then(res => {
            //console.log(res.data);
            //alert(JSON.stringify(res.data));
            this.setState({
                data :[...this.state.data,res.data],
                city: res.data.city,
                err: '',
                loaded : true
            })
            this.props.extract(res.data.list);
            //console.log("data is",res.data);
        })
        .catch( err => {
            //console.log(err);
            this.setState({
                data: [],
                err : 'something went wrong',
                loaded: true
            })
        })
        
    }


    render() {
        let i=1;
        const arr =this.state.data[0];

        return (
            
            <div className="container">
                <div className="text-center">
                    {!this.state.loaded ?<Spin /> :null}
                    <div className="row text-center">
                        <div className="ml-auto mr-auto mb-3 text-primary">
                            <h3>{this.state.city.name}</h3>
                        </div>
                    </div>
                    
                    <div className="row">
                        {arr ?
                        arr.list.map(d => {
                            if((i-2)%8===0) {
                                return(
                                    <div key={i++} className=" col-5 col-sm mb-2 mr-auto ml-auto">
                                        <Card className="z-depth-4">
                                            <Link to={`/weather/${i}`}>
                                                <CardHeader style={{background:"#555", color:"white"}} >{d.dt_txt.slice(0,-8)}</CardHeader></Link>
                                                <CardBody>                                    
                                                    <CardText><strong >{d.weather[0].description}</strong></CardText>
                                                    <CardText>temp: {Math.round((d.main.temp)-273.16)}&deg;</CardText>
                                                </CardBody>    
                                        </Card>
                                    </div>
                                );
                            }
                            else {
                                return (<div key={i++}/>);
                            }
                        })
                        :null}
                    </div>
                    <div>
                        {this.state.err.length ?<h1 className="text-align-center">{this.state.err}</h1>:null}
                    </div>  
                    {this.state.loaded ?<Button type="submit" color="danger" className="mt-2" href="/home">
                        Go back</Button>:null}
 
                    
                    <hr />
                </div>                
            </div>
        );
    }
}

export default RenderData;