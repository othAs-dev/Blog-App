import React, { useRef } from "react";
import "./Form.css";
import { useDispatch } from "react-redux";
const Form = () => {
  const dispatch = useDispatch();
  const handleForm = (e) => {
    e.preventDefault();
    const newArticle = {
      title: inputsRef.current[0].value,
      body: inputsRef.current[1].value,
    };

    dispatch({
      type: "ADDARTICLE",
      payload: newArticle,
    });

    e.target.reset();
  };

  const inputsRef = useRef([]);

  const addRef = (el) => {
    if (el && !inputsRef.current.includes(el)) {
      inputsRef.current.push(el);
    }
  };

  return (
    <>
      <h1 className="title-form">Ecrivez in article</h1>
      <form onSubmit={handleForm} className="container-form">
        <label htmlFor="title">Titre</label>
        <input
          ref={addRef}
          type="text"
          id="title"
          placeholder="Entrez le titre"
          className="inp-title"
        />
        <label htmlFor="article">Votre article</label>
        <textarea
          ref={addRef}
          id="article"
          placeholder="Votre articles"
          className="inp-body"
        ></textarea>
        <button>Envoyez l'article</button>
      </form>
    </>
  );
};

export default Form;
