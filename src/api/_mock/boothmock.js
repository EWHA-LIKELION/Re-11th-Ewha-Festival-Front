export const boothsdata = [
  {
    id: 1,
    user: 11, // 1번 부스 관리자 id 11
    day: ['수요일', '목요일', '금요일'],
    times: [
      {
        id: 1,
        created_at: '2023-05-02 08:00',
        updated_at: '2023-05-02 08:00',
        time: null,
      },
      {
        id: 2,
        created_at: '2023-05-02 08:02',
        updated_at: '2023-05-02 08:02',
        time: 'AM 10:00 ~ PM 5:00',
      },
      {
        id: 3,
        created_at: '2023-05-02 08:02',
        updated_at: '2023-05-02 08:02',
        time: 'AM 10:00 ~ PM 5:00',
      },
    ],
    college: '포스코관',
    category: ['음식'],
    name: '멋쟁이사자처럼',
    number: '포08',
    thumnail: '',
    opened: false,
    notices: [
      {
        id: 1,
        created_at: '2023-05-10 09:35',
        updated_at: '2023-05-11 12:41',
        content:
          '모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며, 법률이 정하는 바에 의하여 최저임금제를 시행하여야 한다.',
      },
    ],
    hashtag: '#떡꼬치 #떡볶이 #포스코관_부스',
    description:
      '헌법개정은 국회재적의원 과반수 또는 대통령의 발의로 제안된다. 제1항의 탄핵소추는 국회재적의원 3분의 1 이상의 발의가 있어야 하며, 그 의결은 국회재적의원 과반수의 찬성이 있어야 한다. 다만, 대통령에 대한 탄핵소추는 국회재적의원 과반수의 발의와 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.\n\n나는 헌법을 준수하고 국가를 보위하며 조국의 평화적 통일과 국민의 자유와 복리의 증진 및 민족문화의 창달에 노력하여 대통령으로서의 직책을 성실히 수행할 것을 국민 앞에 엄숙히 선서합니다. 법률이 헌법에 위반되는 여부가 재판의 전제가 된 경우에는 법원은 헌법재판소에 제청하여 그 심판에 의하여 재판한다. 이 헌법공포 당시의 국회의원의 임기는 제1항에 의한 국회의 최초의 집회일 전일까지로 한다. 모든 국민은 건강하고 쾌적한 환경에서 생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다.\n\n예비비는 총액으로 국회의 의결을 얻어야 한다. 예비비의 지출은 차기국회의 승인을 얻어야 한다. 모든 국민은 신속한 재판을 받을 권리를 가진다. 형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다. 대통령후보자가 1인일 때에는 그 득표수가 선거권자 총수의 3분의 1 이상이 아니면 대통령으로 당선될 수 없다.',
    images: [
      {
        id: 1,
        image:
          'https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200707/44c50e6fbd80ff7e4342b0cb286df25b.jpg',
      },
      {
        id: 2,
        image:
          'https://mp-seoul-image-production-s3.mangoplate.com/1042441_1621781432284710.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80',
      },
    ],
    menus: [
      {
        id: 1,
        menu: '떡꼬치',
        price: 2000,
        is_soldout: true,
      },
      {
        id: 2,
        menu: '떡볶이',
        price: 3000,
        is_soldout: false,
      },
    ],
    is_liked: true,
    created_at: '2022-08-12 16:21',
    updated_at: '2022-08-12 22:34',
    comments: [
      {
        id: 1,
        booth: 1,
        user: {
          id: 1,
          nickname: '이화인',
        },
        content:
          '모든 국민은 통신의 비밀을 침해받지 아니한다.\n사면·감형 및 복권에 관한 사항은 법률로 정한다.',
        created_at: '2023-05-11 13:16',
        updated_at: '2023-05-11 13:16',
      },
      {
        id: 1,
        booth: 1,
        user: {
          id: 11,
          nickname: '1번 부스 관리자',
        },
        content:
          '국회는 의원의 자격을 심사하며, 의원을 징계할 수 있다. 통신·방송의 시설기준과 신문의 기능을 보장하기 위하여 필요한 사항은 법률로 정한다.',
        created_at: '2023-05-11 14:25',
        updated_at: '2023-05-11 14:25',
      },
    ],
  },
];