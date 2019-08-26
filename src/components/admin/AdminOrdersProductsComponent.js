import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {loadAllOrders, removeDataById} from "../../actions/action";
import connect from "react-redux/es/connect/connect";
import LoaderContainer from "../../containers/LoaderContainer";
import {Link} from "react-router";
import {ORDERS} from "../../consts/apps";
import TableView from "./TableView";


class AdminOrdersProductsComponent extends Component {

    componentDidMount() {
        this.props.actions.loadAllOrders(ORDERS)
    }


    remove = (id) => {
        const {actions: {removeDataById}} = this.props;
        removeDataById(ORDERS, id);
    };

    render() {
        const {orders} = this.props
        let ordersView = orders.map(order => {
            return <tr key={order.orderId}>
                <td className="txl">{order.orderId}</td>
                <td className="txl">{order.userName} {order.userSecondName}</td>
                <td className="txc">{order.created}</td>
                <td className="txc">{order.updated}</td>
                <td className="txc">{order.status}</td>
                <td className="txr">{order.productsCount}</td>
                <td className="txr">{order.cost}</td>
                <td className="txc">
                    <Link to={{pathname: `/admin/orders/${order.orderId}`}}> <i className="far fa-eye icon-margin"/>
                    </Link>
                    <i className="far fa-edit icon-margin" onClick={() => this.editProduct(order.orderId)}/>
                    <i className="far fa-trash-alt icon-margin" onClick={() => this.remove(order.orderId)}/>
                </td>
            </tr>
        });

        {/*
        <th className="txl" style={{width: '10%'}}>#</th>
        <th className="txl" style={{width: '30%'}}>Заказчик</th>
        <th className="txc" style={{width: '10%'}}>Создан</th>
        <th className="txc" style={{width: '10%'}}>Обновлен</th>
        <th className="txc" style={{width: '10%'}}>Статус</th>
        <th className="txr" style={{width: '10%'}}>Кол-во позиций</th>
        <th className="txr" style={{width: '10%'}}>Стоимость</th>
        <th className="txc" style={{width: '10%'}}>Действия</th>
*/
        }


        const headers = {
            orderId: {
                name: "#",
                style: {
                    textAlign: "left"
                }
            },
            userName: {
                name: "Заказчик",
                style: {
                    textAlign: "left"
                }
            },
            created: {
                name: "Создан",
                style: {
                    textAlign: "center"
                }
            },
            updated: {
                name: "Обновлен",
                style: {
                    textAlign: "center"
                }
            },
            status: {
                name: "Статус",
                style: {
                    textAlign: "center"
                }
            },
            productsCount: {
                name: "Кол-во позиций",
                style: {
                    textAlign: "right"
                }
            },
            cost: {
                name: "Стоимость",
                style: {
                    textAlign: 'right'
                }
            }
        };

        const actions = {
            removeAction: this.remove
        };


        return (
            <LoaderContainer>
                <TableView headers={headers}
                           data={orders}
                           actions={actions}
                           columnSize={{gridTemplateColumns: '10% 30% 10% 10% 10% 10% 10% 10%'}}
                />
            </LoaderContainer>
        );
    }
}


const mapStateToProps = (state) => {
    const {data: {orders}, loader} = state;
    return {
        orders,
        loader
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        loadAllOrders,
        removeDataById
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrdersProductsComponent);

