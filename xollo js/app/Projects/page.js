
import Section from '../components/cardSection.jsx';

export default function page() {
  const sections = [
    {
      title: 'Our Projects',
      cards: [{ title: 'xollo.learn' }, { title: 'xollo.learn' }, { title: 'xollo.learn' }]
    },
    {
      title: 'Top Art Section',
      cards: Array(6).fill({ title: 'xollo.learn' }) // 6 cards
    },
    {
      title: 'Others',
      cards: [{ title: 'xollo.learn' }, { title: 'xollo.learn' }, { title: 'xollo.learn' }]
    },
  ];

  return (
    <div className="container mx-auto px-4">
      {sections.map((section, index) => (
        <Section key={index} title={section.title} cards={section.cards} />
      ))}
    </div>
  );
}

