import React, {Component} from 'react';

import LoaderContainer from "../../../containers/LoaderContainer";
import QuantityContainer from "../../../containers/QuantityContainer";

class ProductComponent extends Component {

    componentDidMount(){
        const {params: {id}, actions: {getProductById}} = this.props
        getProductById(id);
    }

    render() {

        const {product} = this.props;

        return (
            <LoaderContainer>
               <div className="product-view">
                   <div className="product-images"><img  className="card" src={product.image} alt=""/></div>
                   <div className="product-info">
                       <div className="product-category">{product.category}</div>
                       <div className="product-title">{product.name}</div>
                       <div>
                           <i className="fas fa-star rating"></i>
                           <i className="fas fa-star rating"></i>
                           <i className="fas fa-star rating"></i>
                           <i className="fas fa-star rating"></i>
                           <i className="fas fa-star-half-alt rating" ></i>
                       </div>
                       <div className="product-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores debitis, doloremque laborum nam odio perferendis quis repellendus similique. Adipisci, autem deleniti eaque eligendi minima saepe sint. Ab adipisci assumenda dolor eos eum iure magnam nobis, porro praesentium quidem quo saepe sapiente sequi sit soluta, temporibus ut voluptate! Et fugit, illum!</div>
                       <div className="product-price-simple"><span style={{textDecoration: "line-through"}}>{product.price} BYN</span><span>{product.priceWithDiscount} BYN</span></div>
                       <ul className="product-size">
                           <span>Size: </span>
                           <li className="card">S</li>
                           <li className="card">M</li>
                           <li className="card">L</li>
                       </ul>
                       <div className="cl2-rw1">
                           <QuantityContainer product = {product}/>
                           <button className="btn action">В корзину</button>
                       </div>
                   </div>
               </div>
            </LoaderContainer>

        );
    }
}


export default ProductComponent;