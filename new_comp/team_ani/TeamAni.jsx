import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

function TeamAni() {
 
     const bodyRef= useRef(null)


  useGSAP(() => {
    let bodyScrollBar = Scrollbar.init(bodyRef, {
      damping: 0.1,
      delegateTo: document,
    });
    ScrollTrigger.scrollerProxy(".scroller", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });
    bodyScrollBar.addListener(ScrollTrigger.update);

    gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

    var images = gsap.utils.toArray(".panel:not(.purple)");

    images.forEach((image, i) => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: "section.black",
          scroller: ".scroller",
          start: () => "top -" + window.innerHeight * (i + 0.5),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        },
      });

      tl.to(image, { height: 0 });
    });
  });

  return (
    <StyledTeamAni ref={bodyRef}>
      <div class="scroller">
        <section class="orange">
          <div class="text">This is some text inside of a div block.</div>
        </section>

        <section class="black">
          <div class="text-wrap">
            <div class="panel-text blue-text">Blue</div>
            <div class="panel-text red-text">Red</div>
            <div class="panel-text orange-text">Orange</div>
            <div class="panel-text purple-text">Purple</div>
          </div>

          <div class="p-wrap">
            <div class="panel blue"></div>
            <div class="panel red"></div>
            <div class="panel orange"></div>
            <div class="panel purple"></div>
          </div>
        </section>

        <section class="blue"></section>
      </div>
    </StyledTeamAni>
  );
}

export default TeamAni;

const StyledTeamAni = styled.section`
    margin: 0;
  .scroller {
    height: 100vh;
  }

  .orange {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 100vh;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #753500;
  }

  .text {
    color: #fff;
  }

  .black {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 100vh;
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #070707;
  }

  .blue {
    height: 100vh;
    background-color: #00026d;
  }

  .text-wrap {
    position: relative;
    overflow: hidden;
    width: 450px;
    height: 80vh;
  }

  .panel-text {
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 1;
    width: 100%;
    height: 100%;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 900;
    text-align: center;
    background-color: #070707;

    transform: translateY(100%);
    opacity: 0;
  }

  .panel-text.blue-text {
    color: blue;
  }

  .panel-text.red-text {
    color: red;
  }

  .panel-text.purple-text {
    color: purple;
  }

  .panel-text.orange-text {
    color: orange;
  }

  .p-wrap {
    position: relative;
    overflow: hidden;
    width: 450px;
    height: 80vh;
  }

  .panel {
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-image: url("../images/5ed12171d9d512cb2feead83_5.jpg");
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .panel._2 {
    z-index: 1;
    background-image: url("../images/5f5a5b3515c4dd0c2c455925_110642301_938622823267359_7859124022958180678_n201.jpg");
  }

  .panel.blue {
    z-index: auto;
  }

  .panel.red {
    z-index: auto;
    background-color: red;
    background-image: none;
  }

  .panel.orange {
    z-index: auto;
    background-color: #cf5d00;
    background-image: none;
  }

  .panel.purple {
    z-index: auto;
    background-color: #808;
    background-image: none;
  }
`;
