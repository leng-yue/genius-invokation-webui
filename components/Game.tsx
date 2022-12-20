import templateTable from "public/images/tables/template.jpeg";
import liyueTable from "public/images/tables/liyue.png";
import mondstadtTable from "public/images/tables/mondstadt.png";
import inazumaTable from "public/images/tables/inazuma.png";
import defaultTable from "public/images/tables/default.png";

type GameProps = {
  backgroundImage: 'template' | 'liyue' | 'mondstadt' | 'inazuma' | 'default';
};

const ALL_TABLES = {
  template: templateTable,
  liyue: liyueTable,
  mondstadt: mondstadtTable,
  inazuma: inazumaTable,
  default: defaultTable,
};

export default function Game({ backgroundImage }: GameProps) {
  if (!backgroundImage) {
    backgroundImage = "template";
  }

  if (!(backgroundImage in ALL_TABLES)) {
    backgroundImage = "default";
  }

  return (
    <div
      style={{
        border: "1px solid black",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${ALL_TABLES[backgroundImage].src})`,
        backgroundSize: "contain",
      }}
    >
      {/* Test */}
    </div>
  );
}
