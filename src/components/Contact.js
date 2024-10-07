// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import emailjs from 'emailjs-com';

// const EmailForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const serviceId = 'service_64nej07';
//     const templateId = 'template_yfdwbfu';
//     const publicKey = 'jRSzTDEIr0dnFS9ol';

//     const templateParams = {
//       form_name: name,
//       form_email: email,
//       to_name: 'Recipient', // Add recipient if needed
//       message: message,
//     };

//     // Sending email using EmailJS
//     emailjs
//       .send(serviceId, templateId, templateParams, publicKey)
//       .then(
//         (response) => {
//           console.log('SUCCESS!', response.status, response.text);
//           setSuccessMessage('Your message has been sent successfully!');
//           setErrorMessage(''); // Clear any previous errors
//         },
//         (error) => {
//           console.error('FAILED...', error);
//           setErrorMessage('Failed to send the message. Please try again.');
//           setSuccessMessage(''); // Clear any previous success messages
//         }
//       );

//     // Clear form after submission
//     setName('');
//     setEmail('');
//     setMessage('');
//   };

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === 'name') setName(value);
//     if (name === 'email') setEmail(value);
//     if (name === 'message') setMessage(value);
//   };
  

//   return (
//     <section id="contact" className="p-10 bg-gray-100">
//       <motion.h2
//         className="text-4xl font-bold text-center mb-8"
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1.2 }}
//       >
//         Contact Me
//       </motion.h2>
//       <motion.div
//         className="flex justify-center"
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.8 }}
//       >
//         <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block mb-2 text-lg">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 text-lg">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 text-lg">Message</label>
//             <textarea
//               name="message"
//               value={message}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
//           >
//             Send
//           </button>

//           {/* Success/Error Messages */}
//           {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
//           {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}
//         </form>
//       </motion.div>
//     </section>
//   );
// };

// export default EmailForm;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_64nej07';
    const templateId = 'template_yfdwbfu';
    const publicKey = 'jRSzTDEIr0dnFS9ol';

    const templateParams = {
      form_name: name,
      form_email: email,
      to_name: 'Recipient', // Add recipient if needed
      message: message,
      reply_to: email, // Sender's email as reply-to
    };

    // Sending email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSuccessMessage('Your message has been sent successfully!');
          setErrorMessage(''); // Clear any previous errors
        },
        (error) => {
          console.error('FAILED...', error);
          setErrorMessage('Failed to send the message. Please try again.');
          setSuccessMessage(''); // Clear any previous success messages
        }
      );

    // Clear form after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'message') setMessage(value);
  };

  return (
    <section id="contact" className="p-10 bg-gray-100">
      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Contact Me
      </motion.h2>
      <motion.div
        className="flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-lg">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg">Message</label>
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Send
          </button>

          {/* Success/Error Messages */}
          {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
          {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}
        </form>
      </motion.div>
    </section>
  );
};

export default EmailForm;
