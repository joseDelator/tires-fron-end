import React, { Fragment, useState, useEffect} from "react";
import Getire from "./gettingatire";

const ListTires = () => {
  const [todos, setTodos] = useState([]);

  //delete todo function


  const getTodos = async () => {
    try {
      const response = await fetch("https://el-tecolte-tires.herokuapp.com/tires");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  
  var i = 0; 
  return (
    
    <Fragment>
      <Getire/>
      {" "}

      <table className="table">
        <thead>
          <tr>
            <td>Width</td>
            <td>Ratio</td>
            <td>Rims</td>
            <td>Quantity</td>
          </tr>
        </thead>
        <tbody>
          
          {todos.map(todo => (
            i=i+1,
            <tr key={ i}>
                <td>{todo.width}</td>
                <td>{todo.ratio}</td>
                <td>{todo.rim}</td>
                <td className="quanity">{todo.quanity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTires;