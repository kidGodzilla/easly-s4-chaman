import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './ButtonDetail.scss'

class ButtonDetail extends Component {
   
    render() { 
        return ( 
            <div className='container__btn'>
            <i className='fas fa-plus-circle btnPlus'/>
            </div>
    //    <Link>
    //    </Link>
        );
    }
}
 
export default ButtonDetail;