//import logo from './logo.svg';
import React, { Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import DataForm from './components/Data/DataForm';
import RenderData from './components/RenderData/RenderData';
import RenderDayData from './components/RenderData/RenderDayData';
import Commentss from './components/Commnets/comments';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Comments from './components/Commnets/comments';

class App extends  Component{
  constructor(props) {
    super(props);
    
    this.state = {
      render: true,
      formdata : [],
      data:[],
      formFilled:false

    }
    this.FormData = this.FormData.bind(this);
    this.RenderedData=this.RenderedData.bind(this);
  }


  FormData( d ) {
    this.setState({
      formdata: [...this.state.formdata, d],
      render: false
    })
  }

  RenderedData(d) {
    this.setState({
      data:[...this.state.data,d]
    })
  }
  
  render() {
    
    const Home=()=>{
      if(this.state.render) {
        return (
          <DataForm data = {this.FormData}/>
        );
      }
      else {
        return(
          <div/>
          )
        
      }
    }
    const RenderDay=({match}) => {
      const p = this.state.data.map(index => {
          return(index[parseInt(match.params.id,10)-1]);
        });
      return(
       <div>
         <RenderDayData data={p} />
       </div>);
    }
    return (
      <div className="">
        <BrowserRouter>
            <Header />
            {!this.state.render?<RenderData  info ={this.state.formdata} extract={this.RenderedData}/>:<div></div>}
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/weather/:id" component={RenderDay} />
              <Route path="/feedback" component={Comments} />
              <Redirect exact to="/home" component={<App />} />
            </Switch>
            <Footer />
        </BrowserRouter>
      </div>
    );

  }
  
}
export default App;