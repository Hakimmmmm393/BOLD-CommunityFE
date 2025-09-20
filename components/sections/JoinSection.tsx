
import React from 'react';
import AnimatedSection from '../AnimatedSection';
import Button from '../ui/Button';
import { DISCORD_LINK } from '../../constants';

const JoinSection: React.FC = () => {
  return (
    <AnimatedSection id="join" className="bg-zinc-950">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold sm:text-5xl">Join the Community</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Ready to be a part of BOLD? Join our Discord server to connect with other players, participate in events, and have fun!
        </p>
        <div className="mt-8">
          <Button as="a" href={DISCORD_LINK} target="_blank" rel="noopener noreferrer">
            Become a BOLD Member
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default JoinSection;
