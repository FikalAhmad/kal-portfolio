import { css } from "@emotion/css";

export const NavbarGlassContainer = css`
  font-family: CircularBold;
  color: var(--white);
  .navbar {
    &--container {
    }
    &--icon {
      display: none;
    }
  }
  .list--menu {
    display: flex;
    justify-content: center;
    margin: 20px auto 0;
    padding: 5px 50px;
    position: fixed;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 500px;
    height: auto;
    transition: top 0.3s;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    z-index: 1;
  }
  .item {
    &--ul {
      display: flex;
      justify-content: space-between;
    }
    &--li {
      padding: 10px 18px;
      margin: 3px;
      border-radius: 8px;
      list-style-type: none;
      transition: 0.3s;
      border: 1px solid transparent;
      &:hover {
        background: rgba(255, 255, 255, 0.3);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        color: black;
      }
    }
  }

  @media screen and (max-width: 576px) {
    .navbar {
      &--container {
      }
      &--container.active {
        display: none;
      }
      &--icon {
        display: flex;
        flex-direction: column;
        row-gap: 7px;
        margin: 20px auto 0;
        padding: 15px;
        position: fixed;
        top: 5%;
        left: 85%;
        transform: translate(-50%, -50%);
        max-width: 100px;
        height: auto;
        transition: top 0.3s;
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        z-index: 2;
      }
      &--icon span {
        background-color: var(--white);
        width: 35px;
        height: 5px;
      }
    }
    .list--menu {
      display: none;
      margin: 0;
      padding: 0;
      position: fixed;
      top: 0;
      left: 0;
      transform: none;
      max-width: 500px;
      height: auto;
      background-color: var(--blue);
    }
    .active {
      display: block;
    }
    .item {
      &--ul {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        min-width: 420px;
      }
      &--li {
        padding: 0px;
        margin: 0px;
        border-radius: 0;
        list-style-type: none;
        transition: 0.3s;
        border: 1px solid transparent;
        &:hover {
          padding: 0;
          border-radius: none;
          background-color: transparent;
          box-shadow: none;
        }
      }
    }
  }
  @media screen and (max-width: 400px) {
    .navbar {
      &--icon {
        padding: 10px;
      }
      &--icon span {
        background-color: var(--white);
        width: 30px;
        height: 5px;
      }
    }
    .item {
      &--ul {
        min-width: 320px;
      }
    }
  }
`;
