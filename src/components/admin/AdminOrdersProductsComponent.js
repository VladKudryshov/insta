import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {loadOrders, removeOrder} from "../../actions/action";
import connect from "react-redux/es/connect/connect";
import LoaderContainer from "../../containers/LoaderContainer";
import {Link} from "react-router";


class AdminOrdersProductsComponent extends Component {

    componentDidMount(){
        this.props.actions.loadOrders()
    }


    remove = (id) => {
        const {actions: {removeOrder}} = this.props;
        removeOrder(id);
    };

    render() {
        const {orders} = this.props
        let ordersView = orders.map(order => {
            return <tr key={order.orderId}>
                <td className="txl" >{order.orderId}</td>
                <td className="txl" >{order.userName} {order.userSecondName}</td>
                <td className="txc">{order.created}</td>
                <td className="txc">{order.updated}</td>
                <td className="txc">{order.status}</td>
                <td className="txr">{order.productsCount}</td>
                <td className="txr">{order.cost}</td>
                <td className="txc">
                    <Link to={{ pathname: `/admin/orders/${order.orderId}`}} > <i className="far fa-eye icon-margin"/> </Link>
                    <i className="far fa-edit icon-margin" onClick={() => this.editProduct(order.orderId)}/>
                    <i className="far fa-trash-alt icon-margin" onClick={() => this.remove(order.orderId)}/>
                </td>
            </tr>
        });


        return (
            <LoaderContainer>
                <div className="admin-card panel-products">
                    <table className="table-component">
                        <thead>
                        <tr>
                            <th className="txl" style={{width: '10%'}}>#</th>
                            <th className="txl" style={{width: '30%'}}>Заказчик</th>
                            <th className="txc" style={{width: '10%'}}>Создан</th>
                            <th className="txc" style={{width: '10%'}}>Обновлен</th>
                            <th className="txc" style={{width: '10%'}}>Статус</th>
                            <th className="txr" style={{width: '10%'}}>Кол-во позиций</th>
                            <th className="txr" style={{width: '10%'}}>Стоимость</th>
                            <th className="txc" style={{width: '10%'}}>Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {ordersView}
                        </tbody>
                    </table>
                </div>
            </LoaderContainer>
        );
    }
}


const mapStateToProps = (state) => {
    const {order: {orders}, loader} = state;
    return {
        orders,
        loader
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        loadOrders,
        removeOrder
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrdersProductsComponent);

