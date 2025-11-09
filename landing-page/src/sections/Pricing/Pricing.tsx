import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '../../components/Card';
import { Button } from '../../components/Button';
import './Pricing.scss';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$9',
    period: '/month',
    description: 'Perfect for individuals and small projects',
    features: [
      'Up to 5 projects',
      '10GB storage',
      'Basic analytics',
      'Email support',
      'Community access',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$29',
    period: '/month',
    description: 'Ideal for growing teams and businesses',
    features: [
      'Unlimited projects',
      '100GB storage',
      'Advanced analytics',
      'Priority email support',
      'Team collaboration',
      'API access',
    ],
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited everything',
      '1TB storage',
      'Custom analytics',
      '24/7 phone support',
      'Advanced security',
      'Dedicated account manager',
      'Custom integrations',
    ],
  },
];

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  contactSection?.scrollIntoView({ behavior: 'smooth' });
};

export const Pricing: React.FC = () => {
  return (
    <section className="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <div className="pricing__header">
          <h2 id="pricing-title" className="pricing__title">
            Simple, Transparent Pricing
          </h2>
          <p className="pricing__subtitle">
            Choose the plan that fits your needs. All plans include a 14-day
            free trial.
          </p>
        </div>
        <div className="pricing__grid">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              variant={plan.highlighted ? 'elevated' : 'outlined'}
              className={`pricing-card ${plan.highlighted ? 'pricing-card--highlighted' : ''}`}
            >
              {plan.highlighted && (
                <div className="pricing-card__badge">Most Popular</div>
              )}
              <CardHeader>
                <div className="pricing-card__header">
                  <h3 className="pricing-card__name">{plan.name}</h3>
                  <p className="pricing-card__description">
                    {plan.description}
                  </p>
                </div>
              </CardHeader>
              <CardBody>
                <div className="pricing-card__price">
                  <span className="pricing-card__amount">{plan.price}</span>
                  <span className="pricing-card__period">{plan.period}</span>
                </div>
                <ul className="pricing-card__features">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="pricing-card__feature">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="6 10 9 13 14 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter>
                <Button
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  fullWidth
                  onClick={scrollToContact}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
