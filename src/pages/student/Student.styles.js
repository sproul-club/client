import styled from 'styled-components'

const openDDStyles = 'border-bottom: none;' +
                     'border-radius: 5px 5px 0px 0px;'

export const StudentSettingStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
  min-height: 100vh;
  * {
    box-sizing: border-box;
    font-family: 'Qanelas Soft';
  }
  
  .settings-wrapper {
    position: relative;
    height: 560px;
    width: 450px;
    background: white;
    padding: 30px 48px;
    border-radius: 10px;
    border: 1px solid #c4c4c4;
  }

  .label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  .email {
    margin-bottom: 18px;
    color: #696969;
    font-size: 14px;
  }

  .names-input {
    position: relative;
    padding-left: 12px;
    margin-bottom: 18px;
    height: 30px;
    border-radius: 5px;
    width: 100%;
    border: 1px solid #c4c4c4;
  }

  .settings-selection {
    position: relative;
    width: 100%;
    margin-bottom: 16px;
    cursor: pointer;

    * {
      -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
         -khtml-user-select: none; /* Konqueror HTML */
           -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently
                                      supported by Chrome, Edge, Opera and Firefox */
    }

    .selection-input {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      height: 30px;
      padding: 5px 10px;
      border: 1px solid rgb(200, 196, 196);
      border-radius: 5px;

      .placeholder {
        color: #8D8D8D;
      }
    }

    .year {
      ${props => props.year && openDDStyles}
    }
    .major {
      ${props => props.major && openDDStyles}
    }
    .minor {
      ${props => props.minor && openDDStyles}
    }
    .interests {
      ${props => props.interests && openDDStyles}
    }

    .selection-dropdown {
      position: relative;
      background: white;
      border: 1px solid rgb(200, 196, 196);
      z-index: 999;
      width: 100%;
      border-radius: 0px 0px 5px 5px;
      max-height: 200px;
      overflow-y: auto;
      position: absolute;

      .dropdown-option {
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 12px;
        height: 20.5px;
        line-height: 20.5px;
        padding-left: 12px;

        &:hover {
          background: #CDEAFF;
        }
        input {
          margin: 0px;
          margin-right: 5px;
          margin-top: 3px;
          margin-bottom: 3px;
        }
      }
    }

    .selections {
      margin-top: 8px;
      
      .selection {
        border: 1px solid #D1D3D4;
        color: #747474;
        font-size: 12px;
        border-radius: 6px;
        display: inline-block;
        padding: 2.5px 6.5px;
        margin-right: 10px;
        margin-bottom: 5px;
      }
    }

  }
  
  .scrollable-content {
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .save-button {
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    position: absolute;
    bottom: 30px;
    right: 48px;
    background: #54A0F1;
    color: white;
    padding: 10px 5px;
    width: 67px;
    border-radius: 10px;
    transition: background-color 0.15s;

    &:hover {
      background-color: #6eaff5;
    }
  }


`