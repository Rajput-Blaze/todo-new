import React from "react";

const Sresult = (props) =>{
                const Img = `https://source.unsplash.com/400x300/?${props.name}`;
                return <>
                <div className="center_div">
                <img src={Img} alt="search" />
                </div>
                </>
}

export default Sresult;