import { css } from "@emotion/css";

export const NavbarContainer = css`
  font-family: CircularBold;
  color: var(--blue);
  .navbar {
    padding: 25px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    transition: top 0.3s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: var(--white);
    z-index: 1;
  }

  .visible {
    top: 0;
  }

  .hidden {
    top: -100px; /* Menyembunyikan navbar di atas layar */
  }

  .image {
    &--container {
    }
    &--img {
      max-width: 180px;
    }
  }

  .item {
    &--ul {
      display: flex;
      justify-content: space-between;
      min-width: 400px;
    }
    &--li {
      padding: 10px 18px;
      border-radius: 8px;
      list-style-type: none;
      transition: 0.3s;
      &:hover {
        background-color: var(--blue);
        color: var(--white);
      }
      &.active {
        background-color: var(--blue);
        color: var(--white);
      }
    }
  }
  /* .item {
    &--wrap {
      &_active {
      }
      &_disable {
        display: none;
      }
    }
    &--ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 100px 0;
      position: absolute;
      top: 0;
      left: 0;
      min-width: 100vw;
      min-height: 100vh;
      z-index: 98;
    }
    &--li {
      list-style-type: none;
      color: white;
    }
  }

  .burger {
    &--icon {
      width: 30px;
      height: 23px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 99;
    }
    &--item {
      padding: 1.8px 1px;
      background-color: white;
    }
  } */
`;
