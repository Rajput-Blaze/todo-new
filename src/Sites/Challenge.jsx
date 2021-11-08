import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Challenge = () =>{
       return <>
            <h1 className="text-capitalize text-center mt-5 text-danger">welcome to manish kumar channel</h1>
            {/* <button className="btn btn-success">manish</button> */}
            
            <div className="container">
              <div className="row">
                <div className="col text-center">
                Column
                </div>
                <div className="col text-center">
              Column
             </div>
           <div className="col text-center">
          Column
        </div>
      </div>
         </div>
         <div className="container">
         <div className="row">
         <div className="col">
         <div className="card">
  <img src="https://picsum.photos/200/301" className="card-img-top" alt="..." height="200px" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
 </div>
 <div className="col">
<div className="card">
  <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." height="200px" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
 <div className="col">
<div className="card">
  <img src="https://picsum.photos/200/299" className="card-img-top" alt="..." height="200px" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div>
</div>
</div>
           </>

}

export default Challenge;