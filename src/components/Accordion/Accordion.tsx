import React, { useState } from 'react';
import './Accordion.scss';

export interface AccordionItemData {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  defaultOpenItems?: string[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenItems = [],
  className = '',
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set(defaultOpenItems)
  );

  const toggleItem = (itemId: string) => {
    setOpenItems((prevOpenItems) => {
      const newOpenItems = new Set(prevOpenItems);

      if (newOpenItems.has(itemId)) {
        newOpenItems.delete(itemId);
      } else {
        if (!allowMultiple) {
          newOpenItems.clear();
        }
        newOpenItems.add(itemId);
      }

      return newOpenItems;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent, itemId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(itemId);
    }
  };

  return (
    <div className={`accordion ${className}`}>
      {items.map((item) => {
        const isOpen = openItems.has(item.id);

        return (
          <div key={item.id} className="accordion__item">
            <button
              className={`accordion__header ${isOpen ? 'accordion__header--active' : ''}`}
              onClick={() => toggleItem(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              type="button"
            >
              <span className="accordion__title">{item.title}</span>
              <span
                className={`accordion__icon ${isOpen ? 'accordion__icon--rotated' : ''}`}
                aria-hidden="true"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            <div
              id={`accordion-content-${item.id}`}
              className={`accordion__content ${isOpen ? 'accordion__content--open' : ''}`}
              aria-hidden={!isOpen}
            >
              <div className="accordion__body">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
