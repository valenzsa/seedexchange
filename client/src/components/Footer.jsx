const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      Copyright @{currentYear}. All Rights Reserved.
    </footer>
  )
}

export default Footer