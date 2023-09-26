// apis/dummyApi.js
export const getDummyPosts = () => {
    return new Promise((resolve) => {
      // 가상의 더미 데이터 배열
      const dummyData = [
        {
          id: 1,
          title: "패러글라이딩의 세계",
          content: "블로그 게시물의 내용을 간략하게 소개하는 짧고 인상적인 부제를 추가하여 독자들의 관심을 유도하세요. 참신하고 흥미로운 블로그 게시물로 독자 및 잠재 고객과 소통하세요. 블로그 게시물은 최신 업데이트 및 비즈니스 소식을 지속적으로 공유할 수 있는",
          user_id: "닥터빌드",
          bookmarked: false,
          favorite: true,
          thumbnail: "data:image/jpeg;base64,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",
        },
        {
          id: 2,
          title: "투자자를 모으는 노하우",
          content: "닥터빌드의 사업은 일반 건축주가 안심하고 건축할 수 있도록 하는 안심 건축 서비스와 건축 리스크를 차단할 수 있는 건축교육 서비스, 복잡하고 어려운 소규모 재건축, 가로주택정비사업, 모아타운 사업을 건축주/조합원의 편에서 진행하는 정비사업 서비스로 구성됩니다. 닥터빌드가 궁극적으로 추구하는 하나의 철학은 건축주/조합원의 재산을 지키고 이익을 우선시하여 가장 적은 비용으로 최고 품질의 주거 공간을 구성하는 것입니다.",
          user_id: "이순신",
          bookmarked: false,
          favorite: false,
          thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh2rJ2IeKtkO-TgxOEhxllmFzlJhC3b2lOeQ&usqp=CAU",
        },
        {
            id: 3,
            title: "소규모 재건축&가로주택정비사업&모아타운사업 등",
            content: "노후된 공동주택의 소유 건축주라면 필연적으로 소규모 재건축을 진행하고자 합니다. 가로주택정비사업, 모아타운 사업은 주민자치적으로 추진하는 사업입니다. 닥터빌드는 복잡하고 이해관계가 얽혀 있는 재건축/정비사업을 전문 정비업면허를 가지고 지원합니다. 닥터빌드는 사업비용을 최소화 하고 사업매출을 극대화 하는 수십년간의 노하우를 가지고 성공적인 재건축/정비사업의 시작과 끝을 함께 합니다.",
            user_id: "홍길동",
            bookmarked: false,
            favorite: false,
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUoYQvC-QziGrVFW2Wqjtoj1TJSrKvvDBQiw&usqp=CAU",
          },
          {
            id: 4,
            title: "객체 지향하기: 깔끔한 설계",
            content: "우리는 OOP방식으로 애플리케이션을 설계할 때, 우리는 무엇부터 생각하는가? 우리는 가장 먼저 어떤 클래스가 필요한지 고민하고 어떤 상태와 행동이 필요할지 고민한다. 그런데 이것은 OOP의 본질과는 거리가 멀다. 객체지향은 말그대로 객체를 지향한다라는 의미이다. 그렇기 때문에 객체지향의 패러다임으로 전환하기 위해서는 클래스가 아닌 객체에 초점을 맞춰야 한다. 이를 위해서 우리는 프로그래밍을 하는 동안 아래의 2가지에 집중해야 한다.",
            user_id: "이순신",
            bookmarked: false,
            favorite: true,
            thumbnail: null,
          },
          {
            id: 5,
            title: "5555 번째 게시물555 번째 게시물555 번째 게시물555 번째 게시물555 번째 게시물555 번째 게시물555 번째 게시물",
            content: "555 번째 게시물",
            user_id: "홍길동",
            bookmarked: false,
            favorite: false,
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfiLN2h4BBOFYkRY9RNAzrHX3i9EpqnHz3Tg&usqp=CAU",
          },
          {
            id: 6,
            title: "캡슐화: Encapsulation",
            content: "객체 내부의 세부적인 사항(인스턴스 변수와 구현에 직접 접근;)을 감추는 것을 말한다. 캡슐화를 통해서 객체 내부의 접근을 제한하면 객체와 객체 사이의 결합도를 낮출 수 있기 때문에 비즈니스 변화에 쉽게 대응(코드 수정)할 수 있다",
            user_id: "이순신",
            bookmarked: false,
            favorite: true,
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTct4yUqqP5fcGmTJzR9L_bKwHnS-DZYzjaepNXfnbq-ceMrXw1WlIg94C3Ac1a1I6k8qk&usqp=CAU",
          },
      ];
  
      setTimeout(() => {
        resolve(dummyData);
      }, 100);
    });
  };
  