import { css } from "@emotion/css";

export const ProfileContainer = css`
  color: black;
  font-family: CircularMedium;
  padding: 100px;
  background-color: var(--blue);

  .profile {
    &--container {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
    }
    &--image-wrapper {
    }
    &--image {
      max-width: 500px;
      -webkit-mask-image: url(/src/assets/images/shape.png);
      mask-image: url(/src/assets/images/shape.png);
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      mask-position: center;
      mask-size: 80%;
    }
    &--text {
      margin-right: 50px;
    }
  }
  .p {
    &--name {
      color: var(--white);
      font-family: CircularBold;
      font-size: 56px;
    }
    &--desc {
      color: var(--white);
      max-width: 220px;
      font-size: 24px;
      text-align: justify;
      margin: 20px 0;
    }
    &--button-wrap {
      display: flex;
      max-width: 350px;
      justify-content: space-between;
    }
    &--button {
      font-family: CircularMedium;
      /* padding: 13px 30px; */
      color: var(--blue);
      font-size: 16px;
      background-color: var(--white);
      border: none;
      border-radius: 8px;
      transition: 0.3s;
      &:hover {
        background-color: var(--darkblue);
        color: var(--white);
      }
    }
  }
  .link {
    display: block;
    padding: 13px 30px;
    text-decoration: none;
    color: var(--blue);
    &:hover {
      color: var(--white);
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 100px 30px;

    .profile {
      &--container {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
      }
      &--image {
        border-radius: 50%;
        max-width: 350px;
      }
      &--text {
        margin-right: 20px;
      }
    }
    .p {
      &--name {
        font-size: 48px;
      }
      &--button-wrap {
        display: flex;
        max-width: 350px;
        justify-content: space-between;
      }
      &--button {
        font-family: CircularMedium;
        padding: 13px 30px;
        color: var(--blue);
        font-size: 16px;
        background-color: var(--white);
        border: none;
        border-radius: 8px;
      }
    }
  }

  @media screen and (max-width: 576px) {
    padding: 80px 25px;
    .profile {
      &--container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      &--image {
        border-radius: 50%;
        max-width: 350px;
      }
      &--text {
        margin-right: 0;
      }
    }
    .p {
      &--name {
        font-size: 48px;
      }
      &--desc {
        font-size: 20px;
      }
      &--button-wrap {
        max-width: none;
      }
    }
    .link {
      min-width: 165px;
    }
  }
  @media screen and (max-width: 400px) {
    padding: 50px 25px;
    .p {
      &--name {
        font-size: 40px;
      }
      &--desc {
        font-size: 18px;
      }
      &--button {
        font-size: 14px;
      }
    }
    .link {
      min-width: 100px;
    }
  }
`;
