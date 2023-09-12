import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // active_tab: "tab_tile_i",
      tab_classes: [
          ["tab_tile tab_tile_i active","About"],
          ["tab_tile tab_tile_ii pre_active","Progress"],
          ["tab_tile tab_tile_iii pre_deactive","Projects"],
          ["tab_tile tab_tile_iv deactive","Contact"],
          ["tab_tile theme_changer"]
        ],
      theme_changer: props.theme_change[1]
    }
  }

  tile_action = (target) => {
    let current_state = this.state.tab_classes;

    if(target.includes("theme_changer")) {
      if(current_state[4].includes("active")) {
        current_state[4].pop();
      } else {
        current_state[4].push("active");
      }

      this.setState({tab_classes: current_state});
      this.state.theme_changer(this.state.tab_classes[4].includes("active"));
    } else {
      let parse_arr = [];
      const arr_restructure = (val_i,val_ii,val_iii,val_iv) => {
        return [
          [`tab_tile tab_tile_i ${val_i}`,`About`],
          [`tab_tile tab_tile_ii ${val_ii}`,`Progress`],
          [`tab_tile tab_tile_iii ${val_iii}`,`Projects`],
          [`tab_tile tab_tile_iv ${val_iv}`,`Contact`],
          current_state[4]
        ];
      }

      switch(target[1]) {
        case "tab_tile_ii":
          parse_arr = arr_restructure("pre_active","active","pre_active","pre_deactive");
          break;
        case "tab_tile_iii":
          parse_arr = arr_restructure("pre_deactive","pre_active","active","pre_active");
          break;
        case "tab_tile_iv":
          parse_arr = arr_restructure("deactive","pre_deactive","pre_active","active");
          break;
        default:
          parse_arr = arr_restructure("active","pre_active","pre_deactive","deactive");
          break;
      }

      // this.setState({active_tab: target[1]});
      this.setState({tab_classes: parse_arr});
    }
  }

  render() {
    return (
      <header>
        {this.state.tab_classes.map((tab,index) => {
          return <div
            key={index}
            className={tab[0]}
            onClick={(e) => this.tile_action(Array.from(e.currentTarget.classList))}  
          >
            {(tab[0].split(" ")[1]!=="theme_changer") ? 
              <p>
                <a href={`#${tab[1].toLowerCase()}_container`}>{tab[1]}</a>
              </p>
            :
              <p>
                <i className={(tab.includes("active")) ? "fa-solid fa-sun" : "fa-solid fa-sun active"}></i>
                <i className={(tab.includes("active")) ? "fa-solid fa-moon active" : "fa-solid fa-moon"}></i>
              </p>
            }
          </div>
        })}
      </header>
    );
  }
}

export default Header;