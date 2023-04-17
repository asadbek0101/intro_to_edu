import "./assets/home-text.scss"

export default function HomeText(){

    return (
        <div className="home-text-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-5 box">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <p className="item-1"> Ushbu <span className="fw-bold site">sayt</span> talabalar bilimlarini mazmun jihatdan zamon 
                                talablariga mos yangilab borish hamda ta’lim tizimidagi xorijiy tajribalarini 
                                o‘rganish masalalariga qaratilgan. Shuningdek dunyo reytingida yuqori o‘rinlardan 
                                joy olgan AQSH, Yevropa, Osiyo, Sharq hamda MDH mamlakatlari yetakchi oliy 
                                ta’lim muassasalaridagi innovatsion ta’lim jarayoni haqidagi zaruriy ma’lumotlar 
                                ham keltirilgan. Va boshqa ko'plab malumotlarga yo'nalishlar ham berilgan
                                </p>
                            </div>
                            <div className="carousel-item">
                            <p className="item-1">
                                Данное <span className="site">сайт</span> пособие охватывает вопросы изучения зарубежного 
                                опыта в системе образования и направлено на обновление знаний студентов в 
                                соответствии с современными требованиями. Также представлена 
                                необходимая информация об инновационном образователном процессе в 
                                ведущих высших учебных заведениях США, Европы, Азии, Востока, стран 
                                СНГ занимающих высокие места в мировых рейтингах.

                                 </p>
                            </div>
                            <div className="carousel-item">
                            <p className="item-1">
                                This <span className="site">site</span> covers the issues of studying foreign experience in the 
                                education system and is aimed at updating students ' knowledge in accordance with 
                                modern requirements. It also provides the necessary information about the 
                                Innovative Educational Process in the leading higher educational institutions of the 
                                United States, Europe, Asia, the East, and the CIS countries, which occupy high 
                                places in the world rankings.
                                </p>
                            </div>
                        </div>
                        {/* <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

