import React, { Component } from 'react';
import List from './List'
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: "",
          list: []
        };
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
      }
    
     addItem(e) {
        
        e.preventDefault();
        let list = this.state.list;
        const newItem = document.getElementById("addInput");
        const form = document.getElementById("addItemForm");
    
        
        if (newItem.value !== "") {
            list.push(newItem.value);
         
          this.setState({
            list: list
          });
         
          newItem.classList.remove("is-danger");
          form.reset();
        } else {
          newItem.classList.add("is-danger");
        }
      }
    
      removeItem(item){
        
        const list = this.state.list.slice();
       
        list.some((el, i)=>{ 
          if (el === item) {
           
            list.splice(i, 1);       
          }
          return true;
        });
     
        this.setState({
          list: list
        });
      }
    
      render(){
        return (
          <div className="content">
            <div className="container">
              <section className="section">
                        <List items={this.state.list} delete={this.removeItem}></List>
              </section>
              <hr />
              <section className="section">
                {/* <form className="form" id="addItemForm"> */}
                  {/* <input
                    type="text"
                    className="input"
                    id="addInput"
                    placeholder="Something that needs ot be done..."
                  /> */}
                  <form  className="form" id="addItemForm">
                       
                        <div class="form-group">
                          <label for="exampleInputPassword1">Создайте свою игру</label>
                         
                        </div>
                        
                        <div class="form-group">
                          <label for="exampleInputEmail1">Теги к игре</label>
                          <input type="text" class="form-control" id="addInput"  aria-describedby="emailHelp"/>
                          <small id="emailHelp" class="form-text text-muted">Пишите теги через пробел</small>
                        </div>
                    
                        <button type="button" class="btn btn-primary"  onClick={this.addItem}>
                          Создать игру
                        </button>
                </form>
              </section>
            </div>
          </div>
        );
      }
    }
    
    
    
  export default Home;