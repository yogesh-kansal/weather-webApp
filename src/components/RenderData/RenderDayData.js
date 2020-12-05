import { Card, CardText, CardBody, CardHeader} from 'reactstrap';

const RenderDayData =(props) =>{
    const d=props.data.map(x=>{console.log(x);return(x)});
    console.log(d[0]);
        return (
            <div>
                 <Card>
                    
                    <CardBody>
                        <CardText><strong >{d[0].weather[0].description}</strong></CardText>
                        <CardText>temp: {Math.round((d[0].main.temp)-273.16)}&deg;</CardText>
                        <CardText>Pressure: {d[0].main.pressure} Pa</CardText>
                        <CardText>max_temp.: {Math.round((d[0].main.temp_max)-273.16)}&deg;</CardText>
                        <CardText>min_temp: {Math.round((d[0].main.temp_min)-273.16)}&deg;</CardText>
                        <CardText>Sea_level: {d[0].main.sea_level} m.</CardText>
                    </CardBody>
                 </Card>
                       
            </div>
        );
}

export default RenderDayData;