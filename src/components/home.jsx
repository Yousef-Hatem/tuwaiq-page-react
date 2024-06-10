import "./home.css";
import Item from "./item";

export default function Home() {
  return (
    <>
      <div className="home">
        <header>
          <h1>المعسكرات والبرامج</h1>
          <div className="btns">
            <button>الكبار</button>
            <button className="btn-out">الناشئون</button>
          </div>
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z" />
            </svg>
          </div>
        </header>
        <div className="items">
          <Item
            type="لقاء"
            img="https://cdn.tuwaiq.edu.sa/initiatives_admin/images/nsfaqp2p.evr.webp?h=100"
            title="فعالية WWDC24 Watch Party"
            until="يوم واحد"
            date="10/06/2024"
          />
          <Item
            type="معسكر"
            title="هندسة الحوسبة السحابية المتقدمة AWS"
            until="4 أسابيع"
            date="23/06/2024"
          />
          <Item
            type="برنامج"
            title="إدارة خدمات تقنية المعلومات (ITIL)"
            until="أسبوع واحد"
            date="23/06/2024"
          />
          <Item
            type="برنامج"
            title="الذكاء الاصطناعي التوليدي القائم على LLAMA"
            until="7 أسابيع"
            date="01/06/2024"
          />
          <Item
            type="برنامج"
            title="التطوير باستخدام تقنيات الواقع الممتد"
            until="6 أسابيع"
            date="01/06/2024"
          />
          <Item
            type="برنامج"
            title="برمجة لغة C# لبناء عوالم افتراضية باستخدام Unity"
            until="6 أسابيع"
            date="01/06/2024"
          />
        </div>
        <button className="show-more">تحميل المزيد</button>
      </div>
      <section className="installation-steps">
        <h1>خطوات التسجيل</h1>
        <div className="content">
          <div className="step">
            <div className="icon">
              <img src="https://tuwaiq.edu.sa/img/course-step-1.svg" alt />
            </div>
            <div className="text">الانضمام إلى المنصة</div>
          </div>
          <div className="road">
            <img src="https://tuwaiq.edu.sa/img/horizontal_line.svg" alt />
          </div>
          <div className="step">
            <div className="icon">
              <img src="https://tuwaiq.edu.sa/img/course-step-2.svg" alt />
            </div>
            <div className="text">
              التــســــــــجيــــــــــــل في المعسكر أو البرنامج
            </div>
          </div>
          <div className="road">
            <img src="https://tuwaiq.edu.sa/img/horizontal_line.svg" alt />
          </div>
          <div className="step">
            <div className="icon">
              <img src="https://tuwaiq.edu.sa/img/course-step-3.svg" alt />
            </div>
            <div className="text">انتظار رسالة القــــبــــــــــــول</div>
          </div>
        </div>
      </section>
    </>
  );
}
