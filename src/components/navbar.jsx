import "./nav.css";

export default function AppNavbar() {
  return (
    <>
      <nav className="navbar">
        <div className="top">
          <div className="right">
            <div className="imgBx">
              <img src="https://tuwaiq.edu.sa/img/logos/Logos_White-04.png" />
            </div>
            <div className="items">
              <a href="">الرئيسية</a>
              <a href="">المعسكرات والبرامج</a>
              <a href="">حول الأكاديمية</a>
              <a href="">الأكاديميات التابعة</a>
              <a href="">مركز الاختبارات</a>
            </div>
          </div>
          <div className="left">
            <a href="">تسجيل الدخول</a>
            <a href="">English</a>
          </div>
        </div>
        <div className="bottom">
          <h1>أكاديمية طويق</h1>
        </div>
      </nav>
    </>
  );
}
