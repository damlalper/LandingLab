import React, { useState } from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import './Contact.scss';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
    validateField(field, formData[field as keyof FormData]);
  };

  const validateField = (field: string, value: string) => {
    let error: string | undefined;

    switch (field) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!validateEmail(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters';
        }
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));

    return !error;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      message: true,
    });

    if (validateForm()) {
      // Fake submit - show success modal
      setIsModalOpen(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setErrors({});
      setTouched({});
    }
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__header">
          <h2 id="contact-title" className="contact__title">
            Get in Touch
          </h2>
          <p className="contact__subtitle">
            Have a question or want to work together? We'd love to hear from
            you.
          </p>
        </div>
        <div className="contact__content">
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <Input
              type="text"
              name="name"
              id="name"
              label="Your Name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => handleBlur('name')}
              error={touched.name ? errors.name : undefined}
              required
              autoComplete="name"
            />

            <Input
              type="email"
              name="email"
              id="email"
              label="Email Address"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email')}
              error={touched.email ? errors.email : undefined}
              required
              autoComplete="email"
            />

            <div className="contact__form-group">
              <label htmlFor="message" className="contact__label">
                Message <span className="contact__required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                className={`contact__textarea ${touched.message && errors.message ? 'contact__textarea--error' : ''}`}
                placeholder="Tell us about your project..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                onBlur={() => handleBlur('message')}
                required
                aria-invalid={Boolean(touched.message && errors.message)}
                aria-describedby={
                  touched.message && errors.message
                    ? 'message-error'
                    : undefined
                }
              />
              {touched.message && errors.message && (
                <span
                  id="message-error"
                  className="contact__error"
                  role="alert"
                >
                  {errors.message}
                </span>
              )}
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Thank You!"
        size="sm"
      >
        <p>
          Your message has been sent successfully! We'll get back to you as
          soon as possible.
        </p>
      </Modal>
    </section>
  );
};

export default Contact;
