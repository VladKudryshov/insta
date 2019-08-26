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

