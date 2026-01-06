import './App.css'
import heroImage from './assets/image6.png'
import logoMark from './assets/Frame 2147227241.png'
import maker1 from './assets/Ellipse 6.png'
import maker2 from './assets/Ellipse 4.png'
import maker3 from './assets/Ellipse 8.png'
import maker4 from './assets/Ellipse 2.png'
import maker5 from './assets/Ellipse 7.png'
import chat1 from './assets/image4.png'
import chat2 from './assets/image5.png'
import collage from './assets/image3.png'
import report1 from './assets/image2.png'
import report2 from './assets/image1.png'
import wave from './assets/Vector.svg'

const makers = [
  { name: '러닝널스', img: maker1 },
  { name: '베리베리', img: maker2 },
  { name: '텐미닛 플로우메이커', img: maker3 },
  { name: '근육파수꾼', img: maker4 },
  { name: '밀착형 러너', img: maker5 },
]

const faqs = [
  {
    q: 'Q. 중간에 며칠 못 하면 의미 없어지는 건가요?',
    a: 'A. 아닙니다.\n못한 날도 이유를 남기면, 흐름 안에 남아 있는 것으로 인정됩니다.',
  },
  {
    q: 'Q. 야근이나 약속 때문에 일정이 자주 깨질 것 같아요.',
    a: 'A. 그래서 실패 기록이 기본 규칙입니다.\n하루 빠졌다고 끊기지 않게, 다시 돌아올 수 있게 설계되어 있습니다.',
  },
  {
    q: 'Q. 운동을 잘 못해도, 체력이 부족해도 괜찮나요?',
    a: 'A. 괜찮습니다.\n이 클럽은 잘하는 사람이 아니라, 해보려는 사람을 위한 구조입니다.',
  },
  {
    q: 'Q. 3주만 하고 끝나면 다시 예전으로 돌아가지 않나요?',
    a: 'A. 희망 시, 3주를 이어서 다시 시작할 수 있습니다. 짧은 기간을 반복하며, 루틴이 자리 잡도록 돕는 것이 목표입니다. MOTIDAY는 못한 날이 있어도 괜찮습니다. 사람과 구조가 함께하는 환경 안에서 기록으로 흐름을 이어가게 합니다.',
  },
]

function App() {
  return (
    <main className="page">
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay" />
        <header className="hero-top">
          <img src={logoMark} alt="MOTIDAY" className="hero-logo-mark" />
          <span className="hero-brand">MOTIDAY</span>
        </header>
        <div className="pill">
          <span className="dot" />
          <span>모티메이커와 함께 만드는 건강 루틴</span>
        </div>
        <h1>
          MOTIDAY와 함께하는
          <br />
          3주 운동 루틴 만들기
        </h1>
        <p className="hero-sub">
          운동할까 말까 고민될 때,
          <br />
          아무도 뭐라 안 하는데 왜 이렇게 미뤄질까?
        </p>
        <a
          className="primary-cta"
          href="https://forms.gle/MuSxqxU2bWESGzmp8"
          target="_blank"
          rel="noreferrer"
        >
          3주 운동 루틴 시작하기
        </a>
      </section>

      <section className="panel dark">
        <p className="eyebrow">2026년 핫한 루틴 커뮤니티 - MOTIDAY</p>
        <h2>
          혼자라서 실패하는 운동이 아니라
          <br />
          혼자여도 계속하게 만드는 구조
        </h2>
        <div className="money-line">
          <span>왜 “해야지”는 항상 여기서 멈출까요?</span>
          <img src={wave} alt="" className="money-wave" />
        </div>
        <div className="bubble b1">
          페이스를 잡아주는 사람이 없어서
          <br />
          늘어지거나, 금방 지치고..
        </div>
        <div className="bubble b2">
          혼자 하는 구조라서..
          <br />
          너무 빡세거나, 너무 쉬워지거나
        </div>
        <div className="bubble b3">
          같이 가는 사람이 없어서 나만 빠지는 느낌,
          <br />
          아무 말도 안 해주니까...
        </div>
        <div className="underline" />
      </section>

      <section className="maker">
        <header className="section-header">
          <h3>
            함께 가는 사람, <span className="highlight">MOTIMAKER</span>
          </h3>
          <p>모티데이 사전 기수에서 검증된 갓생러, 
             <br />
            함께할 페이스메이커입니다.</p>
        </header>
        <div className="maker-grid">
          {makers.map((maker) => (
            <div className="maker-card" key={maker.name}>
              <img src={maker.img} alt={maker.name} />
              <span>{maker.name}</span>
            </div>
          ))}
        </div>
        <div className="support-note">
          <ul className="support-list">
            <li>쳐질 때 다시 움직이게, 페이스를 잡아주고</li>
            <li>비슷한 경험과 시행착오를 공유해주고</li>
            <li>누군가는 이미 하고 있는 모습을 보여줍니다</li>
          </ul>
          <div className="support-card">
            <p>
              혼자서는 멈췄던 운동,
              <br />
              이번엔 <span className="highlight-text">혼자가 아니어서</span> 이어집니다.
            </p>
          </div>
        </div>
      </section>

      <section className="structure">
        <p className="eyebrow gold">함께 만드는 건강 루틴, MOTIDAY</p>
        <h2>MOTIDAY는 혼자 버티게 두지 않습니다.</h2>
        <p className="structure-sub">
          대신, 흐름이 끊기지 않게 곁에서 붙잡아주는 구조를 만듭니다.
        </p>
        <div className="reminder-card">
          <img src={chat1} alt="리마인드 메시지 예시" className="chat-img" />
          <div className="reminder-bubble">
            <img src={chat2} alt="운동 인증 예시" />
          </div>
        </div>
        <div className="structure-list">
          <div className="chip">
            <span>혼자 하다 쳐지지 않게, </span>
            <strong>페이스 메이커</strong>
          </div>
          <div className="chip">
            <span>까먹고 미루지 않게, </span>
            <strong>움직이게 만드는 구조</strong>
          </div>
          <div className="chip">
            <span>나만 포기해도 끝나지 않게, </span>
            <strong>함께하는 사람들</strong>
          </div>
        </div>
      </section>

      <section className="circle">
        <div className="circle-inner">
          <div className="circle-title">
            <span className="dot" />
            MOTIDAY는 사람 + 구조로 작동합니다
          </div>
          <div className="chip wide">혼자 하다 쳐지지 않게, 페이스 메이커</div>
          <div className="chip wide">까먹고 미루지 않게, 움직이게 만드는 구조</div>
          <div className="chip wide">나만 포기해도 끝나지 않게, 함께하는 사람들</div>
        </div>
        <p className="circle-caption">
          MOTIDAY는 ‘사람 + 구조’로 작동하는 환경 안에서
          <br />
          3주를 끝까지 이어가게 합니다.
        </p>
        <p className="circle-foot">그래서 MOTIDAY는 다르게 시작합니다</p>
      </section>

      <section className="journey">
        <header className="section-header">
          <h3>3주 동안, 이렇게 흘러갑니다</h3>
          <p>신청부터 종료까지, 한 번에 보는 3주 여정</p>
        </header>
        <div className="journey-grid">
          <div className="journey-card">
            <div className="card-head">
              <span className="number">01</span>
              <span className="title">시작 전</span>
            </div>
            <ul className="body">
              <li>목표 횟수: 주 3회</li>
              <li>러닝+PT 해서 매주 최소 2~3회</li>
              <li>힘 빼는 히스: 월/목</li>
              <li>룰: 하루 빠져도 흐름 끊기지 않게 기록</li>
              <li>자기 효능감 점수(주 관점): 매주 기록</li>
            </ul>
          </div>

          <div className="journey-card">
            <div className="card-head">
              <span className="number">02</span>
              <span className="title">매일</span>
            </div>
            <div className="daily-wrap">
              <img src={chat1} alt="리마인드 예시" className="daily-img" />
              <div className="daily-stack">
                <img src={collage} alt="앱 화면 예시" className="daily-img tall" />
                <div className="badge muted">걸리는 시간은 1분 내외</div>
              </div>
            </div>
            <ul className="body">
              <li>정한 시간에 맞춰 리마인드</li>
              <li>됐든, 안 됐든 기록만 하면 OK</li>
            </ul>
          </div>

          <div className="journey-card">
            <div className="card-head">
              <span className="number">03</span>
              <span className="title">매주</span>
            </div>
            <ul className="body">
              <li>내 루틴 진행 상황 한눈에 정리</li>
              <li>모티메이커·참여자 평균과 함께 비교</li>
              <li>다음 주를 위한 한 줄 제안</li>
            </ul>
          </div>

          <div className="journey-card">
            <div className="card-head">
              <span className="number">04</span>
              <span className="title">종료 후</span>
            </div>
            <div className="report-wrap">
              <img src={report1} alt="3주 리포트 예시" className="report-main" />
              <img src={report2} alt="루틴 리포트 예시" className="report-sub" />
            </div>
            <ul className="body">
              <li>3주간의 결과를 한 장으로 돌아보기</li>
              <li>내 패턴을 분석해 다음 루틴의 기준점 설정</li>
              <li>끝이 아닌 새로운 시작으로 자연스럽게 확장</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="pricing-inner">
          <div className="badge">3주 프로그램</div>
          <div className="price">
            15,000원 <span>/ 3주</span>
          </div>
          <p className="price-sub">
            하루로 나누면 약 <strong>700원</strong>,
            <br />
            커피 한 잔도 안되는 금액으로
            <br />
            오늘을 그냥 넘기지 않게 만드는 환경에 들어옵니다.
          </p>
          <p className="price-body">
            의지를 다잡는 데 쓰는 돈이 아니라,
            <br />
            ‘이번엔 끝까지 해보자’는 마음을 실제로 움직이게 만드는
            <br />
            최소한의 장치입니다.
          </p>
        </div>
      </section>

      <section className="recommend">
        <h3>이런 분들께 추천합니다</h3>
        <ul>
          <li>운동은 해야겠는데, 야근·약속에 자꾸 밀려온 분</li>
          <li>마음은 있는데, 혼자 하면 흐름이 끊겼던 분</li>
          <li>의지는 충분하지만, 붙잡아 줄 환경이 필요했던 분</li>
          <li>2026년에는 갓생을 시작하고 싶으신 분</li>
        </ul>
        <div className="note">
          ※ 하나라도 해당된다면, 이번 3주는 혼자 하지 않아도 됩니다.
        </div>
      </section>

      <section className="faq">
        <h3>자주 묻는 질문</h3>
        <div className="faq-list">
          {faqs.map((item) => (
            <div className="faq-item" key={item.q}>
              <p className="question">{item.q}</p>
              <p className="answer">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="final">
        <div className="final-hero" />
        <p className="final-lead">
          3주 후,
          <br />
          “해야지”만 했던 사람이 아니라
          <br />
          이미 움직이고 있는 당신이 남아 있을 겁니다.
        </p>
        <p className="final-title">
          2026년엔,
          <br />
          운동을 ‘해야지’ 다짐만 하지말고,
          <br />
          <span className="big">‘하고 있는 사람’</span>으로 시작해보세요
        </p>
        <button className="primary-cta wide">👉 3주 운동 루틴 시작하기</button>
      </section>
    </main>
  )
}

export default App
