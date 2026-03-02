

const Head = () => {
  const phone = "+90555555555";
  const email = "bilgi@ilkadimrezonans.com";  
  const phoneClick = () => {
    window.location.href = `tel:${phone}`;
  };
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <>
      <section className='head '>
        <div className='container d_flex '>
          <i className='fa fa-phone' onClick={phoneClick}>
            <label>+90 (530) 893 9288</label>
          </i>
          <i className='fas fa-envelope' onClick={handleEmailClick}>
            <label>{email}</label>
          </i>
          </div>
      </section>
    </>
  );
};

export default Head;
