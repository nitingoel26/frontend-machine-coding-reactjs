import Accordion from "./Accordion";

export type AccordionType = {
  id: number;
  title: string;
  content: string;
};

const dummyData: AccordionType[] = [
  {
    id: 1,
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    title: "What is an Accordion?",
    content:
      "An accordion is a UI pattern used to toggle visibility of large sections of content.",
  },
  {
    id: 3,
    title: "Why use JSON data?",
    content:
      "Using JSON makes it easy to map and dynamically render UI components.",
  },
];
const AccordionComponent = () => {
  return dummyData.map((data) => {
    return (
      <Accordion key={data?.id} title={data?.title} content={data?.content} />
    );
  });
};

export default AccordionComponent;
