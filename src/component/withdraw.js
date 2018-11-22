import React from "react";
import PropTypes from "prop-types";
import "./component-styles.scss";


export class Withdraw extends React.Component {
  render() {
    return (
        <div className="section-container">
        <h1>Account Withdraw</h1>
        
        <div>Choose an Account:
            <ul className="account-list">
                {this.props.accounts.map((account, index) => 
                    <li 
                    key={`item--${index}`}
                    className="account-summary-li" >
                        {`${account.name}--${account.balance}`}
                    </li>
                )}
            </ul>
        </div>
        <div>How much money to withdraw?
            <input type="text" placeholder="e.g. 45.22 or 45"></input>
        </div>
                
        

    </div>
    );
  }
}

Withdraw.propTypes = {
  accounts: PropTypes.array
};