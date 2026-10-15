import { useState } from 'react';
import { FAQ_ITEMS } from '../lib/data/faqData';

export function FaqSection() {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id ?? '');

  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-title">
      <div className="faq-section__heading">
        <h2 id="faq-title">Frequently Asked Questions (FAQ)</h2>
        <p>Pertanyaan yang paling sering diajukan peserta seputar registrasi, berkas, regulasi, dan akomodasi.</p>
      </div>

      <div className="faq-section__card">
        {FAQ_ITEMS.map((item) => {
          const isOpen = item.id === openId;
          const answerId = `faq-answer-${item.id}`;
          return (
            <div key={item.id} className={`faq-item${isOpen ? ' is-open' : ''}`}>
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenId(isOpen ? '' : item.id)}
                >
                  <span>{item.question}</span>
                  <span className="faq-item__icon" aria-hidden="true">+</span>
                </button>
              </h3>
              <div id={answerId} className="faq-item__answer" hidden={!isOpen}>
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FaqSection;
