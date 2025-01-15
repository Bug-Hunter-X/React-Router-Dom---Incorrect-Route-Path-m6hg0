```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Corrected route */}
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div>}
function About() { return <div>About</div>}
function ContactUs() { return <div>Contact Us</div>}

export default App;
```