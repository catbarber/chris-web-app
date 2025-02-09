import React, { useEffect, useState } from "react";

export default function NavMenu({ title, hasSearch = false }) {
  const auth = getAuth();

  const [cookies] = useCookies(["displayName", "email", "photoURL"]);

  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState(true);
  const photoURL = useSelector(selectPhotoUrl) || cookies.photoURL;
  useEffect(() => {
    // set a clean up flag
    let isSubscribed = true;
    auth.onAuthStateChanged((user) => {
      if (isSubscribed) {
        if (user && user.isAnonymous) {
          setMessage("You will not have full access as a guest user.");
          setIsDisabled(false);
        } else if (!user) {
          setIsDisabled(true);
        } else {
          setIsDisabled(false);
        }
      }
    });

    // cancel subscription to useEffect
    return () => (isSubscribed = false);
  });
  return (
    <div className={styles.headerContainer}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        {message && <p className={styles.headerParagraph}>{message}</p>}
      </div>

      <div className={styles.headerButtonsContainer}>
        <div>
          <a href="https://twitter.com/Cfeveck" className="btn">
            <TwitterIcon color="action" fontSize="large" />
          </a>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div>
          <a href="https://github.com/fevjitsu" className="btn">
            <GitHubIcon color="action" fontSize="large" />
          </a>
        </div>
        <div>
          <button onClick={() => history.push("/home")}>
            <span>Home</span>
          </button>
        </div>
        <div>
          <button onClick={() => history.push("/blogs")} disabled={isDisabled}>
            <span> Blog</span>
          </button>
        </div>
        {!viewContact && (
          <div>
            <button onClick={() => dispatch(showContact())}>
              <span>Contact me</span>
            </button>
          </div>
        )}
        {viewContact && (
          <div className={styles.headerContactContainer}>
            <Contact handleClose={() => dispatch(hideContact())} />
          </div>
        )}
        <LogoutButton />
        {photoURL && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}>
            <img id={styles.headerImage} src={photoURL} alt="google's user" />
          </div>
        )}
      </div>
    </div>
  );
}
