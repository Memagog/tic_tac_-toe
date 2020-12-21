
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class List extends Component {
  constructor(props) {
      super(props);
      this.state = {
          filtered: []
      };
      this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
  this.setState({
    filtered: this.props.items
  });
}

componentWillReceiveProps(nextProps) {
  this.setState({
    filtered: nextProps.items
  });
}
  
  handleChange(e) {
     
  let currentList = [];
      
  let newList = [];
      
  if (e.target.value !== "") {
         
    currentList = this.props.items;
          
    newList = currentList.filter(item => {
              
      const lc = item.toLowerCase();
              
      const filter = e.target.value.toLowerCase();
              
      return lc.includes(filter);
    });
  } else {
          
    newList = this.props.items;
  }
      
  this.setState({
    filtered: newList
  });
}
  
  render() {
      return (
         <div>
           <form class="form-inline d-flex justify-content-center md-form form-sm">
                <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
                  aria-label="Search" onChange={this.handleChange} />
                    
                <i class="fas fa-search" aria-hidden="true"></i>
            </form>
        
        {this.state.filtered.map(item => (
                <div class="row row-cols-1 row-cols-md-2">
                      <div class="col mb-4">
                        <div class="card">
                        
                      <div class="card-body">
                          <h5 class="card-title">New Game</h5>
                        
                            
                              <p class="card-text"> <ul>
                                  
                                        
                                            {item} 
                                            <br></br>
                                            <button type="button" class="btn btn-dark"
                                                // className="delete"
                                                onClick={() => this.props.delete(item)}
                                                >
                                            <Link to="/game">Присоединиться к игре</Link></button>
                                        
                                
                                </ul></p>
                              
                            </div>
                      </div>                 
                </div>
                </div>
                
              
             ))}
          </div>
     

      )
  }
}

export default List;