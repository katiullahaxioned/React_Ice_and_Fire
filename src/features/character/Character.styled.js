import styled, {keyframes} from "styled-components";

const slideFromRight = keyframes`
  0% { transform: translateX(100%)}
  50% { transform: translateX(-10%)}
  70% { transform: translateX(10%)}
  100% { transform: translateX(0%)}
`

const slideFromLeft = keyframes`
  0% { transform: translateX(-100%)}
  50% { transform: translateX(10%)}
  70% { transform: translateX(-10%)}
  100% { transform: translateX(0%)}
`

const StyledSection = styled.section`
  padding: 20px;

  .character-wrapper { overflow: hidden; }
  
  .section-title {
    width: fit-content;
    padding: 5px 15px;
    border-radius: ${props => props.theme.defaultRadius};
    margin: 0 auto;
    position: relative;
    color: ${props => props.theme.dark};
    font-size: 26px;
    font-weight: 600;
    text-align: center;
    text-shadow: 0 0 3px ${props => props.theme.white};
    text-transform: capitalize;

    &::before,
    &::after {
      content: '';
      width: 50%;
      height: 100%;
      position: absolute;
      z-index: -1;
      top: 0;
      transform: skew(-30deg);
    }

    &::before {
      left: 0;
      background-color: ${props => props.theme.dark};
    }

    &::after {
      right: 0;
      background-color: ${props => props.theme.midGray};
    }
  }

  .character-cards-all {
    margin: 20px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .character-card {
    padding: 10px;
    border-radius: ${props => props.theme.defaultRadius};
    display: flex;
    background-color: ${props => props.theme.lightGray};
    flex-direction: column;

    &.slide-left {
    animation: ${slideFromLeft} .6s ease-in forwards;
    }

    &.slide-right {
    animation: ${slideFromRight} .6s ease-in forwards;
    
    }

    > * {
      padding: 10px 0;
      display: grid;
      grid-template-columns: minmax(140px, .5fr) 1fr;
      border-bottom: 2px solid ${props => props.theme.dark};

      &:last-child { border-bottom: none; }

      > span:first-child {
        font-weight: 600;
        text-transform: capitalize;
      }
    }
  }

  .loading-text,
  .error-text {
    margin: 20px 0;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    text-transform: capitalize;
  }

  .pagination-controls {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    justify-content: center;
    gap: 20px;

    .control {
      padding: 7px 15px;
      border-radius: ${props => props.theme.defaultRadius};
      background-color: ${props => props.theme.midGray};
      color: ${props => props.theme.dark};
      cursor: pointer;
      transition: all .3s;

      &.disabled {
        background-color: ${props => props.theme.lightGray};
        pointer-events: none;
      }

      &:hover {
        background-color: ${props => props.theme.dark};
        color: ${props => props.theme.lightGray};
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .character-cards-all { grid-template-columns: repeat(2, 1fr); }
  }

  @media only screen and (max-width: 768px) {
    .character-cards-all { grid-template-columns: 1fr; }
  }
`

export default StyledSection;