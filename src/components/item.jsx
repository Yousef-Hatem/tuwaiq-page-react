/* eslint-disable react/prop-types */
export default function Item(props) {
  let colorNumber;

  if (props.type === "لقاء") {
    colorNumber = 1;
  } else if (props.type === "معسكر") {
    colorNumber = 2;
  } else if (props.type === "برنامج") {
    colorNumber = 3;
  }

  const time = new Date(props.date).getTime();

  if (time < Date.now()) {
    colorNumber = 4;
  }

  return (
    <>
      <div className={"item c-" + colorNumber}>
        <img
          src={props.img}
          alt
          width="64"
          height="64"
          style={{ display: props.img ? "block" : "none" }}
        />
        <div className="lien"></div>
        <div className="content">
          <div className="title">
            <p>{props.type}</p>
            <h3>{props.title}</h3>
          </div>
          <div className="text">
            <div className="icons">
              <div className="icon">
                <div>
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <p>الرياض</p>
              </div>
              <div className="icon">
                <div>
                  <span className="material-symbols-outlined">
                    calendar_today
                  </span>
                </div>
                <p>{props.until}</p>
              </div>
            </div>
            <div className="btn">
              <div className="icon">
                <div>
                  <span className="material-symbols-outlined">date_range</span>
                </div>
                <p>يبدأ في {props.date}</p>
              </div>
              <div>
                <button>التفاصيل</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
