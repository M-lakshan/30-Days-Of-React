const Footer = (props) => {
  const { social, contact, email, location, website, copyright } = props.user;

  return (
    <footer id="contact_container">
      <section className="sec_left">
        {
          social.map((item,index) => {
            let { active, site, username, tag, link } = item;
            
            return (active) && <a 
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              href={link}>
                <i className={`fa-brands fa-${tag}`}></i>
                <span>{site}/{username}</span>
            </a>
          })
        }
      </section>
      <section className="sec_right">
        <div className="contact_holder">
          <p><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;{location}</p>
          <p><i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;{email}</p>
          <p><i className="fa-solid fa-phone-volume"></i>&nbsp;&nbsp;{contact}</p>
        </div>
        <div className="copyright_holder">
          <p className="desc">
            Lorem ipsum dolor sit anti omnis corrupti endis voluptatibus voluptatum pariatur, autem voluptatem.
          </p>
          <p className="website">{website}</p>
          <p className="copyright">Copyright <span>&copy;</span> {copyright}<sup>&reg;</sup> - all rights received.</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;