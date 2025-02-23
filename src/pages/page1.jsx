export default function Page1() {
  return (
    <div className="page1">
      <div className="page1tag">
        <img src="/mainlogo.png" alt="mainlogo2" className="tagimagepg1" />
        Short is better
      </div>
      <div className="page1head">
        Shorten and Track
        <br />
        Links in a <span className="purple"> Blink.</span>
      </div>
      <div className="page1desc">
        Turn long, cluttered URLs into short, shareable links. Track clicks,
        analyze performance, and simplify sharing—all in a blink!
      </div>
      <div className="page1buttons">
        <div className="addbuttonpg1">
          <img src="/add.png" alt="Arrow" className="getstartedimg" /> Shorten
          Link
        </div>

        <div className="addbuttonpg1bg">
          <img src="/dashboard.png" alt="Arrow" className="getstartedimg" />{' '}
          Dashboard
        </div>
      </div>
    </div>
  );
}
