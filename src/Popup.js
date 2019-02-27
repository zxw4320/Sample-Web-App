import React from "react";
import "./Popup.css"

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '', lastName: '', address: '', city: '', state: '', zip: '', email: '',
            affiliation: '', date: '', status: 'Undergraduate', paymentMethod: 'Credit',
            firstNameValid: false, lastNameValid: false, addressValid: false, cityValid: false,
            stateValid: false, zipValid: false, emailValid: false, affiliationValid: false,
            dateValid: false, formValid: false, formComplete: false, registered: false
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    };

    handleSubmit(e) {
        this.validateForm();
        if (this.state.formValid) {
            this.setState({formComplete: !this.state.formComplete});
        }
        e.preventDefault();
    }

    handleBack(e){
        this.setState({formComplete: !this.state.formComplete});
        e.preventDefault();
    }

    handleComplete(e) {
        this.setState({registered: !this.state.registered});
        e.preventDefault();
    }


    FillForm(){
        return(
        <form onSubmit={this.handleSubmit}>
            <h2>Registration</h2>
            <label> First Name
                <input
                    className={this.state.firstNameValid ? '' : 'error'}
                    type={"text"}
                    name={"firstName"}
                    value={this.state.firstName}
                    onChange={this.handleInput}/>
            </label>

            <label> Last Name
                <input
                    className={this.state.lastNameValid ? '' : 'error'}
                    type={"text"}
                    name={"lastName"}
                    value={this.state.lastName}
                    onChange={this.handleInput}/>
            </label>

            <label> Address
                <input
                    className={this.state.addressValid ? '' : 'error'}
                    type={"text"}
                    name={"address"}
                    value={this.state.address}
                    onChange={this.handleInput}/>
            </label>

            <label> City
                <input
                    className={this.state.cityValid ? '' : 'error'}
                    type={"text"}
                    name={"city"}
                    value={this.state.city}
                    onChange={this.handleInput}/>
            </label>

            <label> State
                <input
                    className={this.state.stateValid ? '' : 'error'}
                    type={"text"}
                    name={"state"}
                    value={this.state.state}
                    onChange={this.handleInput}/>
            </label>

            <label> Zip Code
                <input
                    className={this.state.zipValid ? '' : 'error'}
                    type={"text"}
                    name={"zip"}
                    value={this.state.zip}
                    onChange={this.handleInput}/>
            </label>

            <label> Email
                <input
                    className={this.state.emailValid ? '' : 'error'}
                    type={"text"}
                    name={"email"}
                    value={this.state.email}
                    onChange={this.handleInput}/>
            </label>

            <label> School or Company
                <input
                    className={this.state.affiliationValid ? '' : 'error'}
                    type={"text"}
                    name={"affiliation"}
                    value={this.state.affiliation}
                    onChange={this.handleInput}/>
            </label>

            <label> Date
                <input
                    className={this.state.dateValid ? '' : 'error'}
                    type={"date"}
                    name={"date"}
                    value={this.state.date}
                    min="2019-01-01" max="2030-12-31"
                    onChange={this.handleInput}/>
            </label>

            <label> Status
                <select name={"status"} value={this.state.status} onChange={this.handleInput}>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Faculty">Faculty</option>
                    <option value="Industry Worker">Industry Worker</option>
                </select>
            </label>

            <label> Payment Method
                <select name={"paymentMethod"} value={this.state.paymentMethod} onChange={this.handleInput}>
                    <option value="Credit">Credit</option>
                    <option value="Debit">Debit</option>
                    <option value="PayPal">PayPal</option>
                </select>
            </label>

            <input type="submit" value="Next" />
        </form>);
    }

    UserValidation(){
        return(<form onSubmit={this.handleComplete} onGoBack={this.handleBack}>
            <h2>Verify Registration</h2>
            <label> First Name
                <input readOnly value={this.state.firstName}/>
            </label>

            <label> Last Name
                <input readOnly value={this.state.lastName}/>
            </label>

            <label> Address
                <input readOnly value={this.state.address}/>
            </label>

            <label> City
                <input readOnly value={this.state.city}/>
            </label>

            <label> State
                <input readOnly value={this.state.state}/>
            </label>

            <label> Zip Code
                <input readOnly value={this.state.zip}/>
            </label>

            <label> Email
                <input readOnly value={this.state.email}/>
            </label>

            <label> School or Company
                <input readOnly value={this.state.affiliation}/>
            </label>

            <label> Date
                <input readOnly value={this.state.date}/>
            </label>

            <label> Status
                <input readOnly value={this.state.status}/>
            </label>

            <label> Payment Method
                <input readOnly value={this.state.paymentMethod}/>
            </label>

            <input type="submit" value="Next" />
            <button type="button" onClick={this.handleBack.bind(this)}>Back</button>
        </form>);
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.lastNameValid;
        let addressValid = this.state.addressValid;
        let cityValid = this.state.cityValid;
        let stateValid = this.state.stateValid;
        let zipValid = this.state.zipValid;
        let emailValid = this.state.emailValid;
        let affiliationValid = this.state.affiliationValid;
        let dateValid = this.state.dateValid;

        switch(fieldName) {

            case 'firstName':
                firstNameValid = value.length > 0;
                break;
            case 'lastName':
                lastNameValid = value.length > 0;
                break;
            case 'address':
                addressValid = value.match(/^\d{1,5}\s(\b\w*\b\s){1,2}\w*/);
                break;
            case 'city':
                cityValid = value.length > 0;
                break;
            case 'state':
                stateValid = value.length >= 2;
                break;
            case 'zip':
                zipValid = value.match(/^\d{5}$/);
                break;
            case 'email':
                emailValid = value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
                break;
            case 'affiliation':
                affiliationValid = value.length > 0;
                break;
            case 'date':
                dateValid = value.match(/^20[1-3][0-9]-[0-1][0-9]-[0-3][0-9]$/);
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors, firstNameValid: firstNameValid,
            lastNameValid: lastNameValid, addressValid: addressValid, cityValid: cityValid,
            stateValid: stateValid, zipValid: zipValid, emailValid: emailValid,
            affiliationValid: affiliationValid, dateValid: dateValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.firstNameValid && this.state.lastNameValid &&
                this.state.addressValid && this.state.cityValid && this.state.stateValid &&
                this.state.zipValid && this.state.emailValid && this.state.affiliationValid &&
                this.state.dateValid});
    }

    render() {
        return(
            <div>
                <header>
                    {(this.state.registered) ?
                        <p>Registration Complete</p>
                        :
                        (this.state.formComplete) ?
                        this.UserValidation() : this.FillForm()
                    }
                </header>
            </div>
        );
    }
}

export default Popup;