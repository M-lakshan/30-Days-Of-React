import React from 'react';
import Country from './Country.js';

class Countries extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cntry_list: props.cntrys,
      current_layout: "grid",
    }
  }

  layout_update = (val) => this.setState({current_layout: val});
  cur_selection_update = (val) => this.props.selection(val);

  render() {
    return (
      <div className="subs_container">
        <div className="layout_options">
          <div>
            <p>Layout:&nbsp;</p>
            <button
              className={(this.state.current_layout==="grid") ? "layout_btn active" : "layout_btn"}
              id="grid" 
              onClick={(e) => this.layout_update(e.currentTarget.id)}>
              <abbr title="&nbsp;Grid Layout&nbsp;">
                <i className="fa-solid fa-grip"></i>
              </abbr>
            </button>
            <button
              className={(this.state.current_layout==="list") ? "layout_btn active" : "layout_btn"}
              id="list" 
              onClick={(e) => this.layout_update(e.currentTarget.id)}>
              <abbr title="&nbsp;List Layout&nbsp;">
                <i className="fa-solid fa-list-ul"></i>
              </abbr>
            </button>
          </div>
        </div>
        <div className={`countries ${this.state.current_layout}_view`} >{
          this.state.cntry_list.map((elm,index) => {
            return <Country
              details={elm} 
              key_tag={index}
              key={index}
              st_layout={this.state.current_layout}
              st_func_cur_selection={this.cur_selection_update}
            />
          })
        }</div>
      </div>
    );
  }
}

export default Countries;
