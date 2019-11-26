
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').del()
    .then(function () {
      // Inserts seed entries
      return knex("sales").insert([
        {
          title: "Yard Sale",
          details:
            "Exercitation Lorem adipisicing adipisicing aute. Tempor voluptate Lorem dolor Lorem aliquip ex dolor id duis dolor ipsum laboris. Voluptate ex reprehenderit ex aliquip ut do duis. Non amet dolore esse commodo nisi. Cillum cupidatat cillum ut officia proident irure voluptate aliqua culpa aliqua. Voluptate eiusmod labore minim sit ex nulla excepteur velit ea qui cillum. Qui exercitation ad sunt ipsum elit exercitation deserunt commodo laborum sunt cupidatat nisi esse.\r\n",
          user_id: 1,
          location: "599 Beard Street, Gratton, Palau, 4844",
          date_time: "2015-06-25T03:52:03 +07:00"
        },
        {
          title: "Yard Sale",
          details:
            "Exercitation id minim duis dolore eu commodo velit culpa aute Lorem labore. Cupidatat est anim aute commodo. Cillum ullamco elit non mollit deserunt sunt nisi dolor nostrud officia.\r\n",
          user_id: 2,
          location:
            "524 Sunnyside Court, Fowlerville, Federated States Of Micronesia, 8787",
          date_time: "2015-04-22T09:04:00 +07:00"
        },
        {
          title: "Garage Sale",
          details:
            "Laborum id qui non pariatur magna eu nulla culpa anim elit dolor veniam. Reprehenderit eiusmod pariatur mollit nostrud nostrud. Ipsum sunt deserunt dolore in fugiat consequat in id consectetur.\r\n",
          user_id: 4,
          location: "329 Gain Court, Herald, North Carolina, 9445",
          date_time: "2019-04-20T03:46:52 +07:00"
        },
        {
          title: "Yard Sale",
          details:
            "Reprehenderit culpa cillum sint non dolore sunt ut anim cillum nisi labore ad deserunt. Duis et laborum consectetur laboris in consectetur enim laborum est nisi. Reprehenderit voluptate aliqua quis qui ut cupidatat ad non cupidatat ut in cillum laborum. In cupidatat duis magna consectetur nostrud. Est consequat nisi dolor velit. Sint sunt dolore veniam occaecat Lorem eu.\r\n",
          user_id: 4,
          location: "380 Cypress Court, Cecilia, Kentucky, 2922",
          date_time: "2015-07-10T08:50:59 +07:00"
        },
        {
          title: "Yard Sale",
          details:
            "Elit pariatur occaecat consequat incididunt aliqua elit velit minim elit consectetur qui. Esse enim voluptate duis velit veniam. Cillum voluptate nisi occaecat pariatur sit adipisicing ullamco ipsum id. Magna nulla aliqua aliquip culpa magna quis labore sit laboris culpa occaecat. Irure elit officia occaecat ex. Incididunt esse irure eiusmod nostrud occaecat laboris incididunt ex occaecat in ipsum magna amet qui. Ea quis pariatur labore labore mollit ullamco nisi.\r\n",
          user_id: 4,
          location: "905 Keap Street, Loomis, Puerto Rico, 1911",
          date_time: "2019-06-08T03:21:27 +07:00"
        },
        {
          title: "Garage Sale",
          details:
            "Minim fugiat fugiat laboris cillum reprehenderit aute mollit aliqua id laborum ex. Quis dolor consectetur et non enim duis aute laborum est fugiat cupidatat excepteur. Amet sint magna laborum in esse commodo laboris id culpa elit veniam labore eiusmod. Nostrud reprehenderit aliqua culpa aliquip irure magna. Consequat occaecat dolor sint sunt. Culpa ut ex ad do ut pariatur. Nulla fugiat cillum sint minim excepteur cillum.\r\n",
          user_id: 2,
          location: "790 Bedford Avenue, Nelson, Georgia, 5656",
          date_time: "2016-09-19T11:37:04 +07:00"
        },
        {
          title: "Yard Sale",
          details:
            "Eu cupidatat consectetur ea ipsum deserunt ea laboris incididunt. Velit laborum est enim deserunt irure exercitation in esse do ullamco minim eu. Dolore sunt minim Lorem elit esse excepteur. Eu sit ad pariatur non nostrud amet quis exercitation do ipsum. Est ullamco ad in non enim eiusmod. In qui incididunt minim aute Lorem dolore est veniam aliquip. Qui velit ullamco laboris cillum in aliqua officia et amet aliqua pariatur commodo labore elit.\r\n",
          user_id: 2,
          location: "784 Elliott Walk, Kerby, Virgin Islands, 7712",
          date_time: "2018-05-16T10:01:01 +07:00"
        },
        {
          title: "Estate Sale",
          details:
            "Sint anim fugiat cillum aliqua in ea fugiat sunt voluptate aliqua cupidatat laboris consectetur. Ullamco nisi exercitation consectetur elit aliqua in id proident dolore duis. Laboris voluptate in pariatur incididunt consectetur magna. Reprehenderit excepteur culpa et irure cupidatat occaecat ut laboris ut magna laboris sint. Anim veniam incididunt exercitation amet. Laboris nostrud deserunt quis veniam cillum dolore est proident ex voluptate quis esse. Sunt ullamco duis duis quis veniam exercitation tempor adipisicing.\r\n",
          user_id: 6,
          location: "315 Tudor Terrace, Gorham, American Samoa, 6317",
          date_time: "2017-02-14T03:58:16 +07:00"
        },
        {
          title: "Yard Sale",
          details:
            "Laboris aliqua in cillum sunt laborum esse dolor eiusmod ullamco cillum consectetur nisi. Ullamco enim do deserunt magna velit reprehenderit cillum enim eiusmod culpa do. Fugiat irure do duis cupidatat commodo pariatur. Ut laboris ea proident sit.\r\n",
          user_id: 4,
          location: "735 Harwood Place, Madaket, Alabama, 4566",
          date_time: "2016-02-21T05:07:48 +07:00"
        },
        {
          title: "Estate Sale",
          details:
            "Sunt tempor dolor dolore excepteur id. Id dolore pariatur fugiat amet magna eiusmod voluptate excepteur et labore. Proident nisi occaecat et laborum mollit qui dolor laborum ex sunt. Eiusmod voluptate et nulla velit velit aliqua anim eiusmod fugiat ullamco aliquip ut nostrud adipisicing.\r\n",
          user_id: 6,
          location: "260 Evergreen Avenue, Juarez, Oklahoma, 9436",
          date_time: "2015-07-28T07:57:03 +07:00"
        },
        {
          title: "Garage Sale",
          details:
            "Ea labore dolor duis reprehenderit. Sit consectetur magna ex esse eu do non incididunt ea sint cillum commodo nostrud incididunt. Sit non laborum nulla laborum ad reprehenderit magna elit ex Lorem mollit commodo. Ullamco consequat duis sit qui excepteur eiusmod Lorem qui labore culpa cupidatat reprehenderit duis.\r\n",
          user_id: 3,
          location: "533 Gerald Court, Crenshaw, West Virginia, 4953",
          date_time: "2014-12-05T09:10:47 +07:00"
        },
        {
          title: "Garage Sale",
          details:
            "Sint aliqua magna excepteur nisi ullamco id occaecat culpa ex in. Commodo dolore dolor dolor ea. In id consectetur incididunt anim.\r\n",
          user_id: 6,
          location: "201 Woodhull Street, Villarreal, New York, 1853",
          date_time: "2016-07-01T08:42:38 +07:00"
        },
        {
          title: "Yard Sale",
          details:
            "Aliquip cupidatat tempor mollit aute excepteur. Fugiat consequat ex occaecat non cupidatat anim ad eiusmod adipisicing labore. Velit adipisicing voluptate mollit proident velit qui aute nulla elit incididunt consequat. Excepteur minim dolore eiusmod fugiat ullamco eu sint cupidatat irure. Nisi do sint dolore sunt.\r\n",
          user_id: 3,
          location: "806 Clark Street, Lowell, Maine, 8718",
          date_time: "2017-08-29T04:23:49 +07:00"
        },
        {
          title: "Estate Sale",
          details:
            "Cillum ea eu tempor culpa nulla consequat ullamco culpa enim. Proident aute deserunt labore elit ea cillum qui ea velit consectetur aliqua reprehenderit. Cillum aliqua quis cupidatat sint commodo laboris sint exercitation ullamco anim deserunt mollit et. Occaecat ad laboris ipsum est quis labore non enim cillum cupidatat. Sunt sit id commodo nisi nisi laborum ullamco ex. Amet mollit dolor aliquip non Lorem. Sit ea sit eiusmod cillum deserunt et proident mollit reprehenderit est excepteur occaecat ad Lorem.\r\n",
          user_id: 5,
          location: "366 Manor Court, Boykin, Kansas, 6083",
          date_time: "2016-03-01T11:50:12 +07:00"
        },
        {
          title: "Estate Sale",
          details:
            "Lorem labore voluptate minim cupidatat velit tempor adipisicing qui. Consequat id eiusmod sunt adipisicing cillum esse sit laboris voluptate quis sit. Dolor Lorem ut dolore excepteur eu pariatur qui. Velit occaecat pariatur aute magna.\r\n",
          user_id: 1,
          location: "963 Vanderveer Street, Iola, Hawaii, 4445",
          date_time: "2019-09-27T08:45:47 +07:00"
        },
        {
          title: "Estate Sale",
          details:
            "Sit cupidatat mollit officia ex velit ut non pariatur non nostrud proident reprehenderit Lorem. Enim ullamco incididunt est amet cillum nostrud adipisicing deserunt labore. Ex est laborum ea quis consectetur irure exercitation in laborum. Esse aute ipsum occaecat ea aliquip id ipsum nostrud proident reprehenderit nisi. Eu aliqua cillum irure aliquip reprehenderit laboris reprehenderit ad dolor consequat commodo esse nisi. Enim minim sunt elit eiusmod. Fugiat reprehenderit cillum commodo esse est qui aliquip anim velit est elit occaecat.\r\n",
          user_id: 2,
          location: "568 Calder Place, Deputy, Connecticut, 8705",
          date_time: "2019-03-24T05:40:05 +07:00"
        },
        {
          title: "Garage Sale",
          details:
            "Velit ullamco irure nulla in laborum in commodo Lorem laborum proident tempor proident ut exercitation. Proident nostrud nulla esse proident dolor voluptate duis. Aute ex occaecat culpa quis mollit officia velit. Dolor nulla cupidatat labore do tempor Lorem amet elit ad reprehenderit.\r\n",
          user_id: 4,
          location: "891 Dean Street, Aurora, Wisconsin, 4469",
          date_time: "2015-01-09T11:53:36 +07:00"
        },
        {
          title: "Garage Sale",
          details:
            "Enim reprehenderit ex amet voluptate tempor non. Nisi voluptate eu incididunt aliquip amet adipisicing mollit mollit eu minim tempor irure veniam. Sint tempor aliqua amet nostrud nostrud non reprehenderit deserunt sunt ut culpa tempor exercitation et. Nostrud in deserunt incididunt ea. Minim est ad minim nisi mollit culpa eiusmod ut officia laboris mollit. Eu laboris nisi laboris laboris incididunt ex Lorem ex dolor amet mollit in voluptate. Et ex quis voluptate qui anim eiusmod commodo ullamco culpa ut nisi.\r\n",
          user_id: 1,
          location: "623 Barlow Drive, Cochranville, Texas, 477",
          date_time: "2018-02-23T12:49:17 +07:00"
        },
        {
          title: "Garage Sale",
          details:
            "Velit adipisicing esse proident sunt occaecat sint Lorem deserunt. Veniam et sunt adipisicing culpa laboris consectetur cupidatat esse elit. Amet nostrud velit eiusmod nulla do excepteur nisi tempor tempor. Qui pariatur Lorem aliqua commodo pariatur mollit dolor do ullamco dolore ullamco. Culpa exercitation id eiusmod labore dolor aliquip. Occaecat consequat aliquip ullamco proident aliqua Lorem nulla adipisicing sunt est exercitation mollit exercitation.\r\n",
          user_id: 2,
          location: "628 Whitney Avenue, Greer, Florida, 2770",
          date_time: "2019-09-26T12:47:43 +07:00"
        },
        {
          title: "Estate Sale",
          details:
            "Velit exercitation tempor amet nisi ipsum ullamco proident excepteur aliquip excepteur consequat eu. Lorem nostrud fugiat excepteur consectetur veniam fugiat sunt reprehenderit ut deserunt amet dolore ipsum. Veniam pariatur officia pariatur pariatur. Amet sunt in deserunt deserunt occaecat eu amet aliqua ut ut excepteur incididunt.\r\n",
          user_id: 1,
          location: "178 Herzl Street, Kidder, South Dakota, 3687",
          date_time: "2019-04-12T10:16:22 +07:00"
        },
        {
          title: "Garage Sale",
          details:
            "Adipisicing qui exercitation officia et. Ut adipisicing deserunt veniam incididunt ea amet nostrud incididunt cupidatat minim ut occaecat cillum non. Amet cupidatat qui dolore sint magna adipisicing enim tempor.\r\n",
          user_id: 6,
          location: "263 Beverley Road, Fairlee, Rhode Island, 4258",
          date_time: "2015-04-05T06:56:25 +07:00"
        },
        {
          title: "Yard Sale",
          details:
            "Magna ipsum eiusmod proident laborum ad consequat ad eu qui esse. Reprehenderit dolore ullamco sint laboris fugiat in irure velit commodo culpa. Ipsum velit officia cillum consectetur incididunt. Consequat fugiat officia proident sit duis ullamco elit qui commodo et.\r\n",
          user_id: 6,
          location: "536 Lester Court, Courtland, Montana, 405",
          date_time: "2017-04-22T05:46:16 +07:00"
        },
        {
          title: "Estate Sale",
          details:
            "Occaecat non velit aliqua dolor officia fugiat voluptate eu ad labore cupidatat ea. In aute dolore tempor est sint ullamco est ex. Anim nulla excepteur et reprehenderit ullamco proident officia sint ex ipsum qui. In dolor voluptate ullamco quis culpa labore officia excepteur nulla ad officia irure. Proident ut tempor ullamco exercitation sit et occaecat adipisicing eiusmod reprehenderit est reprehenderit ea do. Adipisicing dolor non et qui pariatur exercitation pariatur aliquip adipisicing id consectetur mollit.\r\n",
          user_id: 1,
          location: "354 Hoyts Lane, Yukon, Minnesota, 5020",
          date_time: "2016-09-23T06:27:50 +07:00"
        },
        {
          title: "Yard Sale",
          details:
            "Sunt veniam irure et eiusmod cupidatat mollit velit culpa aliquip eu officia do dolore Lorem. Quis exercitation esse qui culpa reprehenderit enim do qui esse. Laboris sint ad voluptate proident veniam exercitation duis ad officia excepteur sunt aute mollit commodo. Laboris sit fugiat do ipsum non est nostrud ex nostrud et irure. Cillum Lorem do tempor proident consequat veniam incididunt in culpa. Duis amet esse quis do in ea voluptate quis voluptate ut ipsum deserunt ad.\r\n",
          user_id: 5,
          location: "402 Ovington Avenue, Sanborn, Indiana, 7780",
          date_time: "2015-06-21T06:19:29 +07:00"
        },
        {
          title: "Yard Sale",
          details:
            "Enim ipsum proident ut adipisicing excepteur aliquip do. Dolore amet occaecat non elit elit laborum nulla voluptate sint duis adipisicing et cupidatat reprehenderit. Voluptate cillum ipsum sunt tempor anim adipisicing dolor et consectetur occaecat esse ex exercitation deserunt. Eu minim Lorem excepteur nostrud duis. Adipisicing amet minim culpa mollit voluptate veniam aliquip est. Occaecat officia est ullamco laboris sint dolore labore ex proident id quis.\r\n",
          user_id: 5,
          location: "640 Rutledge Street, Eureka, California, 1536",
          date_time: "2017-01-11T11:54:34 +07:00"
        },
        {
          title: "Yard Sale",
          details:
            "Enim irure ullamco consectetur eu. Id minim laboris sit nisi proident. Labore quis Lorem esse incididunt nisi adipisicing nisi cupidatat tempor non. Ut deserunt proident ad laborum tempor voluptate. Lorem et magna aliqua commodo reprehenderit do enim. Magna Lorem aliqua proident Lorem irure ut exercitation anim culpa incididunt nisi voluptate magna aliquip. Et exercitation aliquip deserunt ad.\r\n",
          user_id: 5,
          location: "932 Clay Street, Bangor, Wyoming, 8018",
          date_time: "2014-01-27T07:29:56 +07:00"
        },
        {
          title: "Garage Sale",
          details:
            "Nulla occaecat est ullamco quis deserunt amet dolor tempor deserunt reprehenderit Lorem. Cillum consectetur laborum in veniam esse ea. Excepteur et labore dolor quis exercitation aliqua irure pariatur. Dolore est Lorem id veniam id commodo proident. Ad ad anim ex aliqua do elit.\r\n",
          user_id: 6,
          location: "283 Beacon Court, Sylvanite, Pennsylvania, 6531",
          date_time: "2014-03-08T05:56:11 +07:00"
        },
        {
          title: "Estate Sale",
          details:
            "Et sunt culpa sit ut officia deserunt ex pariatur laborum. Id ut Lorem anim consequat occaecat culpa commodo deserunt incididunt esse qui irure eiusmod consectetur. Enim culpa ex culpa adipisicing ex exercitation consectetur nisi qui esse. Enim mollit proident nostrud reprehenderit ipsum irure.\r\n",
          user_id: 6,
          location: "151 Strong Place, Harold, Tennessee, 6548",
          date_time: "2017-11-06T02:02:13 +07:00"
        },
        {
          title: "Garage Sale",
          details:
            "Consectetur officia qui quis do elit id eu elit aute cupidatat ea laboris incididunt. Dolor fugiat consequat excepteur irure aliqua eiusmod voluptate. Sunt voluptate aliquip cillum ut commodo commodo. Ipsum labore officia duis est deserunt. Enim tempor ullamco elit nulla qui ea qui proident Lorem in tempor. Ipsum fugiat qui aliqua est aliqua enim labore et duis velit sit id eu exercitation.\r\n",
          user_id: 3,
          location: "686 Prospect Avenue, Wheatfields, Maryland, 3216",
          date_time: "2019-06-26T11:53:33 +07:00"
        },
        {
          title: "Yard Sale",
          details:
            "Enim reprehenderit aliqua id minim non minim officia in occaecat voluptate. Ullamco Lorem deserunt cillum officia irure. Laborum consequat tempor nostrud fugiat veniam minim.\r\n",
          user_id: 5,
          location: "881 Essex Street, Haring, District Of Columbia, 709",
          date_time: "2017-08-29T10:43:38 +07:00"
        },
        {
          title: "Yard Sale",
          details:
            "Enim sit consectetur ullamco non minim esse nisi in reprehenderit cupidatat in eiusmod exercitation. Labore dolore officia culpa ipsum anim. Veniam deserunt tempor culpa sit veniam laborum aute non sunt.\r\n",
          user_id: 5,
          location: "626 Guider Avenue, Cloverdale, Marshall Islands, 3226",
          date_time: "2014-04-07T11:29:01 +07:00"
        },
        {
          title: "Yard Sale",
          details:
            "Irure ullamco laborum consequat Lorem esse cillum Lorem id irure tempor magna consequat quis ea. Voluptate fugiat incididunt magna consequat excepteur non proident consectetur aliquip nisi deserunt. Nisi irure veniam do incididunt cillum consectetur incididunt est dolore.\r\n",
          user_id: 3,
          location: "846 Butler Street, Utting, Vermont, 4155",
          date_time: "2014-07-18T07:01:55 +07:00"
        },
        {
          title: "Estate Sale",
          details:
            "Laboris qui ipsum ea culpa quis. Ad irure dolor voluptate tempor labore eu fugiat dolor duis et cillum. Tempor consectetur occaecat magna deserunt mollit incididunt enim elit irure id est dolore consequat. Adipisicing ut elit duis voluptate qui ad mollit minim. Deserunt labore irure Lorem aliquip do.\r\n",
          user_id: 4,
          location: "193 Thomas Street, Ferney, New Mexico, 3610",
          date_time: "2017-08-26T11:17:01 +07:00"
        },
        {
          title: "Estate Sale",
          details:
            "Ea velit ad id officia in ipsum esse eiusmod enim ipsum exercitation aute cupidatat. Ea ipsum dolor ullamco minim dolor magna fugiat adipisicing elit pariatur cupidatat adipisicing. Qui ex et laboris incididunt labore tempor culpa veniam. Laboris adipisicing occaecat incididunt nisi.\r\n",
          user_id: 1,
          location: "260 Division Avenue, Kimmell, South Carolina, 570",
          date_time: "2019-07-19T04:12:40 +07:00"
        },
        {
          title: "Yard Sale",
          details:
            "Sint velit nulla ut dolore voluptate eiusmod laboris in velit est deserunt sint. Enim sint ullamco reprehenderit amet occaecat commodo est sunt pariatur. Commodo id amet incididunt veniam mollit magna incididunt excepteur sit laborum duis ut mollit aliquip. Cillum id voluptate minim enim eiusmod nisi. Eu aliqua eu consectetur culpa laboris velit minim ullamco enim ad. Non elit veniam aliqua mollit in sunt aliqua consectetur.\r\n",
          user_id: 3,
          location: "173 Dennett Place, Stockwell, Missouri, 8324",
          date_time: "2014-09-16T09:41:29 +07:00"
        },
        {
          title: "Estate Sale",
          details:
            "Cupidatat minim id mollit do magna duis mollit aliqua ullamco fugiat aliquip velit labore. Ut nisi consectetur enim ipsum duis dolor excepteur et dolore pariatur labore consectetur laboris mollit. Reprehenderit ex irure sunt exercitation incididunt ipsum velit fugiat aliquip in. Anim laboris ipsum consequat veniam adipisicing aliquip. In cupidatat cillum pariatur ad duis aliqua adipisicing elit nisi culpa ad non ipsum et. Incididunt enim excepteur ad sit ut laboris non incididunt esse cupidatat ea consectetur irure. Exercitation mollit culpa fugiat ut id in quis minim amet ex qui.\r\n",
          user_id: 6,
          location: "538 Hoyt Street, Mappsville, Iowa, 9754",
          date_time: "2016-10-30T10:32:20 +07:00"
        },
        {
          title: "Yard Sale",
          details:
            "Voluptate commodo eiusmod exercitation dolore. Enim et pariatur ex sint. Culpa ipsum sunt mollit in duis velit ex labore cillum adipisicing tempor. Consectetur ipsum qui cillum deserunt cillum laborum voluptate aliqua laboris tempor id incididunt duis amet. Proident ullamco incididunt qui Lorem ea Lorem qui proident esse exercitation laboris. Excepteur voluptate culpa sit dolore dolore excepteur id aliquip reprehenderit officia mollit. Ea dolor ex consectetur elit amet aliquip non.\r\n",
          user_id: 1,
          location: "968 Brevoort Place, Chestnut, Massachusetts, 7942",
          date_time: "2017-04-03T06:15:30 +07:00"
        },
        {
          title: "Garage Sale",
          details:
            "Voluptate amet elit aliqua anim. Duis proident est culpa eiusmod eiusmod voluptate proident veniam cillum commodo eiusmod minim cupidatat. Deserunt tempor est consequat pariatur eiusmod laboris. Deserunt exercitation exercitation in veniam elit duis anim elit esse mollit consectetur quis excepteur. Veniam do esse excepteur excepteur est ut non commodo amet nisi adipisicing sit ullamco.\r\n",
          user_id: 4,
          location: "518 Boynton Place, Taycheedah, Arkansas, 2595",
          date_time: "2014-05-05T11:34:18 +07:00"
        },
        {
          title: "Garage Sale",
          details:
            "Quis voluptate est ut irure cillum sit labore irure commodo sit occaecat id. Minim aute do deserunt velit laborum anim fugiat non sunt. Officia tempor ea magna enim sint anim esse reprehenderit anim. Ea est magna labore reprehenderit nisi aliquip cillum esse ex Lorem officia mollit ea dolor. Ut minim est laboris Lorem sint cupidatat excepteur non do ad ipsum. Id cillum eiusmod eiusmod in eu est dolore occaecat officia duis amet. Aliquip est est minim et voluptate in laborum.\r\n",
          user_id: 3,
          location: "732 Manhattan Avenue, Ahwahnee, Louisiana, 3289",
          date_time: "2014-11-28T07:25:54 +07:00"
        },
        {
          title: "Estate Sale",
          details:
            "Irure et deserunt pariatur ut qui ullamco nisi. Excepteur labore id amet sunt sint dolore ad laborum. Adipisicing voluptate sunt aute enim enim qui. Reprehenderit ullamco fugiat reprehenderit nisi nulla sint. Laboris non sint elit et incididunt consequat id eu nulla cillum mollit cillum cillum. Velit laborum ullamco aute nostrud enim eiusmod magna sit eiusmod anim laborum aute labore. Officia id labore deserunt veniam dolor ut eiusmod veniam sit pariatur consequat.\r\n",
          user_id: 3,
          location: "411 Locust Street, Savannah, Arizona, 2737",
          date_time: "2017-05-18T08:32:33 +07:00"
        },
        {
          title: "Estate Sale",
          details:
            "Esse commodo anim laborum do minim. Lorem ex consequat duis non in consectetur elit. Et elit labore Lorem et ut id eiusmod aute eiusmod. Proident incididunt excepteur velit magna do mollit.\r\n",
          user_id: 5,
          location: "402 Sandford Street, Waumandee, Nebraska, 3515",
          date_time: "2014-06-14T08:41:56 +07:00"
        },
        {
          title: "Estate Sale",
          details:
            "Labore dolore laboris pariatur consequat excepteur nisi laborum cupidatat anim. Qui laborum cupidatat minim commodo. Culpa occaecat incididunt in enim labore cillum proident laboris sit Lorem sit id. Aliquip exercitation esse anim nisi velit aute exercitation eu incididunt in dolore eu sunt. Anim ex ipsum enim occaecat Lorem laboris exercitation cillum irure do veniam.\r\n",
          user_id: 3,
          location: "944 Morton Street, Cutter, Ohio, 6936",
          date_time: "2017-04-04T01:21:52 +07:00"
        },
        {
          title: "Yard Sale",
          details:
            "Lorem magna consectetur consectetur consectetur ad nulla. Est commodo aute excepteur mollit magna enim minim aliquip aliquip esse tempor consectetur. Ut labore elit tempor veniam officia dolor. Velit tempor ut duis do minim.\r\n",
          user_id: 6,
          location: "566 Bulwer Place, Falconaire, Alaska, 5182",
          date_time: "2014-08-13T09:00:52 +07:00"
        },
        {
          title: "Yard Sale",
          details:
            "Magna velit exercitation non esse eiusmod eu. Minim duis sit dolor aliquip ipsum labore commodo reprehenderit sunt laborum enim elit est fugiat. Ex do mollit laboris mollit sunt.\r\n",
          user_id: 5,
          location: "700 Anthony Street, Townsend, Mississippi, 3824",
          date_time: "2017-01-10T11:18:18 +07:00"
        },
        {
          title: "Estate Sale",
          details:
            "Cillum pariatur ut officia velit fugiat duis. Enim non quis nostrud nisi voluptate non quis aliqua deserunt. Lorem ut mollit voluptate esse eu ipsum nisi velit. Reprehenderit sit tempor sit consectetur velit commodo nisi sit enim exercitation excepteur consequat esse veniam. Ipsum nostrud consectetur consectetur eu sint tempor. Exercitation in exercitation aliquip mollit aliquip.\r\n",
          user_id: 5,
          location: "238 Woodruff Avenue, Muir, Oregon, 5407",
          date_time: "2016-02-10T05:49:18 +07:00"
        },
        {
          title: "Yard Sale",
          details:
            "Aliqua enim in exercitation nisi fugiat non reprehenderit ex nostrud. Consequat id quis fugiat qui. Proident ipsum non ea id mollit ex nisi. Aliqua irure cillum duis nisi ullamco. Nisi ut incididunt officia sint cillum dolor id fugiat aute aute. Aliquip ipsum qui velit nulla minim proident ipsum amet mollit voluptate nisi ut dolore cupidatat. Tempor cillum voluptate dolore ipsum mollit cillum qui nostrud ea irure sint ullamco.\r\n",
          user_id: 4,
          location: "525 Highlawn Avenue, Evergreen, North Dakota, 7009",
          date_time: "2014-11-16T05:23:13 +07:00"
        },
        {
          title: "Estate Sale",
          details:
            "Excepteur deserunt consequat qui amet incididunt deserunt. Minim mollit exercitation cupidatat reprehenderit veniam id aute non mollit enim incididunt. Anim nostrud laboris ex non enim anim consectetur ad.\r\n",
          user_id: 4,
          location:
            "993 Story Street, Sparkill, Northern Mariana Islands, 3716",
          date_time: "2016-02-13T05:54:48 +07:00"
        },
        {
          title: "Estate Sale",
          details:
            "Laboris laboris sint mollit incididunt amet. Lorem nisi excepteur quis aliqua exercitation nisi exercitation excepteur dolor ex est ut. Anim nostrud deserunt deserunt deserunt irure Lorem sit sint pariatur reprehenderit aliquip irure. Tempor eu consectetur eiusmod elit cillum occaecat laborum aute amet commodo enim do labore. In culpa reprehenderit amet mollit dolore incididunt sint duis in incididunt irure nostrud.\r\n",
          user_id: 1,
          location: "313 Hunterfly Place, Freelandville, New Jersey, 4748",
          date_time: "2015-05-23T05:56:41 +07:00"
        },
        {
          title: "Yard Sale",
          details:
            "Anim consequat incididunt velit ea labore pariatur adipisicing. Elit id Lorem laborum cillum tempor exercitation ullamco velit nulla ut pariatur enim sunt. Officia velit excepteur est consequat nostrud aute id pariatur nisi nulla amet. Excepteur enim irure consectetur deserunt et sint labore culpa officia. Eiusmod deserunt dolor officia dolor Lorem amet nisi ea fugiat. Minim commodo laborum duis aute Lorem pariatur aliqua.\r\n",
          user_id: 3,
          location: "318 Sumner Place, Crucible, New Hampshire, 9807",
          date_time: "2018-04-06T08:24:20 +07:00"
        },
        {
          title: "Estate Sale",
          details:
            "Excepteur Lorem deserunt pariatur eiusmod minim ipsum excepteur ea sit commodo pariatur fugiat. Veniam officia pariatur amet dolor anim magna anim duis enim qui sunt ut incididunt. Do ea laboris ea deserunt in sint laborum eiusmod labore.\r\n",
          user_id: 6,
          location: "782 Duryea Place, Lopezo, Utah, 5733",
          date_time: "2016-04-07T10:51:33 +07:00"
        }
      ]);
    });
};
