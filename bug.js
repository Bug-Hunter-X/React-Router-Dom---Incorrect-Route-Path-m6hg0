```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Incorrect route causing the issue */}
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div>}
function About() { return <div>About</div>}
function ContactUs() { return <div>Contact Us</div>}

export default App;
```