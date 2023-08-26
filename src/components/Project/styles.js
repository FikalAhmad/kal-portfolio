import { css } from "@emotion/css";

export const CardProjectContainer = css`
  font-family: CircularLight;
  color: var(--darkblue);
  padding: 150px 100px 100px;
  background-color: var(--lightblue);
  background-image: url("/src/assets/images/wave.svg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: top;
  height: auto;

  h1 {
    font-family: CircularMedium;
    font-size: 36px;
    margin-bottom: 30px;
    &::before {
      content: "";
      display: inline-block;
      width: 150px;
      border-top: 10px solid var(--darkblue);
      border-radius: 10px;
      margin-right: 10px;
    }
  }
  .project {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 50px 20px;
    &--container {
      display: flex;
      flex-direction: column;
      max-width: 350px;
      padding: 25px;
      background-color: var(--darkblue);
      color: var(--white);
      border-radius: 10px;
    }
    &--image {
      min-width: 250px;
      border-radius: 10px;
    }
    &--header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .icon {
    &--link {
      min-width: 30px;
      min-height: 30px;
      padding-right: 10px;
    }
  }

  .p {
    &--title {
      font-family: CircularMedium;
      font-size: 24px;
      padding: 15px 0;
    }
    &--desc {
      text-align: justify;
    }
    &--techuse {
      font-family: CircularBold;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      color: var(--darkblue);
      font-size: 12px;
      padding: 15px 0;
    }
    &--techuse p {
      padding: 5px 8px;
      background-color: var(--white);
      border-radius: 8px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 150px 50px 100px;
    .project {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 20px 0px;
      &--container {
        max-width: 320px;
      }
    }
    .icon {
      &--link {
        min-width: 30px;
        min-height: 30px;
        padding-right: 10px;
      }
    }
  }

  @media screen and (max-width: 576px) {
    padding: 150px 25px 100px;
    h1 {
      &::before {
        width: 70px;
        border-radius: 10px;
      }
    }
    .project {
      justify-content: center;
    }
  }
  @media screen and (max-width: 400px) {
    padding: 100px 25px 100px;
    h1 {
      &::before {
        width: 0;
        border-radius: none;
        display: none;
      }
    }
    .project {
      &--container {
        min-width: 250px;
        padding: 20px;
      }
      &--image {
        min-width: 200px;
      }
    }

    .icon {
      &--link {
        max-width: 20px;
        height: auto;
        padding-right: 0;
      }
    }
  }
`;
