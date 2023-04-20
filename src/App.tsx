import { useState } from "react";
import { ToastContainer } from "react-toastify";
import AppContainer from "./containers/AppContainer";
import 'react-toastify/dist/ReactToastify.css';
import AppDashboard, { AppDashboardMenuProps } from "./components/app/AppDashboard";
import HTMLContent from "./components/app/HTMLContnent";

function App() {

  const [ tab, setTab ] = useState("1")

  const menu: AppDashboardMenuProps[] = [
    {
      title: "Matematika",
      id: "1"
    },
    {
      title: "Ona tili",
      id: "2"
    },
    {
      title: "Kimyo",
      id: "3"
    },
    {
      title: "Dasturlash",
      id: "4"
    }
  ]

  const contents = [
    {
      id: 1,
      menuId: "2",
      content: `<p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nobis culpa blanditiis, nostrum, in aspernatur similique dignissimos laudantium ex quidem numquam unde error placeat adipisci eaque voluptas porro mollitia labore nihil possimus illum ratione excepturi! In, eveniet! Totam numquam perferendis quasi porro dolorum modi! Quos quia veritatis eligendi fugit voluptas sunt. Dolores, hic. Ipsam possimus error alias incidunt veniam sequi, perferendis eaque mollitia vero architecto doloribus consequatur at eligendi reprehenderit repellendus autem laudantium illum, voluptas iusto quam asperiores unde. Cumque velit quisquam autem nobis aut tempora eligendi, facere odio omnis earum consequatur delectus sapiente consectetur iure nesciunt incidunt temporibus nemo quibusdam rem? Laborum impedit delectus sit odit dolorum vel necessitatibus fuga, magni quo sed earum id nobis nesciunt eveniet distinctio, animi accusamus ipsam deserunt quae similique commodi tenetur alias minus! Voluptate exercitationem laborum incidunt rem similique aliquid reprehenderit itaque voluptatem quasi animi obcaecati repellendus, nobis error nulla et! Optio quas odio magni omnis ipsum facere ducimus cum sit sunt. Numquam perferendis libero accusantium, alias suscipit vero aperiam illo voluptatem repudiandae voluptatum at ad. Amet, consequatur commodi! Atque, eveniet cumque quae fuga accusamus beatae itaque aut eos pariatur cupiditate placeat harum repellat ipsa minima nulla, nihil mollitia corrupti quas, quidem consequuntur molestiae unde impedit vitae! Facere, illo. Temporibus ea quos itaque accusamus voluptas porro commodi sunt id, quisquam officia! Praesentium atque veniam tempora voluptas, a veritatis, consequatur, hic delectus ea incidunt maiores vel? Debitis ipsam enim suscipit fugiat omnis ea tenetur tempora adipisci velit. Cupiditate corporis placeat aut nihil iste itaque magnam in autem, eveniet fugit! Molestias, mollitia atque perspiciatis, enim nam nulla corrupti eos adipisci impedit blanditiis, itaque obcaecati! Nisi repellat ad optio hic consequatur incidunt quaerat earum, ducimus numquam rem fuga ipsa ullam et tempora laboriosam sunt quae quisquam quam repellendus a? Et nostrum, nihil suscipit accusantium facilis eum asperiores? Totam rerum cum quasi, consequuntur impedit mollitia accusantium, laudantium praesentium quam eaque nesciunt aperiam molestias iste odit soluta iure. Nemo, totam. Id voluptate voluptates perferendis ad dolor, deleniti aspernatur repellendus impedit. Necessitatibus, explicabo beatae magni sed fugit officia corporis quia inventore consequuntur, sequi veniam, officiis aspernatur similique enim non ipsum nam dignissimos esse accusantium nemo distinctio ipsam obcaecati dolor nulla. Omnis in dolore, incidunt ipsa velit fuga fugiat! Accusantium beatae magnam accusamus esse molestiae numquam libero deleniti. Quibusdam doloremque labore illo accusamus veritatis qui cumque maxime provident officiis! Voluptatibus dicta fugiat quam nisi provident expedita quibusdam, veniam consequatur velit enim non quasi quisquam modi explicabo minus perferendis nemo ipsum maxime necessitatibus dolorum quos, libero, odit deleniti! Reiciendis sunt amet officia nostrum voluptates ipsa beatae non tenetur laboriosam quaerat dolores quidem dicta eius quia est quod vitae aperiam nemo officiis aspernatur, aliquam alias porro. Facilis sequi ea quas dolorum, hic enim totam pariatur? Vel dolores incidunt suscipit quas asperiores ex aliquam, deserunt tenetur assumenda natus facere illo soluta architecto quasi tempora unde excepturi hic dignissimos officia magnam at. Possimus, esse earum, at aliquam suscipit porro praesentium repudiandae libero pariatur nam, nisi eum quam asperiores perferendis veniam enim architecto eligendi et id? Quo at quis mollitia quia consequuntur ea incidunt nemo accusantium repellat et provident atque eos, adipisci corrupti laudantium assumenda molestias beatae sunt esse omnis nisi nam ducimus. Ab aut ex expedita recusandae sunt error culpa, itaque quisquam nulla voluptatem veritatis, beatae tempore accusantium voluptatibus adipisci, cumque illo quasi libero corrupti laudantium cum ipsam? Necessitatibus enim ex pariatur aut eum temporibus quisquam cumque omnis recusandae illo obcaecati itaque laudantium expedita possimus, deserunt numquam! Molestias voluptate, obcaecati incidunt dolor autem a alias quis dolores vero pariatur magnam nemo fugit ratione porro minima ex in nihil voluptates, aut soluta repellendus unde quos. Neque dolorum quae esse blanditiis delectus perferendis similique labore id quis sequi tempore, explicabo assumenda fugiat sit est animi minima repellendus! Molestiae cupiditate qui, provident similique quidem consequatur ea eos ab dolorem sit saepe asperiores facilis exercitationem? Excepturi nesciunt vitae quo voluptatum, autem ipsum ad reprehenderit blanditiis quibusdam optio accusamus et earum ex quos placeat rerum harum est dicta voluptate, temporibus fugit! Ut magnam at aut ratione accusantium! Veritatis, minima ut esse perferendis eos qui quaerat voluptatibus optio dolorem laudantium nobis nihil, incidunt aperiam corrupti harum, itaque provident veniam omnis nesciunt possimus animi doloribus assumenda amet vel! Vel ad iure iste non natus quasi? Labore non aliquam quas magnam incidunt blanditiis. Veritatis accusantium, distinctio rerum doloribus voluptatibus porro nemo, expedita minus tempore facilis tenetur. Velit veniam nam molestiae adipisci, reprehenderit, corrupti commodi labore ab eum harum ratione quod accusamus totam sunt tenetur repellendus debitis corporis mollitia nostrum rerum, voluptatibus aliquam. Quam maiores a unde qui nihil aliquam eligendi fuga exercitationem cum dolore distinctio quod libero dolor perferendis corrupti explicabo animi cumque dolores mollitia doloremque vitae, repellendus natus at. Tempora repudiandae quaerat maxime quod, nobis, odio aliquid blanditiis hic repellendus perferendis deserunt eligendi cumque at rem sapiente odit velit? Necessitatibus, numquam, velit eligendi labore hic incidunt magnam doloremque nisi ipsam reiciendis tempora dicta repudiandae facere vel. Voluptatibus ipsam deleniti iste exercitationem, consectetur omnis numquam nulla qui magnam fugiat dolores ducimus, similique aspernatur illum ea ipsa at quasi aut amet? Consequatur corrupti natus, in amet quasi libero voluptatibus labore rerum earum distinctio odio! Consectetur deserunt reprehenderit molestiae laudantium! Possimus doloribus hic voluptatibus doloremque deleniti quis dolor temporibus distinctio est explicabo accusantium aut, non iste earum neque facilis impedit autem laborum facere? A explicabo omnis eligendi commodi! Est recusandae ex placeat dolorem! Laborum sapiente consequatur eligendi provident eum error totam ex reprehenderit dicta ad, quasi, cupiditate tempore dolor obcaecati molestias distinctio modi aliquid asperiores nulla expedita a, debitis minima accusantium iste. Totam minima ea, eveniet temporibus quis quia debitis, molestias rem nisi dignissimos labore rerum modi quas consectetur quaerat inventore eum possimus. Quia totam nemo, accusamus porro cum eligendi enim, libero minima molestiae odio ullam rerum voluptate praesentium ipsam, voluptatibus mollitia quae. Ut deleniti, nihil aperiam adipisci aliquam laborum porro rerum cumque blanditiis eaque consequuntur labore est animi, qui voluptatibus quam perferendis eveniet voluptate tempore rem vitae! Mollitia, animi. Totam magni laborum nam quasi nostrum fugiat dolorem, exercitationem voluptates tenetur repellat soluta perspiciatis.
    </p>` 
    }
  ]

  return (
    <>
      <AppContainer/>
      <ToastContainer/>
      {/* <AppDashboard
        activeTab={tab}
        menu={menu}
        onChangeTab={(id: string)=>setTab(id)}
        >
          <HTMLContent htmlContent={contents[0].content}/>
          
      </AppDashboard> */}
    </>
  );
}

// blue-color #073E75
// gold-color #FFC409

export default App;
