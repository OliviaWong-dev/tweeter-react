import React from "react";

function TweetForm() {
  const inputText = "What are you humming about?";
  return (
    <h1>
      <section className="newtweet">
        <form method="post" action="/tweets" className="newtweet__form">
          <textarea
            className="form__textarea"
            name="text"
            placeholder={inputText}
          ></textarea>
          <input type="submit" value="Tweet" className="form__input"></input>
          <span className="form__counter">140</span>
        </form>
      </section>
    </h1>
  );
}

export default TweetForm;
