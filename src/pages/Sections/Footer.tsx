const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-white text-center py-8">
      <p>
        <a href="/" className="text-secondary">
          Techiden{" "}
        </a>
        © {year} All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
