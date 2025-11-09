import React from 'react';
import { Card, CardBody } from '../../components/Card';
import './Features.scss';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    id: '1',
    title: 'Lightning Fast',
    description:
      'Experience blazing fast performance with our optimized infrastructure and cutting-edge technology.',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: '2',
    title: 'Secure by Default',
    description:
      'Built with security in mind. Your data is encrypted and protected with industry-standard protocols.',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: '3',
    title: 'Easy Integration',
    description:
      'Seamlessly integrate with your existing tools and workflows. Get started in minutes, not hours.',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    id: '4',
    title: '24/7 Support',
    description:
      'Our dedicated support team is always here to help you succeed, whenever you need assistance.',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: '5',
    title: 'Scalable Solution',
    description:
      'Grow without limits. Our platform scales effortlessly to meet your expanding business needs.',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
  },
  {
    id: '6',
    title: 'Analytics & Insights',
    description:
      'Make data-driven decisions with comprehensive analytics and real-time insights into your metrics.',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    ),
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="features" aria-labelledby="features-title">
      <div className="container">
        <div className="features__header">
          <h2 id="features-title" className="features__title">
            Powerful Features
          </h2>
          <p className="features__subtitle">
            Everything you need to build, deploy, and scale your applications
          </p>
        </div>
        <div className="features__grid">
          {features.map((feature) => (
            <Card key={feature.id} variant="elevated" hoverable>
              <CardBody>
                <div className="feature-card">
                  <div className="feature-card__icon" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <h3 className="feature-card__title">{feature.title}</h3>
                  <p className="feature-card__description">
                    {feature.description}
                  </p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
