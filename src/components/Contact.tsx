import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('Sending...');

    try {
      const formEl = event.currentTarget;
      const formData = new FormData(formEl);

      // ✅ اجلب المفتاح من البيئة وتأكد من خلوه من المسافات
      const accessKey = (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined)?.trim();

      if (!accessKey) {
        setResult('');
        toast.error('Missing Web3Forms Access Key. Define VITE_WEB3FORMS_KEY in your .env and redeploy.');
        return;
      }

      // إجبارياً
      formData.append('access_key', accessKey);
      // اختياري لكن مفيد في لوحة Web3Forms والبريد
      formData.append('subject', 'New message from Jedra Contact Form');
      formData.append('from_name', 'Jedra Website');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Submitted Successfully');
        toast.success('Form submitted successfully!');
        formEl.reset();
        // ارجاع الزر للنص الافتراضي بعد ثوانٍ
        setTimeout(() => setResult(''), 2000);
      } else {
        console.log('Web3Forms Error:', data);
        toast.error(data.message || 'Submission failed');
        setResult('');
      }
    } catch (err) {
      console.error(err);
      toast.error('Network error. Please try again.');
      setResult('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact <span className="underline underline-offset-4 decoration-1 under font-light">With Us</span>
      </h1>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-20">
        {/* ✅ honeypot لتقليل السبام */}
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="flex flex-col gap-4">
          <label className="w-full text-left">
            Your Name
            <input
              type="text"
              name="name"
              className="border border-gray-300 rounded px-4 py-3 w-full mt-2"
              placeholder="Enter your name"
              required
            />
          </label>
          <label className="w-full text-left">
            Your Email
            <input
              type="email"
              name="email"
              className="border border-gray-300 rounded px-4 py-3 w-full mt-2"
              placeholder="Enter your Email"
              required
            />
          </label>
          <label className="w-full text-left">
            Phone Number
            <input
              type="tel"
              name="phone"
              className="border border-gray-300 rounded px-4 py-3 w-full mt-2"
              placeholder="+9665XXXXXXXX"
              inputMode="tel"
            />
          </label>
        </div>

        <label className="text-left my-6 block">
          Message
          <textarea
            name="message"
            className="w-full border border-gray-300 rounded px-4 py-3 mt-2 h-48 resize-none"
            rows={5}
            placeholder="Type your message here"
            required
          />
        </label>

        <button
          type="submit"
          className="bg-gray-900 text-white px-8 py-2 rounded shadow hover:opacity-90 transition"
        >
          {result ? result : 'Send Message'}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
