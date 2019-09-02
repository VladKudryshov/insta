import React, {Component} from 'react';

import {getRepresentationCategory, getRepresentationStatus, getStepStatus} from "../../../models/statusMapping";
import {getFormatedPrice} from "../../../utils/other";
import LoaderContainer from "../../../containers/LoaderContainer";
import {get} from 'lodash'
import {ORDERS} from "../../../consts/apps";
import TableView from "../../admin/TableView";

class OrderCardComponent extends Component {

    componentDidMount() {
        console.log(this.props.params.id)
        this.props.actions.loadDataById(ORDERS, this.props.params.id)
    }

    componentDidUpdate(prevProps) {
        const locationChanged = this.props.params !== prevProps.params;
        locationChanged && this.props.actions.loadDataById(ORDERS, this.props.params.id)
    }



    render() {
        const {orders: {orderContact, productOrder, orderStatus}} = this.props;
        let products = [];
        if (productOrder) {
            products = productOrder.map(product => <ul key={product.id}>
                    <li>{product.name}</li>
                    <li>{getRepresentationCategory(product.category)}</li>
                    <li className="tx-l">{product.discount}%</li>
                    <li className="tx-l">{getFormatedPrice(product.priceWithDiscount)} BYN</li>
                    <li className="tx-l">{getFormatedPrice(product.totalPrice)} BYN</li>
                </ul>
            );
        }

        const headers = {
            name: {
                name: "Название",
                style:{
                    textAlign: "left"
                }
            },
            category: {
                name: "Категория",
                style:{
                    textAlign: "right"
                }
            },
            price: {
                name: "Цена",
                style:{
                    textAlign: "right"
                }
            },
            discount: {
                name: "Скидка",
                style: {
                    textAlign: 'right'
                }
            },
            totalPrice: {
                name: "Итого",
                style: {
                    textAlign: 'right'
                }
            }
        };



        return (
            <div className="order-component" key={this.props.params.id}>

                <LoaderContainer>

                    <div className="order-info ">
                        <ul className="order-info-title card">
                            <li>Заказ №{this.props.params.id}</li>
                            <li className="tx-l">Статус: {getRepresentationStatus(orderStatus)}</li>
                        </ul>
                        <div className="cl2-rw1 order-info-contacts card">
                            <table className="order-info-person">
                                <tbody>
                                <tr>
                                    <td>Имя:</td>
                                    <td>{get(orderContact, 'userName')}</td>
                                </tr>
                                <tr>
                                    <td>Фамилия:</td>
                                    <td>{get(orderContact, 'userSecondName')}</td>
                                </tr>
                                <tr>
                                    <td>Телефон:</td>
                                    <td>{get(orderContact, 'userPhone')}</td>
                                </tr>
                                </tbody>
                            </table>
                            <table className="order-info-address">
                                <tbody>
                                <tr>
                                    <td>Город:</td>
                                    <td>{get(orderContact, 'city')}</td>
                                </tr>
                                <tr>
                                    <td>Улица:</td>
                                    <td>{get(orderContact, 'street')}</td>
                                </tr>
                                <tr>
                                    <td>Дом:</td>
                                    <td>{get(orderContact, 'house')}</td>
                                </tr>
                                <tr>
                                    <td>Квартира:</td>
                                    <td>{get(orderContact, 'flat')}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <TableView headers={headers} data={productOrder ? productOrder: []} columnSize={{gridTemplateColumns: '20% 20% 20% 20% 20%'}}/>
                        {/*<div className="order-info-products">
                            <ul>
                                <li>Название</li>
                                <li>Категория</li>
                                <li className="tx-l">Скидка</li>
                                <li className="tx-l">Цена со скидкой</li>
                                <li className="tx-l">Итого</li>
                            </ul>
                            {products}
                        </div>*/}
                    </div>
                    <div className="order-component-history card">
                        <ul>
                            <li className={getStepStatus(orderStatus) >= getStepStatus('PENDING')? 'progress progress-done': 'progress'}>
                                <div className={getStepStatus(orderStatus) >= getStepStatus('PENDING')? 'step step-done': 'step'}>
                                    <i className="far fa-check-circle"/>
                                </div>
                                <div className="status">{getRepresentationStatus('PENDING')}</div>
                            </li>

                            <li className={getStepStatus(orderStatus) >= getStepStatus('PROCESSING')? 'progress progress-done': 'progress'}>
                                <div className={getStepStatus(orderStatus) >= getStepStatus('PROCESSING')? 'step step-done': 'step'}>
                                    <i className="far fa-check-circle"/>
                                </div>
                                <div className="status">{getRepresentationStatus('PROCESSING')}</div>
                            </li>

                            <li className={getStepStatus(orderStatus) >= getStepStatus('DELIVERY')? 'progress progress-done': 'progress'}>
                                <div className={getStepStatus(orderStatus) >= getStepStatus('DELIVERY')? 'step step-done': 'step'}>
                                    <i className="far fa-check-circle"/>
                                </div>
                                <div className="status">{getRepresentationStatus('DELIVERY')}</div>
                            </li>

                            <li className={getStepStatus(orderStatus) >= getStepStatus('DONE')? 'progress progress-done': 'progress'}>
                                <div className={getStepStatus(orderStatus) >= getStepStatus('DONE')? 'step step-done': 'step'}>
                                    <i className="far fa-check-circle"/>
                                </div>
                                <div className="status">{getRepresentationStatus('DONE')}</div>
                            </li>
                        </ul>
                    </div>
                </LoaderContainer>
            </div>
        );
    }
}


export default OrderCardComponent;