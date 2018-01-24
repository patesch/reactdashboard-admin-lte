import React from 'react'

import { Field, arrayInsert, arrayRemove }  from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../common/layout/grid'
import Input from '../common/form/input'
import If from '../common/operator/if'

class ItemList extends React.Component {

    add(i, item = {}) {
        if(!this.props.readOnly) {
            this.props.arrayInsert('billingCycleForm', this.props.field, i, item)
        }
    }

    remove(i) {
        if(!this.props.readOnly && this.props.list.length>1) {
            this.props.arrayRemove('billingCycleForm', this.props.field, i)
        }
    }

    renderRows() {
        const list = this.props.list || []
        return list.map((item, i) => (
            <tr key={i}>
                <td><Field name={`${this.props.field}[${i}].name`} component={Input} placeholder='Informe o nome' readOnly={this.props.readOnly} /></td>
                <td><Field name={`${this.props.field}[${i}].value`} component={Input} placeholder='Informe o valor' readOnly={this.props.readOnly} /></td>
                <If test={this.props.showStatus} >
                    <td><Field name={`${this.props.field}[${i}].status`} component={Input} placeholder='Informe o status' readOnly={this.props.readOnly} /></td>
                </If>
                <td className='text-center'>
                    <button onClick={()=>this.add(i+1)} type="button" className='btn btn-xs btn-success'><i className="fa fa-plus"></i></button>
                    <button onClick={()=>this.add(i+1, item)} type="button" className='btn btn-xs btn-warning'><i className="fa fa-clone"></i></button>
                    <button onClick={()=>this.remove(i)} type="button" className='btn btn-xs btn-danger'><i className="fa fa-trash-o"></i></button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <Grid cols={this.props.cols} >
              <fieldset>
                <legend>{this.props.legend}</legend>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <If test={this.props.showStatus}>
                                <th>Status</th>
                            </If>
                            <th className='table-actions text-center'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
              </fieldset>  
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(null, mapDispatchToProps)(ItemList)
