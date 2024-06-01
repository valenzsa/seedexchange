const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer mt-auto py-3 bg-light">
      Copyright @{currentYear}. All Rights Reserved.
    </footer>
  );
};

export default Footer;
