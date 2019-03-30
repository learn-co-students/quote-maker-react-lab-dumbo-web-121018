import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {addQuote, removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes';

class Quotes extends Component {

  formatCards = () => {
    return this.props.quotes.map(quote => {
      console.log("quote:", quote);
      return <QuoteCard quote={quote}
                        upvoteQuote={this.props.upvoteQuote}
                        downvoteQuote={this.props.downvoteQuote}
                        removeQuote={this.props.removeQuote}
                        key={quote.id}/>
    })
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.formatCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  quotes: state.quotes
})

const mapDispatchToProps = dispatch => ({
  addQuote: quote => dispatch(addQuote(quote)),
  removeQuote: quoteId => dispatch(removeQuote(quoteId)),
  upvoteQuote: quoteId => dispatch(upvoteQuote(quoteId)),
  downvoteQuote: quoteId => dispatch(downvoteQuote(quoteId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
