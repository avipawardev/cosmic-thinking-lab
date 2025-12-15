import { Link } from "react-router-dom";

export default function Hero(): JSX.Element {
  return (
    <section data-hero="" className="hero-section">
      <div className="nav-wrapper">
        <div>
          <Link to="/" className="w-inline-block w--current">
            <img src="/logo.png" alt="Cosmic Thinking Lab" className="main-logo" />
          </Link>
          <Link to="/login" className="icon-button is-desktop w-inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 501 501" fill="none" className="gate-icon">
              <g clipPath="url(#clip0_592_14)">
                <path d="M250.5 -1.3916C127.727 -1.3916 27.8333 98.5022 27.8333 221.275V501H55.6666C55.6666 462.618 86.8678 431.417 125.25 431.417V403.583C98.0011 403.583 73.3686 414.828 55.6666 432.92V327.042H236.583V432.92C218.881 414.828 194.249 403.583 167 403.583V431.417C205.382 431.417 236.583 462.618 236.583 501H264.417C264.417 462.618 295.618 431.417 334 431.417V403.583C306.751 403.583 282.119 414.828 264.417 432.92V327.042H445.333V432.92C427.631 414.828 402.999 403.583 375.75 403.583V431.417C414.132 431.417 445.333 462.618 445.333 501H473.167V221.275C473.167 98.5022 373.273 -1.3916 250.5 -1.3916ZM433.003 153.083H264.417V26.9984C341.793 32.4816 406.84 83.3331 433.003 153.083ZM236.583 26.9984V153.083H67.9968C94.1601 83.3331 159.207 32.4816 236.583 26.9984ZM55.6666 299.208V221.275C55.6666 207.442 57.1418 193.943 59.8973 180.917H236.583V299.208H55.6666ZM264.417 299.208V180.917H441.103C443.858 193.943 445.333 207.442 445.333 221.275V299.208H264.417Z" fill="currentColor" />
              </g>
              <defs>
                <clipPath id="clip0_592_14">
                  <rect width="501" height="501" fill="currentColor" />
                </clipPath>
              </defs>
            </svg>
            <div>Cosmic Thinking Lab</div>
          </Link>
        </div>
      </div>

      <div className="full-video w-embed">
        <div style={{ width: "100%", height: "100%" }} className="w-background-video w-background-video-atom">
          <video playsInline loop muted autoPlay data-wf-ignore="true" data-object-fit="cover" preload="auto">
            <source src="https://player.vimeo.com/progressive_redirect/playback/1125882576/rendition/1440p/file.mp4?loc=external&signature=a0067ca78212d9ae569da99e8676f4bac2702af80336b7cdf8cef7ce3ef04388" data-wf-ignore="true" />
          </video>
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-flex">
          <div className="hero-subline">
            <div className="subheading is-hero">DIGITAL EXCELLENCE</div>
          </div>
          <h1 className="hero-title" aria-label="Cosmic Thinking Labs Modern Software & Web Solutions">
            <span className="split-word" aria-hidden="true" style={{ "--word": 1 } as React.CSSProperties}>Cosmic</span>{" "}
            <span className="split-word" aria-hidden="true" style={{ "--word": 2 } as React.CSSProperties}>Thinking</span>{" "}
            <span className="split-word" aria-hidden="true" style={{ "--word": 3 } as React.CSSProperties}>Labs</span>{" "}
            <span className="split-word" aria-hidden="true" style={{ "--word": 4 } as React.CSSProperties}>Modern</span>{" "}
            <span className="split-word" aria-hidden="true" style={{ "--word": 5 } as React.CSSProperties}>Software</span>{" "}
            <span className="split-word" aria-hidden="true" style={{ "--word": 6 } as React.CSSProperties}>&</span>{" "}
            <span className="split-word" aria-hidden="true" style={{ "--word": 7 } as React.CSSProperties}>Web</span>{" "}
            <span className="split-word" aria-hidden="true" style={{ "--word": 8 } as React.CSSProperties}>Solutions</span>
          </h1>
          <div className="nav-bar">
            <Link to="/services" className="nav-button is-btn w-inline-block">
              <div>SERVICES</div>
            </Link>
            <div className="nav-button is-non">/</div>
            <Link to="/portfolio" className="nav-button is-btn w-inline-block">
              <div>WORK</div>
            </Link>
            <div className="nav-button is-non">/</div>
            <Link to="/about" className="nav-button is-btn w-inline-block">
              <div>ABOUT</div>
            </Link>
            <div className="nav-button is-non">/</div>
            <Link to="/careers" className="nav-button is-btn w-inline-block">
              <div>CAREERS</div>
            </Link>
          </div>
          <Link to="/login" className="icon-button is-mobile w-inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 501 501" fill="none" className="gate-icon">
              <g clipPath="url(#clip0_592_14)">
                <path d="M250.5 -1.3916C127.727 -1.3916 27.8333 98.5022 27.8333 221.275V501H55.6666C55.6666 462.618 86.8678 431.417 125.25 431.417V403.583C98.0011 403.583 73.3686 414.828 55.6666 432.92V327.042H236.583V432.92C218.881 414.828 194.249 403.583 167 403.583V431.417C205.382 431.417 236.583 462.618 236.583 501H264.417C264.417 462.618 295.618 431.417 334 431.417V403.583C306.751 403.583 282.119 414.828 264.417 432.92V327.042H445.333V432.92C427.631 414.828 402.999 403.583 375.75 403.583V431.417C414.132 431.417 445.333 462.618 445.333 501H473.167V221.275C473.167 98.5022 373.273 -1.3916 250.5 -1.3916ZM433.003 153.083H264.417V26.9984C341.793 32.4816 406.84 83.3331 433.003 153.083ZM236.583 26.9984V153.083H67.9968C94.1601 83.3331 159.207 32.4816 236.583 26.9984ZM55.6666 299.208V221.275C55.6666 207.442 57.1418 193.943 59.8973 180.917H236.583V299.208H55.6666ZM264.417 299.208V180.917H441.103C443.858 193.943 445.333 207.442 445.333 221.275V299.208H264.417Z" fill="currentColor" />
              </g>
              <defs>
                <clipPath id="clip0_592_14">
                  <rect width="501" height="501" fill="currentColor" />
                </clipPath>
              </defs>
            </svg>
            <div>Cosmic Thinking Lab</div>
          </Link>
        </div>
        <div className="heading-width">
          <h2 className="heading-6 is-hero">Innovation First.</h2>
          <div className="heading-6 gradient-text">Pioneering world-class</div>
          <div className="heading-6 gradient-text">engineering and design.</div>
        </div>
      </div>
    </section>
  );
}
