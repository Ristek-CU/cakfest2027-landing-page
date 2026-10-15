import React from 'react';
import { MakeItPopSection } from '../components/MakeItPopSection';
import { TimelineSection } from '../components/TimelineSection';

export const HomePage: React.FC = () => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start py-8 sm:py-12 md:py-16">
      <MakeItPopSection />
      <TimelineSection />
    </main>
  );
};

export default HomePage;
