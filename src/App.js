import React from 'react';
let quotes = {
    0 : {'text': 'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.',
  'author': 'Lao Tzu'},
    1: {'text': 'Simplicity, patience, compassion. These three are your greatest treasures. Simple in actions and thoughts, you return to the source of being. Patient with both friends and enemies, you accord with the way things are. Compassionate toward yourself, you reconcile all beings in the world.',
  'author': 'Lao Tzu'},
    2: {'text': 'The journey of a thousand miles begins with a single step.',
  'author': 'Lao Tzu'},
    3: {'text': 'Knowing others is intelligence; knowing yourself is true wisdom. Mastering others is strength; mastering yourself is true power.',
  'author': 'Lao Tzu'},
    4: {'text': 'Life is a series of natural and spontaneous changes. Don\'t resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.',
  'author': 'Lao Tzu'},
   5: {'text': 'A good traveler has no fixed plans and is not intent on arriving.',
  'author': 'Lao Tzu'},
   6: {'text': 'Those who know do not speak. Those who speak do not know.',
  'author': 'Lao Tzu'},
   7: {'text': 'When you are content to be simply yourself and don\'t compare or compete, everyone will respect you.',
  'author': 'Lao Tzu'},
   8: {'text': 'When you are content to be simply yourself and don\'t compare or compete, everyone will respect you.',
  'author': 'Lao Tzu'},
   9: {'text': 'The truth is not always beautiful, nor beautiful words the truth.',
  'author': 'Lao Tzu'}
}
    
class Machine extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       index: Math.floor(Math.random() * 10)
     };
     this.handleClick = this.handleClick.bind(this);
   }
  
   handleClick = () => {
     let index = Math.floor(Math.random() * 10)
     while (index === this.state.index) {
       index = Math.floor(Math.random() * 10)
     }
     this.setState({
       index: index
     })
   }
    
    
   render() {
     let index = this.state.index;
     let quote = quotes[index];
     return (
       <div id="quote-box columns is-vcentered">
         <div className="column">
         <div className="card-content">
           <div className="content is-medium">
             <p id="text">
             {quote.text}
             </p>
           </div>
           <div className="card-footer">
            <div className="card-footer-item">
            <p id="author" className="card-footer-item">
             --A<i class="fab fa-twitter"></i>uthor {quote.author}
            </p>
            </div>
            <div className="card-footer-item">
              <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">Tweet Quote</a>
            </div>
            <div className="card-footer-item">
              <button id="new-quote" className="button is-primary" onClick={this.handleClick}>New Quote</button>
            </div>
          </div>
         </div>
         </div>
       </div>
     )
   }
}

export default Machine;
