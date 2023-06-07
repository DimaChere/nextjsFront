// COMPONENTS
import Diagramm from "./Diagramm";

// ICONS
import graph1 from "../../../pictures/graphs/graph1.svg";
import graph2 from "../../../pictures/graphs/graph2.svg";
import linear from "../../../pictures/graphs/linear.svg";
import sircle1 from "../../../pictures/graphs/sircle1.svg";
import sircle2 from "../../../pictures/graphs/sircle2.svg";
import sircleGroup from "../../../pictures/graphs/sircleGroup.svg";

export default function Graphs() {
  return (
    <div className="relative h-[240px]">
      <div className="absolute top-32 left-[-15px] w-[25vw]">
        <Diagramm ssilka={graph1} itHasBorder={true} shortDesc="граф1" />
      </div>
      <div className="absolute top-[42px] right-[117px] w-[20%] z-10">
        <Diagramm ssilka={graph2} itHasBorder={true} shortDesc="граф2" />
      </div>
      <div className="absolute top-0 right-[10%] w-[20%] ">
        <Diagramm
          ssilka={sircle1}
          itHasBorder={true}
          shortDesc="круговая диаграмма1 "
        />
      </div>
      <div className="absolute top-[60px] left-6 w-[25%]">
        <Diagramm
          ssilka={sircle2}
          itHasBorder={false}
          shortDesc="круговая диаграмма 2 кружочки"
        />
      </div>
      <div className="absolute bottom-0 right-[-82px]">
        <Diagramm
          ssilka={sircleGroup}
          itHasBorder={false}
          shortDesc="группа круговых диаграмм"
        />
      </div>
      <div className="absolute top-[105px] left-[120px] w-[20%]">
        <Diagramm
          ssilka={linear}
          itHasBorder={true}
          shortDesc="линейная диаграмма"
        />
      </div>
    </div>
  );
}
