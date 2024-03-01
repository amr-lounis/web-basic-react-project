import React, { Component } from "react";

const rectW = 150;
const rectH = 50;
const carN = 5;
const fontMin = 16;
const fontPlus = 8;

interface AppProps {
  validate: (isValid: boolean) => void;
}

interface AppState {
  enteredVal: string;
}

export class Captcha extends Component<AppProps, AppState> {
  private ref = React.createRef<HTMLCanvasElement>();
  private captcha: string = "";
  state = { enteredVal: "" };
  componentDidMount() {
    this.redraw();
  }

  private drawCaptchaBackground(ctx: CanvasRenderingContext2D) {
    for (let x = 0; x < 15; x++) {
      const p1 = Math.random() * rectW;
      const p2 = Math.random() * rectH;

      ctx.beginPath();
      let hue = Math.random() * 360;
      ctx.strokeStyle = `hsl(${hue},100%,50%)`;

      ctx.moveTo(p1, p2);
      let s = 5 - Math.random() * 5;
      ctx.lineTo(p1 + s, p2 + s);
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      hue = Math.random() * 360;
      ctx.strokeStyle = `hsl(${hue},100%,50%)`;
      ctx.moveTo(p1 - 3, p2 + 3);
      s = 5 - Math.random() * 5;
      ctx.arc(p1, p2, 2, 0, 2 * Math.PI);

      ctx.stroke();
      ctx.closePath();
    }
  }

  private drawCaptchaFace(ctx: CanvasRenderingContext2D) {
    let x = 0;
    const y = 20;
    let str = "";
    for (let i = 0; i < carN; i++) {
      ctx.save();
      x = 8 + i * (fontMin + fontPlus);

      const hue = Math.random() * 360;
      ctx.fillStyle = `hsl(${hue},50%,50%)`;

      const fontSize = Math.floor(Math.random() * fontPlus) + fontMin;

      ctx.font = "bolder " + fontSize + "px Arial bold";

      ctx.translate(x, y);
      const rot = Math.random() * 60;
      ctx.rotate((60 - rot) * (Math.PI / 180));
      ctx.translate(-x, -y);

      let char = 0;
      do {
        char = Math.random() * 122;
      } while (
        // Uppercase
        !(char >= 65 && char <= 90) &&
        // Lowercase
        !(char >= 97 && char <= 122) &&
        // Numeric
        !(char >= 48 && char <= 57)
      );
      const ch = String.fromCharCode(char);
      str += ch;
      ctx.fillText(ch, x, y);

      ctx.restore();
    }
    this.captcha = str;
  }

  private redraw() {
    if (this.ref.current == null) return;
    const ctx = this.ref.current.getContext("2d");
    if (ctx == null) return;
    ctx.clearRect(0, 0, rectW, rectH);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, rectW, rectH);
    this.drawCaptchaBackground(ctx);
    this.drawCaptchaFace(ctx);
  }

  public render() {
    return (
      <div
        style={{
          display: "block",
          margin: "auto",
          justifyItems: "center",
          alignItems: "center",
          borderRadius: "3px",
          padding: "3px",
          width: "150px",
          boxSizing: "border-box",
          border: "1px solid gray"
        }}
      >

        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}>
          <canvas
            width={rectW}
            height={rectH}
            style={{
              margin: 0,
              padding: 0,
              alignSelf: "center",
              width: "100%"
            }}
            ref={this.ref}
          />


          {/* --------------------------------- */}

          <button
            style={{
              display: "block",
              margin: 10,
              marginBottom: 10,
              marginLeft: "auto",
              marginRight: "auto",
              width: "50px",
              backgroundColor: "red",
              borderRadius: 70
            }}
            onClick={() => this.onResetClicked()}
          >
            &#x21bb;
          </button>

          {/* --------------------------------- */}

          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Captcha"
            style={{
              display: "block",
              marginBottom: 10,
              marginLeft: "auto",
              marginRight: "auto",
              width: "80%",
              backgroundColor: "#ddd",
            }}
            onChange={e => {
              this.setState({ enteredVal: e.target.value });
            }}
            value={this.state.enteredVal}
          />


          {/* --------------------------------- */}

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              this.onSubmitClicked();
            }}
          >
            Continue
          </button>

          {/* --------------------------------- */}
        </div>
      </div >
    );
  }

  private onSubmitClicked() {
    this.props.validate &&
      this.props.validate(
        this.state.enteredVal.toUpperCase() == this.captcha.toUpperCase()
      );
  }

  private onResetClicked() {
    this.captcha = "";
    this.setState({ enteredVal: "" });
    this.redraw();
  }
}
