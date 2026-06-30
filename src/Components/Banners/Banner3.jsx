import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Banner3 = () => {
    return (
        <div>
            <AwesomeSlider>
                <div> <img src="./green-car.jpg" /></div>
                <div><img src="./red-car.jpg" /></div>
                <div>3</div>
                <div><img src="./white car.jpg" /></div>
            </AwesomeSlider>
        </div>
    );
};

export default Banner3;