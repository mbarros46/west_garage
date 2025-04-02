"use client";
import React, { useState } from "react";
import styles from "./SignIn.module.css";

export default function SignInPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSignUp) {
      console.log("Cadastrando usuário:", { name, email, password });
    } else {
      console.log("Logando usuário:", { email, password });
    }
  }

  return (
    <div className={styles.container}>
      <h1>{isSignUp ? "Cadastrar" : "Entrar"}</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {isSignUp && (
          <div className={styles.field}>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div className={styles.field}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className={styles.button}>
          {isSignUp ? "Cadastrar" : "Entrar"}
        </button>
      </form>

      <p>
        {isSignUp ? "Já possui conta?" : "Não possui conta?"}{" "}
        <button
          type="button"
          className={styles.toggleButton}
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? "Entre aqui" : "Cadastre-se"}
        </button>
      </p>
    </div>
  );
}
