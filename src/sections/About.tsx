import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";
import { toolboxItems } from "@/constants";

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
