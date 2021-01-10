import styled from 'styled-components'


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

  .selections {
    margin-top: -8px;
    
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