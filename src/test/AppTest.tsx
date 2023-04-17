import Slider from "./component/Slider";
import SliderItem from "./component/SliderItem";

export default function AppTest(){
    return (
        <div className="container">
            <Slider>
                <SliderItem>
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title 1</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                    </div>
                </SliderItem>
                <SliderItem>
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title 2</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                    </div>
                </SliderItem>
                <SliderItem>
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title 3</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                    </div>
                </SliderItem>
                <SliderItem>
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title 4</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                    </div>
                </SliderItem>
                <SliderItem>
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title 5</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                    </div>
                </SliderItem>
                <SliderItem>
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title 6</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                    </div>
                </SliderItem>
            </Slider>
        </div>
    )
}