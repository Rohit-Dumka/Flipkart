function Footer() {
    return (
      <div style={{ backgroundColor: '#000', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <div>
            <h3>Information</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h3>Customer Service</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>Help/FAQs</li>
              <li>Returns</li>
              <li>Shipping</li>
            </ul>
          </div>
          <div>
            <h3>Connect With Us</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <p>&copy; 2024 Flipkart. All Rights Reserved.</p>
        </div>
      </div>
    );
  }
  
  export default Footer;
  