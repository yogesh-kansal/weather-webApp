import React, {useState} from 'react';
import uuid from 'uuid/dist/v1';
import   NewComment from './commentForm';
import './com.css';

const Comments=() => {

    const [comments, setcomments] = useState([
        {title:"one-band song",id:1},
        {title:"Two-the rock",id:2},
        {title:"Three-the mashup",id:3}
    ]);

    const AddComment=(title) => {
        setcomments([...comments,{title,id:uuid()}]);
    }

    return (
        <div className="col-5 jsutify-content-center formss">
            <div className="col-auto">
                <h3 >Comments: </h3>
            </div>
            <div className="col">
                <ul className="">
                    {comments.map(comment=> {
                        return(<li key={comment.id}>{comment.title}</li>)
                    })}
                </ul>    
                <hr />      
            </div>
            <div className="col">   
                <NewComment new={AddComment}/>
            </div>
                        
        </div>
    );
}

export default Comments;