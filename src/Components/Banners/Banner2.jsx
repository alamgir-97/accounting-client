import { Carousel } from 'react-responsive-carousel';

const Banner2 = () => {
    return (
        <div>
                <Carousel>
                <div>
                    <img src="./green-car.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="./red-car.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="./white car.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner2;