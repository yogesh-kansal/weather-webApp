import React, {useState} from 'react';
import './com.css';

const NewComment=(props)=>{
    const [title,setstate] = useState('');

    const handlesubmit=(e)=> {
        e.preventDefault();
        props.new(title);
        setstate('');

    }

    return(
        <form onSubmit={handlesubmit} className="row formss mb-4">
        <input className="col-sm-4 mr-2" type="text" value={title} required onChange={(e)=> {setstate(e.target.value)}} placeholder="write here..."/>
        <input type="submit" value="Add "></input>
    </form>

    );
    
}
export default NewComment;