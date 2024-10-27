import React, { useRef, useEffect } from 'react';
import Card from './Card';
import './Work.css';

function Work() {
  const workCardsRef = useRef(null);

  useEffect(() => {
    const container = workCardsRef.current;

    const handleScroll = (event) => {
      // Prevent vertical scrolling and scroll horizontally instead
      event.preventDefault();
      
      container.scrollLeft += event.deltaY * 2;
    };

    // Add event listener to the container
    container.addEventListener('wheel', handleScroll);

    // Cleanup event listener on unmount
    return () => container.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <section className="work">
      <h2>Work</h2>
      <div className="work-cards" ref={workCardsRef}>
        <Card title="Project 1" description="Description for project 1" />
        <Card title="Project 2" description="Description for project 2" />
        <Card title="Project 3" description="Description for project 3" />
        <Card title="Project 4" description="Description for project 4" />
        <Card title="Project 5" description="Description for project 5" />
        <Card title="Project 6" description="Description for project 6" />
      </div>
    </section>
  );
}

export default Work;
