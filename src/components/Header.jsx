import reactLogo from "../assets/hijab-2.jpg";

const Header = () => {
  return (
    <>
      <div className="container text-center">
        <img src={reactLogo} className="hijab--logo" />
        <h3 className="text-white text-center pt-3">Maryam Ghaffar</h3>
        <p className="paragraph text-white text-center lead">
          Frontend Developer
        </p>
        <p className="paragraph text-white text-center lead">
          Maryamghaffar designs
        </p>
      </div>
      <div class="flex text-center">
        <button type="button" className="btn btn-light mx-4">
          <a href="#" class="i bi bi-envelope text-dark mx-1"></a> Email
        </button>
        <button type="button" className="btn btn-primary">
          <a href="#" class="i bi bi-linkedin text-dark mx-1"></a> Linkedin
        </button>
      </div>
    </>
  );
};

export default Header;
