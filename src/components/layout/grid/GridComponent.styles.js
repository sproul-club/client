import styled from 'styled-components'


export const GridComponentStyles = styled.div`
.club-card {
  width: 375px;
  width: 100%;
  background: pink;
}

.info-flex {
  display: flex;
  flex-direction: column;
}

.icon-title-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3px;
}

.card-club-logo {
  width: 60px;
  height: 60px;
  margin-right: 15px;
}

.club-name {
  letter-spacing: 0.03em;
  font-size: 22px;
  font-family: Qanelas Soft;
  font-weight: bold;
}

.grid-tags-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -13px;
}

.grid-tag {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  margin-left: 15px;
  background-color: #e2e2e2;
  border-radius: 5px;
  padding: 0vw 0.5vw 0vw 0.5vw;
  font-family: Qanelas Soft Semi Bold;
  font-size: 17px;
}

.grid-tag span {
  margin-left: 0.3em;
}

.req-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -13px;
}

.noresults-content {
  display: flex;
  flex-direction: column;
  /*background: #000000;*/
  margin-left: -13px;
  height: 50vh;

  justify-content: left;
  align-items: flex-start;
}

.noresults-text {
  margin: 0px;
  font-family: Qanelas Soft Semi Bold;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 370px); 
  justify-content: space-around;
  grid-gap: 1em;
}

.noresults-image-container {
  display: flex;
  flex-direction: column;

  width: stretch;
  height: 900px;

  margin-left: 8px;
  font-family: Qanelas Soft Semi Bold;

  /*background: #000000;*/
  justify-content: center;
  align-items: center;

}

.noresults-content {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
}

.noresults-image {
  height: 300px;
  margin-bottom: 40px;
}

#app-req {
  background-color: #fff1ae;
}

#app-not-req {
  background-color: #cdeaff;
}

#open-tag {
  background-color: #c9f0c9;
}

#not-open-tag {
  background-color: #ffd6d6;
}

.num-results {
  font-size: 11px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 1px;
}

@media (max-width: 1920px) {
  .card-club-logo {
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }

  .club-name {
    font-size: 15px;
  }
  .grid-tags-flex {
    margin-left: -5px;
  }
  .req-flex {
    margin-left: -5px;
  }
  .grid-tag {
    font-size: 12px;
    margin-top: 6px;
    margin-left: 4px;
  }
}
@media screen and (max-width: 850px) {
  .card-club-logo {
    width: 45px;
    height: 45px;
    margin-right: 15px;
  }

  .club-name {
    font-size: 18px;
  }
  /*
  .req-flex {
    margin-left: -2px;
  } */
  .grid-tag {
    font-size: 13px;
    margin-top: 4px;
    margin-left: 8px;
  }
  .card-grid {
    justify-content: space-around;
  }
}
`