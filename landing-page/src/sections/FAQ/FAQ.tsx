import React from 'react';
import { Accordion } from '../../components/Accordion';
import type { AccordionItemData } from '../../components/Accordion';
import './FAQ.scss';

const faqItems: AccordionItemData[] = [
  {
    id: 'faq-1',
    title: 'What is included in the free trial?',
    content: (
      <p>
        The 14-day free trial includes full access to all features of your
        selected plan. No credit card required to start. You can cancel anytime
        during the trial period without being charged.
      </p>
    ),
  },
  {
    id: 'faq-2',
    title: 'Can I change my plan later?',
    content: (
      <p>
        Yes! You can upgrade or downgrade your plan at any time. Changes will be
        reflected in your next billing cycle. If you upgrade mid-cycle, we'll
        prorate the cost difference.
      </p>
    ),
  },
  {
    id: 'faq-3',
    title: 'What payment methods do you accept?',
    content: (
      <p>
        We accept all major credit cards (Visa, MasterCard, American Express),
        PayPal, and bank transfers for Enterprise plans. All payments are
        processed securely through our payment partners.
      </p>
    ),
  },
  {
    id: 'faq-4',
    title: 'Is my data secure?',
    content: (
      <p>
        Absolutely. We use industry-standard encryption (SSL/TLS) for all data
        transmission and storage. Your data is backed up daily and stored in
        secure, geo-redundant data centers. We're also GDPR and SOC 2 compliant.
      </p>
    ),
  },
  {
    id: 'faq-5',
    title: 'Do you offer discounts for annual plans?',
    content: (
      <p>
        Yes! Save 20% when you choose annual billing instead of monthly. For
        Enterprise customers, we can create custom pricing packages based on
        your specific needs. Contact our sales team for more information.
      </p>
    ),
  },
  {
    id: 'faq-6',
    title: 'How do I cancel my subscription?',
    content: (
      <p>
        You can cancel your subscription at any time from your account settings.
        Your access will continue until the end of your current billing period.
        No cancellation fees or penalties apply.
      </p>
    ),
  },
];

export const FAQ: React.FC = () => {
  return (
    <section className="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="faq__header">
          <h2 id="faq-title" className="faq__title">
            Frequently Asked Questions
          </h2>
          <p className="faq__subtitle">
            Find answers to common questions about our platform and services
          </p>
        </div>
        <div className="faq__content">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
