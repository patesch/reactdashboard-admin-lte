import React from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import LabelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import Summary from './summary'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from './billingCycleActions'

class BillingCycleForm extends React.Component {
    
    calculateSummary() {
        const sum = (t,v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c=>+c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d=>+d.value || 0).reduce(sum)
        }
    }

    calculateAmount(list) {
        return Math.round(list.reduce((t,v)=>t+(+v.value||0),0)*100)/100
    }

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        // const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        const sumOfCredits = this.calculateAmount(credits)
        const sumOfDebts = this.calculateAmount(debts)
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' name='name' label='Nome' cols='12 4' placeholder='informe o nome' component={LabelAndInput} readOnly={readOnly} />
                    <Field name='month' name='month' label='Mês' cols='12 4' placeholder='informe o mês' component={LabelAndInput} readOnly={readOnly} />
                    <Field name='year' name='year' label='Ano' cols='12 4' placeholder='informe o ano' component={LabelAndInput} readOnly={readOnly} />
                    <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <ItemList cols='12 6' legend='Créditos' field='credits' readOnly={readOnly} list={credits} />
                    <ItemList cols='12 6' legend='Débitos' field='debts' readOnly={readOnly} list={debts} showStatus={true}/>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button> &nbsp;
                    <button type="button" className='btn btn-default' onClick={this.props.init}>Fechar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form:'billingCycleForm', destroyOnUnmount: false})( BillingCycleForm )
const select = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({ credits: select(state, 'credits'), debts: select(state, 'debts') })
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)( BillingCycleForm )
