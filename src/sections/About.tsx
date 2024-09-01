import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import HTMLIcon from "@/assets/icons/html.svg";
import CSSIcon from "@/assets/icons/css.svg";
import JavaScriptIcon from "@/assets/icons/javascript.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import NodeIcon from "@/assets/icons/node.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import MongoDBIcon from "@/assets/icons/mongodb.svg";
import GithubIcon from "@/assets/icons/github.svg";
import PostgresIcon from "@/assets/icons/postgres.svg";

import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";

const toolboxItems = [
  {
    title: "HTML 5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS 3",
    iconType: CSSIcon,
  },
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "React JS",
    iconType: ReactIcon,
  },
  {
    title: "Next JS",
    iconType: NextIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindIcon,
  },
  {
    title: "Node JS",
    iconType: NodeIcon,
  },
  {
    title: "Express JS",
    iconType: ExpressIcon,
  },
  {
    title: "Mongo DB",
    iconType: MongoDBIcon,
  },
  {
    title: "PostgreSQL",
    iconType: PostgresIcon
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse into my world"
          description="Just in case, if you want to know about me."
        />
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My Tool Box"
              description="Explore the tools and technologies I use to craft these digital
                masterpieces."
              className=""
            />
            <ToolBoxItems items={toolboxItems}
            itemsWrapperClassName="animate-move-left [animation-duration:30s]"
            />
            <ToolBoxItems items={toolboxItems}
            itemsWrapperClassName="animate-move-right [animation-duration:20s]"/>
          </Card>
        </div>
      </div>
    </div>
  );
};
