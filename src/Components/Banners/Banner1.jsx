import Flicking, { } from "@egjs/react-flicking";

const Banner1 = () => {
    return (
        <div>
            <Flicking
  viewportTag="div"
  cameraTag="div"
  cameraClass=""
  renderOnSameKey={false}
  align="center"
  onMove={(e) => {}}
  onWillChange={(e) => {}}
  horizontal={true}
  circular={true}
>
  <div>panel 0</div>
  <div>panel 1</div>
  <div>panel 2</div>
</Flicking>
        </div>
    );
};

export default Banner1;