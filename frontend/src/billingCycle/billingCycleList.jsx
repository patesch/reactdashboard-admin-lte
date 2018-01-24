import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList, showTab } from './billingCycleActions'

class BillingCycleList extends React.Component {
    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const billingCycles = this.props.list || []
        return billingCycles.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td className='text-center'>
                    <button className="btn btn-xs btn-warning" onClick={()=>this.props.showTab(bc,'tabUpdate')}>
                        <i className="fa fa-pencil"></i>
                    </button> &nbsp;
                    <button className="btn btn-xs btn-danger" onClick={()=>this.props.showTab(bc,'tabDelete')}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div className="XXX">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className='table-actions text-center'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showTab }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)
