import { useState, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./App.css";
import Blogger from "./features/blog/Blogger.jsx";
function App() {
  const [showmain, setshowmain] = useState(true);
  const [showblog, setshowblog] = useState(false);
  useEffect(() => {
    if (showblog) {
      setshowmain(false);
    } else {
      setshowmain(true);
    }
  }, [showmain, showblog]);
  return (
    <>
      <div className="container">
        <div
          style={{
            marginTop: "20px",
            marginLeft: "20px",
            marginBottom: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "spaced-around",
          }}>
          <div>
            <a
              href="https://www.facebook.com/christooher.feveck"
              target="_blank">
              <FacebookIcon />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/notfeveck/" target="_blank">
              <InstagramIcon />
            </a>
          </div>
          <div>
            <a href="https://x.com/chris_feveck" target="_blank">
              <XIcon />
            </a>
          </div>

          <div>
            {showmain && (
              <>
                <span className="box">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <NewspaperIcon
                    style={{ color: "#646cff", cursor: "pointer" }}
                    onClick={() => setshowblog(!showblog)}
                  />
                </span>
              </>
            )}
          </div>
        </div>

        <div>
          {
            <div id="homePage">
              <div>
                <div>
                  {showmain && (
                    <div>
                      <h1 style={{ textAlign: "center" }}>
                        Author
                        <br />
                        Entrepreneur
                        <br />
                        Software Developer
                      </h1>
                      <div>
                        <hr />
                      </div>
                      <div>
                        {showmain && (
                          <div id="mainContent">
                            <div style={{ textAlign: "center" }}>
                              <br />
                              <img
                                src="https://picsum.photos/200/300"
                                alt="Chris Feveck | Christopher Feveck"
                                height={"220px"}
                                width={"220px"}
                                style={{
                                  borderRadius: "50%",
                                }}
                              />
                            </div>
                            <h2 style={{ textAlign: "center" }}>
                              I'm&nbsp;
                              <em>
                                <span
                                  style={{
                                    color: "transparent",
                                    position: "absolute",
                                    zIndex: "-99",
                                  }}>
                                  Chris Feveck
                                </span>
                                <a
                                  href="https://www.threads.net/@notfeveck"
                                  target="_blank">
                                  Christopher Feveck
                                </a>
                              </em>
                              , <br />
                              a&nbsp;software developer <br />
                              with a <em>focus</em>&nbsp;in&nbsp;
                              <br />
                              <em>
                                <a
                                  href="https://refined-reality.com"
                                  target="_blank">
                                  digital marketing
                                </a>
                              </em>
                              .
                              <hr />
                            </h2>
                            <div>
                              <p
                                style={{
                                  paddingLeft: "20%",
                                  paddingRight: "20%",
                                }}>
                                A passion project of mine is writing a book
                                series. Creating something out of nothing seems
                                a common theme in my life and I want to share
                                something positive. The best way I can
                                communicate that effectively is through story
                                telling. Check out my &nbsp;
                                <a href="https://voyagesofvictora.web.app/">
                                  novel series
                                </a>
                                .
                                <br />
                                As a software developer, I seek to bridge the
                                gap between technical expertise and strategic
                                communication, crafting user-friendly software
                                and amplifying its reach through targeted
                                marketing campaigns.
                                <br />
                              </p>
                              <div style={{ textAlign: "center" }}>
                                <h4>
                                  <strong>
                                    Below are some of my projects:
                                  </strong>
                                </h4>
                              </div>
                              <ul
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  textAlign: "center",
                                }}>
                                <li>
                                  <a href="https://superior-atmosphere.com">
                                    Superior Atmosphere.
                                  </a>
                                </li>

                                <li>
                                  <a href="https://voyagesofvictora.web.app">
                                    The Voyages of Victora - Series book.
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                        {showblog && (
                          <div id="blogContent">
                            <Blogger />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  {showblog && (
                    <div style={{ margin: "36px" }}>
                      <h1 style={{ marginBottom: "24px", marginTop: "64px" }}>
                        Blogs - Improving your digital presense.
                      </h1>
                      <br />
                      {!showmain && (
                        <div
                          style={{
                            color: "#646cff",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "flex-end",
                          }}>
                          &nbsp;
                          <span
                            onClick={() => {
                              setshowmain(true);
                              setshowblog(false);
                            }}>
                            <ArrowBackIosNewIcon
                              onClick={() => {
                                setshowmain(true);
                                setshowblog(false);
                              }}
                            />
                            &nbsp;HOME
                          </span>
                        </div>
                      )}
                      <br />
                      <Blogger />
                    </div>
                  )}
                </div>
              </div>
            </div>
          }
          <hr />
          <div className="copyright">
            <div>
              <span>created and maintained by</span>&nbsp;
              <span>
                <a href="https://refined-reality.com/">refined-reality.com</a>
              </span>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}

export default App;
