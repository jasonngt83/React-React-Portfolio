// const Contact = () => (
//     <section class="background">
//       <h2>Contact Me</h2>
//       <p>Phone: (123) 456-7890</p>
//       <p>Email: jasonngt83@gmail.com</p>
//       <p>LinkedIn: <a href="https://www.linkedin.com/in/jason-nguyen-940852349/">jason-nguyen-940852349</a></p>
//       <p>Github: <a href="https://github.com/jasonngt83/">jasonngt83</a></p>
//     </section>
//   );
  
//   export default Contact;
  

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (!value) newErrors[name] = 'This field is required';
    else if (name === 'email' && !/^\S+@\S+\.\S+$/.test(value)) {
      newErrors.email = 'Invalid email address';
    } else delete newErrors[name];

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <h2>Contact</h2>
      <form>
        <input name="name" placeholder="Name" onChange={handleChange} onBlur={handleBlur} />
        {errors.name && <span>{errors.name}</span>}
        <input name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} />
        {errors.email && <span>{errors.email}</span>}
        <textarea name="message" placeholder="Message" onChange={handleChange} onBlur={handleBlur} />
        {errors.message && <span>{errors.message}</span>}
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
