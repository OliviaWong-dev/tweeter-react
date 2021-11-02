import React from "react";

function TweetForm() {
  return (
    <h1>
      <section class="newtweet">
        <form method="post" action="/tweets" class="newtweet__form">
          <textarea
            class="form__textarea"
            name="text"
            placeholder="What are you humming about?"
          ></textarea>
          <input type="submit" value="Tweet" class="form__input"></input>
          <span class="form__counter">140</span>
        </form>
      </section>
    </h1>
  );
}

export default TweetForm;
