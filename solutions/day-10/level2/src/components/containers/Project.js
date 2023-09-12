const Project = (props) => {
  const { title, language, desc, preview, link } = props.project;

  let loremIpusm = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil excepturi alias nam ab atque sunt quisquam voluptatibus laboriosam autem minus reprehenderit accusamus, ut inventore nulla?"
  let description = (desc!=='') ? desc : loremIpusm; 

  return (<div className="prj">
    <div className="preview">
      <div className="img_holder">
        <img src={preview} alt="project_preview" />
        <div className="overlay"></div>
      </div>
      <h4>{title}</h4>
      {(language.length>=1) && <p className="languages">
        {"[ "+language.join(", ")+" ]"}
      </p>}
      <button onClick={(e) => {
        e.currentTarget.parentElement.classList.toggle("deactive");
        e.currentTarget.parentElement.nextElementSibling.classList.toggle("active");
        e.currentTarget.children[0].classList.toggle("fa-expand");
        e.currentTarget.children[0].classList.toggle("fa-compress");
      }}>
        <i className="fa-solid fa-expand"></i>
      </button>
    </div>
    <div className="view">
      <p className="desc">{description}</p>
      <p className="link">
        <a href={link} target="_blank" rel="noreferrer" onClick={(e) => {
          return (e.currentTarget.href.includes('#')) && e.preventDefault();
        }}>
          <abbr title="&nsbp;more...&nsbsp;"></abbr>
          <i className="fa-solid fa-paperclip"></i>
        </a>
      </p>
    </div>
  </div>);
}

export default Project;