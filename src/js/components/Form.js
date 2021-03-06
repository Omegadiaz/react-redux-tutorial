// src/js/components/Form.jsx
import React, {useState} from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

function ConnectedForm(props){
    const [title, setTitle] = useState("")

  

 function handleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addArticle({ title });
    setTitle("");
  }
  return(    
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={e => handleChange(e)}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;